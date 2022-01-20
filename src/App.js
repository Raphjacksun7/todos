import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { history } from "./utils/history";
import "./assets/css/index.css";
import Register from "./components/Register";

const loading = <div className="pt-3 text-center">Loading...</div>;

// Containers
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

// Pages
const Login = React.lazy(() => import("./components/Login"));

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Routes>
          <Route
            path="/login"
            element={
              <React.Suspense fallback={loading}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback={loading}>
                <Register />
              </React.Suspense>
            }
          />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              exact
              path="/"
              element={
                <React.Suspense fallback={loading}>
                  <MainLayout />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
