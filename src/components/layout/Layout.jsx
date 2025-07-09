import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  Outlet,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
