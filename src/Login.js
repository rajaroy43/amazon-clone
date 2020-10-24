import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = "Log in to Amazon...";
  }, []);
  const login = async(event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
      //redirect to homepage
    } catch (error) {
      alert(error.message)
    }
  };
  const register = async(event) => {
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email,password);
      history.push('/');
      //create a user and logged-in
    } catch (error) {
      alert(error.message)
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="" onSubmit={login}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>
      </div>
      <div className="login__newUser">
        <div className="divider">
          <hr /> <p className="newTo__amazon">New to Amazon ?</p>
          <hr />
        </div>
        <button onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
