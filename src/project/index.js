import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SearchScreen from "./search";
import DetailsScreen from "./details";
import Navigation from "./navigation";
import { KEY } from "./napster-service";
import LoginScreen from "../users/login";
import RegisterScreen from "../users/register";
import ProfileScreen from "../users/profile";
import ProfilePublic from "./profile-public";

function Project() {
  return (
    <div className="mt-2">
      <div className="row">
        <div className="col-3">
          <Navigation />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="search" element={<SearchScreen />} />
            <Route path="search/:searchTerm" element={<SearchScreen />} />
            <Route path="details/:id" element={<DetailsScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="profile/:profileId" element={<ProfilePublic />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
