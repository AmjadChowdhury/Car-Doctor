import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])
    
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        user,
        createUser
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