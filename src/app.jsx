import React from "react";
import "./app.css";
import Login from "./components/login/login";

function app(authService) {
  return <Login authService={authService} />;
}

export default app;
