import React, { useEffect, useState } from "react";
import Labs from "./labs";
import logo from "./logo.svg";
import Tuiter from "./tuiter";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Assignment3 from "./labs/a3";
import Assignment4 from "./labs/a4";
import Navigation from "./nav";
import Routing from "./labs/a3/routing";
import Todos from "./todos";
import TodosRedux from "./todos-redux";
import Users from "./users";
import UserListRedux from "./users/users-list-redux";
// import "./App.css";
import { Provider } from "react-redux";
import { store } from "./tuiter/store";
import LoginScreen, { qwe, asd } from "./users/login";
import RegisterScreen from "./users/register";
import ProfileScreen from "./users/profile";
import UsersContextLoader from "./users/users-context-loader";
import ProtectedRoute from "./users/protected-route";
import Project from "./project";

function App({ wer, ert, rt }) {
  return (
    <Provider store={store}>
      <UsersContextLoader>
        <HashRouter>
          <div className="container-fluid">
            {/* <Navigation /> */}
            <Routes>
              <Route path="/project/*" element={<Project />} />
              <Route
                path="/users/*"
                element={
                  <div className="row">
                    <div className="col-12">
                      <Users />
                    </div>
                    <div className="col-6">{/* <UserListRedux /> */}</div>
                  </div>
                }
              />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/todos-redux/*" element={<TodosRedux />} />
              <Route path="/todos/*" element={<Todos />} />
              <Route path="/" element={<Navigate to="/project" />} />
              <Route
                path="/tuiter/*"
                element={
                  <ProtectedRoute>
                    <Tuiter />
                  </ProtectedRoute>
                }
              />
              <Route path="/labs" element={<Labs />} />
              <Route path="/labs/a3" element={<Assignment3 />} />
              <Route path="/labs/a4" element={<Assignment4 />} />
              <Route path="/labs/a3/routing/*" element={<Routing />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </div>
        </HashRouter>
      </UsersContextLoader>
    </Provider>
  );
}

export default App;
