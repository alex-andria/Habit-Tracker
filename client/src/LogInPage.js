import React, {useState} from 'react'

      function LogInPage({setUser, setErrorMessage, errorMessage}){

    const [emailInput, setEmailInput]= useState("")
    const [passwordInput, setPasswordInput]= useState("")
    function handleEmailInput(e){
        
        setEmailInput(e.target.value)
        console.log(emailInput)
    }
    function handlePasswordInputChange(e){
        
        setPasswordInput(e.target.value)
        console.log(passwordInput)
    }
    function handleSubmit(e){
        console.log(emailInput, passwordInput)
        const login = { 
            email: emailInput, 
            password: passwordInput
    }
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.error){
                setErrorMessage(data.error)

            }
            if(!data.error){
                setErrorMessage(null)
                setUser(data)
            }     
        })
    }



    return(
        <> 
        <form>
            <label name="Email input">Email:</label>
            <input name="Email input" onChange={handleEmailInput}></input>

            <br/>

            <label name="Password Input">Password</label>
            <input name="Password Input" onChange={handlePasswordInputChange}></input>

            <br/>

            <input onClick={handleSubmit} type='submit' value='Log In'></input>

            <h3>{errorMessage}</h3>

        </form>
        
        </>
    )


}

export default LogInPage;
 