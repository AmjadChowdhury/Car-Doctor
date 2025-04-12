import { useContext } from "react";
import logimg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_imgbb_KEY;
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const SignUp = () => {
  const { createUser } = useContext(AuthContext);


  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoFile = form.photo.files[0];
    if(password.length<6){
      return Swal.fire({
        icon: "error",
        title: `Oops...${name}`,
        text: "Password must be greater than six character!!"
      });
    }
    if(!/[A-Z]/.test(password)){
      return Swal.fire({
        icon: "error",
        title: `Oops...${name}`,
        text: "Password must have one uppercase letter!!"
      });
    }

    const formData = new FormData();
    formData.append("image", photoFile);

    fetch(image_hosting_Api, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      const photoURL = imgData.data.display_url;
      createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // console.log("profile update");
          })
          .catch((error) => {
            // console.log(error);
          });
        Swal.fire({
          title: `${name} register account successfully`,
          text: "Now,you can log In",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
      })
      .catch((error) => {
        // console.log(error);
      });
  })

    // createUser(email, password)
    //   .then((result) => {
    //     // console.log(result.user);
    //     updateProfile(auth.currentUser, {
    //       displayName: name,
    //       photoURL: photo,
    //     })
    //       .then(() => {
    //         // console.log("profile update");
    //       })
    //       .catch((error) => {
    //         // console.log(error);
    //       });
    //     Swal.fire({
    //       title: `${name} register account successfully`,
    //       text: "Now,you can log In",
    //       icon: "success",
    //       confirmButtonText: "Cool",
    //     });
    //     form.reset();
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //   });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left w-1/2">
          <img src={logimg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 border-[#D4C9BE]">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
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
                type="file"
                placeholder="photo"
                className="file-input w-full bg-[#123458] text-white"
                required
              />
            </div>
            
            <div>
              <h1 className="text-center text-sm font-bold">
                Already have an accout !!Plaese 
                <Link to="/login" className="text-[#123458] underline">
                   LogIn
                </Link>
              </h1>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-[#123458] text-white text-lg font-extrabold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
