import React from "react";


function LogOutButton({setUser}){

    function handleLogOut(){
        return setUser(null)

    }


    return(

        <button onClick={handleLogOut}>Log Out</button>
    )
}

export default LogOutButton;