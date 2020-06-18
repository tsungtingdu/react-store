import React, { Fragment } from "react";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="grid">
            <div className="start">
              <a href="/">Home</a>
            </div>
            <div className="end">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
