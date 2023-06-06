import Labs from "./labs";
import logo from "./logo.svg";
import Tuiter from "./tuiter";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Assignment3 from "./labs/a3";
import Assignment4 from "./labs/a4";
import Navigation from "./nav";
import Routing from "./labs/a3/routing";
import Todos from "./todos";
import TodosRedux from "./todos-redux";
import Users from "./users";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/users/*" element={<Users />} />
          <Route path="/todos-redux/*" element={<TodosRedux />} />
          <Route path="/todos/*" element={<Todos />} />
          <Route path="/" element={<Navigate to="/labs/a3" />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/a3" element={<Assignment3 />} />
          <Route path="/labs/a4" element={<Assignment4 />} />
          <Route path="/labs/a3/routing/*" element={<Routing />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
