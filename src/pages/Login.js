import React, { Fragment } from "react";

class Login extends React.Component {
  // state example
  // constructor() {
  //   super();
  //   this.state = {
  //     isLike: false,
  //   };
  // }

  // ref example
  // emailRef = React.createRef();
  // passwordRef = React.createRef();

  // state
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const formData = {
    //   email: this.emailRef.current.value,
    //   password: this.passwordRef.current.value,
    // };
    // console.log(formData);

    // show form data
    console.log(this.state);
    // redirect
    this.props.history.push("/");
  };

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="login-wrapper">
          <form
            action=""
            className="box login-box"
            onSubmit={this.handleSubmit}
          >
            <p>Login</p>
            <div className="field">
              <label htmlFor="" className="label">
                Email
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  name="email"
                  // ref={this.emailRef}
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">
                Password
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="input"
                  name="password"
                  // ref={this.passwordRef}
                  value={this.state.password}
                  onChange={this.handleChange}
                />
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
