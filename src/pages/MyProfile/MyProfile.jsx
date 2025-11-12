import React from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export default function MyProfile() {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Profile
      </h2>

      {user ? (
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Image */}
          <img
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
          />

          {/* Name */}
          <p className="text-xl font-medium">
            Name:{" "}
            <span className="text-gray-700">
              {user.displayName || "No name set"}
            </span>
          </p>

          {/* Email */}
          <p className="text-xl font-medium">
            Email: <span className="text-gray-700">{user.email}</span>
          </p>

          {/* Update Button */}
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => {
              toast.error("Update Profile Clicked");
            }}
          >
            Update Profile
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">No user logged in</p>
      )}
    </div>
  );
}
