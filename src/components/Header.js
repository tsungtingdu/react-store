import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  renderLink() {
    const nickname = this.props.user.nickname;
    if (nickname) {
      return (
        <span className="nickname">
          <i className="far fa-user"></i>
          {nickname}
        </span>
      );
    } else {
      return (
        <Fragment>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="grid">
            <div className="start">
              <Link to="/">Home</Link>
            </div>
            <div className="end">{this.renderLink()}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
