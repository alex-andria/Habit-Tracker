import React, { useState } from "react";
import Habit from "./Habit.png";

function SignUpForm({onLogin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName]= useState('')
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
      
        e.preventDefault();
        setErrors([]);
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }


    return( 
    <div className="form-center">

      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={Habit} alt="Habitual Logo" className="avatar" />
        </div>

        <div className="container">
            <label name="Name Input">Name</label>
            <input
                type= "text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e => setName(e.target.value))}
            ></input>

            <label name="Email input">Email</label>
            <input
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label name="Password Input">Create Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            ></input>

            <label name="Password Input">Confirm Password</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
            ></input>

            <button type="submit"> Create Account </button>
        </div>

        <div className="container">
          <button  type="button" className="cancelbtn" >
            Back
          </button>
        </div>

        <h3>{errors}</h3>
      </form>
    
    </div>

    )
}

export default SignUpForm;