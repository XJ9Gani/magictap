import React from "react";
import Auth from "./Auth";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Mode extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </Router>
    );
  }
}

export default Mode;
