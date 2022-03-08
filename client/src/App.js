import "./App.css";
import LogInPage from "./LogInPage";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState();

  
  if (user === null) {
    return (
      <div>
        <LogInPage
          setUser={setUser}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
        />
      </div>
    );
  }
  if (user !== null) {
    return (
      <div>
        <NavBar user={user} setUser={setUser} />
        <MainPage user={user} setUser={setUser} />
      </div>
    );
  }
}

export default App;
