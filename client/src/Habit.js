import React from "react";
import DailyProgressBar from "./DailyProgressBar";

function Habit({habit}){
    console.log(habit)

    return(

        <> 
        <h2>{habit.habit_name}</h2>
        <div>
            <br/>
            <h3>Description:</h3>
            <p>{habit.goal_description}</p>
            <br/>
            <h3>Number of days for goal:</h3>
            <p>{habit.goal_days}</p>
        </div>
        <DailyProgressBar />
        


        </>
    )
}
export default Habit;