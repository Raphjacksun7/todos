import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./routes/ProtectedRoute";
import { history } from "./utils/history";

const loading = <div className="pt-3 text-center">Loading...</div>;

// Containers
const Wrapper = React.lazy(() => import("./components/Wrapper"));

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
            path="/"
            element={
              <React.Suspense fallback={loading}>
                <Wrapper />
              </React.Suspense>
            }
          />
          {/* <ProtectedRoute path="/" name="Home Page" element={MainContainer} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
