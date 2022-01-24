import react from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function app({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route
            exact
            path="/maker"
            element={<Maker authService={authService} FileInput={FileInput} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default app;
