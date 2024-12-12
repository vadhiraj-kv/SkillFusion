import React from "react";
import ReactDOM from "react-dom/client";
import Signin from "./pages/signIn/Signin";
import './signin.scss'; // Add your styles for the Signin page

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Signin />
  </React.StrictMode>
);
