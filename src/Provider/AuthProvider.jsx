import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)

    const authInfo = {
        user
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