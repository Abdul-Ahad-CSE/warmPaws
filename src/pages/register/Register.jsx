import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }
    const password = form.password.value;
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }
    //console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card bg-base-100 w-full space-y-5 max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body py-5">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* Phot URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {emailError && <p className="text-red-700 text-xs">{emailError}</p>}

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

            {passwordError && (
              <p className="text-red-700 text-xs">{passwordError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center mt-3">
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
