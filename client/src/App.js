import logo from './logo.svg';
import './App.css';
import LogInPage from './LogInPage';
import MainPage from './MainPage';
import React, {useState} from 'react';



function App() {
  const [user, setUser]= useState(null)
  const [errorMessage, setErrorMessage]= useState()
  if(user===null){
    return(
      <LogInPage setUser={setUser} setErrorMessage={setErrorMessage} errorMessage={errorMessage}/>
    )
  }
  if(user!==null){
    return(
    <> 
  <MainPage user={user} setUser={setUser}/>
    </>
    )
  }
}

export default App;
