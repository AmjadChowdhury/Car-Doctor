import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GiClick } from "react-icons/gi";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  const [click,setClick] = useState(false)

  const handleUpdate = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    // console.log(name,photo)
    updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
    })
    .then(()=> {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `${name} profile updated`
          });
    })
    .catch(error => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: `${error.message}`
          });
    })
  }
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2 mb-2">
      <div className="space-y-2 w-full">
        <h1 className="text-xl lg:text-3xl font-extrabold">Hey, 
          <span className="text-[#123458] font-extrabold">{displayName} </span><br />welcome to carDoctor
        </h1>
        <div className="flex items-center mt-2">
          <img
            src={photoURL}
            alt={`${displayName} astese,,wait`}
            className="w-full lg:w-4/5 h-[300px] rounded-lg"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <h1 className="text-2xl text-green-500 font-extrabold mb-2">
            Do you want any update
          </h1>
          <GiClick className="text-4xl text-[#123458]" onClick={()=>setClick(!click)}></GiClick>
        </div>
        <div className={`${click? '': 'hidden'}`}>
          <div className="card bg-base-100 w-full shrink-0 border-2 border-[#D4C9BE]">
            <form className="card-body" onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={user.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder={user.photoURL}
                  defaultValue={user.photoURL}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
              <input type="submit" value="Update" className="btn bg-[#123458] text-white text-lg font-extrabold" />
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
