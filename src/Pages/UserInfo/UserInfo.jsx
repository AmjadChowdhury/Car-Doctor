import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserInfo = () => {
    const {user} = useContext(AuthContext)
    const {email,displayName,photoURL} = user
    return (
        <div className="w-3/4 lg:w-1/2 m-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-xl lg:text-3xl font-extrabold text-orange-700">{displayName}</h1>
                <h1 className="text-xl lg:text-3xl font-extrabold text-orange-900">Email : {email}</h1>
                <div className="">
                    <img src={photoURL} alt={`${displayName} astese,,wait`} />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;