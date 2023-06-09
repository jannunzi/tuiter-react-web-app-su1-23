import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk } from "./users-thunks";
import { useNavigate } from "react-router";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(profileThunk());
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
