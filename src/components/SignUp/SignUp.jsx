import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvide";
import Swal from "sweetalert2";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, updateProfilePic } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setError("");
    setSuccess("")
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("At least one upper case English letter!");
      return;
    } else if (password.length < 8) {
      setError("Password must be 8 character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        Swal.fire({
          showConfirmButton: false,
          timer: 1000,
          title:'Registration completed Successfully',
          icon:'success'
        })
        
        updateProfilePic(name, photo)
          .then((getImage) => {
            const loggedUser = result.user;
            navigate(from, { replace: true });
            setSuccess("Successfully create your account");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen py-12 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Please Registration</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <input type="checkbox" className="checked:bg-black" />
              <p>Accept terms & conditions </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn mb-5">Sign up</button>
            </div>
            <p className="text-green-600">{success}</p>
            <p className="text-red-600">{error}</p>
            <Link className="hover:underline" to="/login">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
