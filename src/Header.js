import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title">MagicTap</h1>
        <a href="/" className="auth-link">
          Logout
        </a>
      </header>
    );
  }
}

export default Header;
