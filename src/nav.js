import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import links from "./nav.json";
function Navigation() {
  const { currentUser } = useSelector((state) => state.users);
  const location = useLocation();
  const { pathname } = location;
  // const links = [
  //   { path: "/tuiter", label: "Tuiter" },
  //   { path: "/labs/a3", label: "A3" },
  //   { path: "/labs/a4", label: "A4" },
  //   { path: "/labs/a5", label: "A5" },
  //   { path: "/labs/a6", label: "A6" },
  //   { path: "/labs/a7", label: "A7" },
  //   { path: "/labs/a8", label: "A8" },
  // ];
  return (
    <div className="nav nav-pills mt-2 mb-2">
      {!currentUser && (
        <Link className="nav-link" to="/login">
          Login
        </Link>
      )}
      {currentUser && (
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      )}

      {links.map(({ path, label }) => (
        <Link
          key={path}
          className={`nav-link ${pathname === path ? "active" : ""}`}
          to={path}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
