import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import Home from "./Pages/Admin/Menu/Home";
import Users from "./Pages/Admin/Menu/Users";
import AuthForm from "./Pages/Admin/Menu/AuthForm";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/authform" element={<AuthForm />} />
          </>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
