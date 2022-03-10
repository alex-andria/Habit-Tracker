import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import Habit from "./Habit.png";
import {Error} from "./styles";

function LogInPage({ onLogin }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignUp, setShowSignup] = useState(false);

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
    console.log(emailInput);
  }

  function handlePasswordInputChange(e) {
    setPasswordInput(e.target.value);
    console.log(passwordInput);
  }

  function toggleSingUpButton() {
    setShowSignup(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailInput, passwordInput);
    const login = {
      email: emailInput,
      password: passwordInput,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }).then((data) => {
      if (data.ok) {
        data.json().then((user) => onLogin(user));
      } else {
        data.json().then((err) => setErrors(err.errors));
      }
    });
  }

  if (showSignUp === true) {
    return (
      <>
        <SignUpForm onLogin={onLogin} />
      </>
    );
  }

  return (
    <div className="form-center">
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={Habit} alt="Habitual Logo" className="avatar" />
        </div>

        <div className="container">
          <label name="Email input">Email</label>
          <input
            name="Email input"
            type="text"
            onChange={handleEmailInput}
          ></input>

          <label name="Password Input">Password</label>
          <input
            type="password"
            name="Password Input"
            onChange={handlePasswordInputChange}
          ></input>

          <button type="submit"> Login </button>
        </div>

        <div className="container">
          <button
            onClick={toggleSingUpButton}
            type="button"
            className="cancelbtn"
          >
            Create Account!
          </button>
        </div>

        <h3>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </h3>
      </form>
    </div>
  );
}

export default LogInPage;
