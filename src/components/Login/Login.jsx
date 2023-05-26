import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvide";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const [passShow, setPassShow] = useState(false)
  const { logInUser, GoogleLogin, GithubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () =>{
    GoogleLogin()
    .then(result => navigate(from, {replace: true}))
    .catch(error => setError(error.message))

  }
  const handleGithubLogin = () =>{
    GithubLogin()
    .then(result => navigate(from, {replace: true}))
    
    .catch(error => setError(error.message))
  }

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, {replace: true});
        Swal.fire({
          showConfirmButton: false,
          timer: 1000,
          title:'Login Successful',
          icon:'success'
        })
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  return (
    <div className="hero min-h-screen py-12 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Please Login Here </h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn}className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passShow ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p onClick={() => setPassShow(!passShow)}><small>
            {
                passShow ? <span>Hide Pass</span> : <span>Show Pass</span>
            }
            </small></p>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn mb-5">Sign in</button>
              <p className='text-red-600'>{error}</p>
            </div>
            
            <Link className="hover:underline" to="/register">
            Do not have an account? Register here.
            </Link>
          </form>
          <div className="text-center mb-10">
              <p className="pb-3">Or signUp using:</p>
              <div className="flex gap-3 justify-center ">
              <button onClick={()=> handleGoogleLogin()} className="text-2xl "><FaGoogle></FaGoogle></button>
              <button onClick={()=> handleGithubLogin()} className="text-2xl"><FaGithub></FaGithub></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
