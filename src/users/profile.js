import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "./users-thunks";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as tuitsService from "../tuiter/tuits-service";
import * as napsterService from "../project/napster-service";
function ProfileScreen() {
  const [albumsIlike, setAlbumsIlike] = useState([]);
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState(currentUser);
  const [myTuits, setMyTuits] = useState([]);
  const [peopleIFollow, setPeopleIFollow] = useState([]);
  const [peopleWhoFollowMe, setPeopleWhoFollowMe] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/project/search");
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMyLikes = async () => {
    const albums = await napsterService.findAlbumsILike();
    setAlbumsIlike(albums);
  };

  const fetchPeopleIFollow = async () => {
    const people = await napsterService.findPeopleIFollow();
    setPeopleIFollow(people);
  };

  const fetchPeopleWhoFollowMe = async () => {
    const people = await napsterService.findPeopleWhoFollowMe();
    setPeopleWhoFollowMe(people);
  };

  useEffect(() => {
    fetchPeopleWhoFollowMe();
    fetchPeopleIFollow();
    fetchMyLikes();
    const fetchProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.error(error);
        navigate("/project/search");
      }
    };
    // const fetchMyTuits = async () => {
    //   try {
    //     const tuits = await tuitsService.findMyTuits();
    //     setMyTuits(tuits);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    fetchProfile();
    // fetchMyTuits();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <>
          <label>Username</label>
          <input className="form-control" value={profile.username} readOnly />
          <label>Password</label>
          <input
            className="form-control"
            value={profile.password}
            type="password"
          />
          <label>First Name</label>
          <input
            className="form-control"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label>Last Name</label>
          <input
            className="form-control"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <button onClick={handleUpdate} className="btn btn-primary">
            Update
          </button>
        </>
      )}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      {peopleWhoFollowMe && (
        <>
          <h3>People who follow me</h3>
          <div className="list-group">
            {peopleWhoFollowMe &&
              peopleWhoFollowMe.map((person) => (
                <Link
                  to={`/project/profile/${person._id}`}
                  className="list-group-item"
                  key={person._id}
                >
                  <h4>{person.username}</h4>
                </Link>
              ))}
          </div>
        </>
      )}

      {peopleIFollow && (
        <>
          <h3>People I follow</h3>
          <div className="list-group">
            {peopleIFollow &&
              peopleIFollow.map((person) => (
                <Link
                  to={`/project/profile/${person._id}`}
                  className="list-group-item"
                  key={person._id}
                >
                  <h4>{person.username}</h4>
                </Link>
              ))}
          </div>
        </>
      )}

      {albumsIlike && (
        <>
          <h3>Albums I like</h3>

          <div className="list-group">
            {albumsIlike &&
              albumsIlike.map((album) => (
                <Link
                  to={`/project/details/${album.albumId}`}
                  className="list-group-item"
                  key={album.id}
                >
                  <h4>{album.name}</h4>
                </Link>
              ))}
          </div>
        </>
      )}

      <pre>{JSON.stringify(albumsIlike, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
