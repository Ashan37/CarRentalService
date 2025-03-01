import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
import CarDetails from "../Pages/CarDetails";
import CarListing from "../Pages/CarListing";

const Routerr = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cars" element={<CarListing />} />
      <Route path="cars/:slug" element={<CarDetails />} />
      <Route path="blogs" element={<Blog />} />
      <Route path="blogs/:slug" element={<BlogDetails />} />
    </Routes>
  );
};

export default Routerr;
