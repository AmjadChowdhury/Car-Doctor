import { useContext } from "react";
import logimg from "../../assets/images/login/login.svg"
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        signIn(email,password)
        .then(result => {
            console.log(result.user)
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 5000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: `${result.user.email} Signed in successfully`
            });
            form.reset()
            navigate("/")
        })
        .catch(error => {
            console.log(error)
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 5000,
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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left w-1/2">
          <img src={logimg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 border-orange-200">
          <form className="card-body" onSubmit={handleLogin}>
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
            <div>
              <h1 className="text-center text-sm font-bold">You have no accout ?Plaese <Link to="/signup" className="text-orange-500">Register</Link></h1>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="LogIn" className="btn bg-orange-500 text-white text-lg font-extrabold" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
