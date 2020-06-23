import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import axios from "commons/axios";
import { toast } from "react-toastify";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const res = await axios.post("/auth/login", { email, password });
      const { jwtoken } = res.data;
      global.auth.setToken(jwtoken);
      // redirect
      props.history.push("/");
      toast.success("Login successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <Fragment>
      <div className="login-wrapper">
        <form
          action=""
          className="box login-box"
          onSubmit={handleSubmit(onSubmit)}
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
                className={`input ${errors.email && "is-danger"}`}
                name="email"
                // ref={this.emailRef}
                // value={this.state.email}
                // onChange={this.handleChange}
                ref={register({
                  required: "Email required",
                  pattern: {
                    value: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
                    message: "invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="helper has-text-danger">{errors.email.message}</p>
              )}
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
                className={`input ${errors.password && "is-danger"}`}
                name="password"
                // ref={this.passwordRef}
                // value={this.state.password}
                // onChange={this.handleChange}
                ref={register({
                  required: "Password required",
                  minLength: {
                    value: 6,
                    message: "min length is 6",
                  },
                })}
              />
              {errors.password && (
                <p className="helper has-text-danger">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

// user React Hook form
// class Login extends React.Component {
//   state example
//   constructor() {
//     super();
//     this.state = {
//       isLike: false,
//     };
//   }

//   ref example
//   emailRef = React.createRef();
//   passwordRef = React.createRef();

//   state
//   state = {
//     email: "",
//     password: "",
//   };
//   handleChange = (e) => {
//     console.log(e.target);
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
// }
