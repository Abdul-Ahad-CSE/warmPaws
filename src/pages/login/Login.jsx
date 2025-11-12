import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log({email,password});
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        toast.success("Logged in successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        //alert(errorCode, errorMessage);
        setError(errorCode);
        toast.error("Login failed! Please check your credentials.");
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card bg-base-100 w-full space-y-5 max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body py-5">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>

            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-6 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-700 text-xs">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center mt-3">
              Don't have an account? <Link to="/auth/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
