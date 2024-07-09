import React from "react";
import ChoiceSection from "./ChoiceSection";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Benefits from "./Benefits";
import Auth from "./Auth";
class App extends React.Component {
  render() {
    return (
      <>
        <ChoiceSection />
        <Header />
        <main>
          <Router>
            <Routes start="/">
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Auth />} />
            </Routes>
          </Router>
        </main>
      </>
    );
  }
}

export default App;
