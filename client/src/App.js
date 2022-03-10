import "./App.css";
import LogInPage from "./LogInPage";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import {Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
    
  if (!user) return <LogInPage onLogin={setUser}/>;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<MainPage user={user} setUser={setUser}/> }/>
        </Routes>
      </main>
    </>
  );
}


export default App;
