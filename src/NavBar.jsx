import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log("Redux user:", user);

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩‍💻 DevTinder
        </Link>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          {/* Welcome Text */}
          <div className="text-white text-lg font-medium">
            Welcome, {user.firstName}
          </div>

          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              alt="user photo"
              src={user.photoUrl}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
