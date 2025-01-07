import logimg from "../../assets/images/login/login.svg"

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-sm text-orange-500">
                  Forgot password?
                </a>
              </label>
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
