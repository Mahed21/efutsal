import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import UseAuth from "../Context/UseAuth";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();
  const { googleSignIn, user, emailPassLogIn } = UseAuth();
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  if (user.email) {
    navigate("/");
  }
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passHandle = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    emailPassLogIn(email, password, navigate);
  };

  return (
    <div className=" ">
      <div className="d-flex justify-content-center login-parent p-5 align-items-center">
        <div className="login p-5">
          <div className="d-flex justify-content-around mb-3">
            <h4 className="signup ps-4 pe-4 pt-3 pb-3 text-center">Sign in</h4>
          </div>

          <input
            placeholder="Email"
            type="email"
            className="mt-4 p-1 w-100"
            onBlur={emailHandle}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            className="mt-4 p-1 w-100"
            onBlur={passHandle}
          />

          <br />
          <br />
          <div>
            <button className="login-btn pt-2 pb-2 mb-3" onClick={handleLogin}>
              Sign In Button
            </button>
          </div>
          <div className="">
            <button className="google-btn pt-2 pb-2" onClick={googleSignIn}>
              Login with Google
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <Nav.Link href="/register" className="mt-1 login-link">
              Not Registerd?
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
