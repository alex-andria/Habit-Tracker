import React from "react";
import LogOutButton from "./LogOutButton";
import Habit from "./Habit";

function MainPage({user, setUser }){
    console.log(user)

    return(

        <> 
        <LogOutButton setUser={setUser}/>

        <br/>

        
        <h2>Welcome {user.name}!</h2>
        <h2>Here are your habbits</h2>

        <br></br>

        {user.habits.map((h)=>{
            return(
                <Habit habit={h}/>
            )
        })}

        


        
        </>

    )

}
export default MainPage;