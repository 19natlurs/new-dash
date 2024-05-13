import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./shared/Layout";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

function App() {
  const authRdx = useSelector((state) => state.authRedux.isLoggedIn);
  return (
    <Router>
      <Routes>
        {authRdx && (
          <Route path="/profile" element={<Layout />}>
            <Route index element={<Dashboard path="/profile" />} />
            <Route path="/profile/products" element={<Product />} />
          </Route>
        )}
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
