import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])
    
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const githubProvider = new GithubAuthProvider()
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;