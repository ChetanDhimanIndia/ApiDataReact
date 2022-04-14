import React from "react";
import "../Login/Login.css";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      isAuth: false,
      respData: null,
    };
  }
  create(e) {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: e.target.email.value,
        password: "cityslicka",
      })
      .then((response) => {
        alert("User is Valid");
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <form
            action=""
            onSubmit={(e) => {
              this.create(e);
            }}
          >
            <div className="brand-logo"></div>
            <div className="brand-title">USER MANAGER</div>
            <div className="inputs">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                placeholder="example@test.com"
                name="email"
                id="email"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="Min 6 charaters long"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
        <br />
        <div></div>
      </div>
    );
  }
}
export default Login;
