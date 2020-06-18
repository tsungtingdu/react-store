import React, { Fragment } from "react";
import "../css/app.scss";
import "../css/style.scss";

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="login-wrapper">
          <form action="" className="box login-box">
            <p>Login</p>
            <div className="field">
              <label htmlFor="" className="label">
                Email
              </label>
              <div>
                <input type="text" placeholder="Email" className="input" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Password
              </label>
              <div>
                <input type="text" placeholder="Password" className="input" />
              </div>
            </div>
            <div className="control">
              <button className="button is-fullwidth is-primary">Login</button>
            </div>
          </form>
        </div>
      </Fragment>
    ); //JSX, babel
  }
}

export default Login;
