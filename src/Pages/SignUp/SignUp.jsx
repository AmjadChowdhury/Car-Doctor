import { useContext } from "react";
import logimg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
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

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile update");
          })
          .catch((error) => {
            console.log(error);
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
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left w-1/2">
          <img src={logimg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 border-orange-200">
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
                type="text"
                placeholder="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <h1 className="text-center text-sm font-bold">
                Already have an accout !!Plaese
                <Link to="/login" className="text-orange-500">
                  LogIn
                </Link>
              </h1>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-orange-500 text-white text-lg font-extrabold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
