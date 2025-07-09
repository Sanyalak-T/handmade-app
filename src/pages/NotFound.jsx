import React from "react";
import { Link } from "react-router";
import "../index.css";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
