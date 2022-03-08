import React, { useState } from "react";
import Habit from "./Habit.png";

function LogInPage({ setUser, setErrorMessage, errorMessage }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
    console.log(emailInput);
  }

  function handlePasswordInputChange(e) {
    setPasswordInput(e.target.value);
    console.log(passwordInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

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
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        }
        if (!data.error) {
          setErrorMessage(null);
          setUser(data);
        }
      });
  }

  return (
    <div className="form-center">
      <form>
        <div className="imgcontainer">
          <img src={Habit} alt="Habitual Logo" className="avatar" />
        </div>

        <div className="container">
            <label name="Email input">Email</label>
            <input name="Email input" type="text" onChange={handleEmailInput}></input>

            <label name="Password Input">Password</label>
            <input
                type="password"
                name="Password Input"
                onChange={handlePasswordInputChange}
            ></input>

            <button onClick={handleSubmit}> Login </button>
        </div>

        <div className="container">
            <button type="button" class="cancelbtn">Create Account!</button>
        </div>

        <h3>{errorMessage}</h3>
      </form>
    </div>
  );
}

export default LogInPage;
