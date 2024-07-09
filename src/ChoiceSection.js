import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class ChoiceSection extends React.Component {
  render() {
    return (
      <section className="choice">
        <h1 className="choice__title">Menu</h1>
        <section className="choice__menu">
          <a href="/benefits" className="choice__menu__item">
            Benefits
          </a>
          <a href="/profile" className="choice__menu__item">
            My Profile
          </a>
        </section>
      </section>
    );
  }
}

export default ChoiceSection;
