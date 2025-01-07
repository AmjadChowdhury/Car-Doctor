import { useContext } from "react";
import logimg from "../../assets/images/login/login.svg"
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }
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
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn bg-orange-500 text-white text-lg font-extrabold" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
