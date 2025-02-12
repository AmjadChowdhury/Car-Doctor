import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email : userEmail}
            setuser(currentUser)
            console.log(currentUser)
            setLoading(false)
            //if user exist
            if(currentUser){
                axios.post('https://car-doctor-server-three-topaz.vercel.app/jwt',loggedUser,{withCredentials: true})
                .then(res => {
                    // console.log(res.data)
                })
            }
            else{
                axios.post('https://car-doctor-server-three-topaz.vercel.app/logout',loggedUser,{withCredentials: true})
                .then(res => {
                    // console.log(res.data)
                })
            }
        })
        return ()=>{
            return unSubscribe()
        }
    },[user?.email])
    
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