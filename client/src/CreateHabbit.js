import React, {useState} from "react";


function CreateHabit({setShowCreateHabbitTab, user, showCreateHabbitTab}){
    const [habitNameInput, setHabitNameInput]= useState(null)
    const [goalDescriptionInput, setGoalDescriptionInput]= useState(null)
    const [goalDaysInput, setGoalDaysInput]= useState(null)
    const [habitColorInput, setHabitColorInput]= useState(null)




    function handleColorChange(e){
        console.log(e.target.value)
        setHabitColorInput(e.target.value)
    }

    function handleHabitNameInput(e){
        setHabitNameInput(e.target.value)
    }

    function handleGoalDescriptionInput(e){
        setGoalDescriptionInput(e.target.value)
    }

    function handleGoalDaysInput(e){
        setGoalDaysInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        const habit={
            habit_name : habitNameInput,
            goal_description : goalDescriptionInput,
            goal_days : goalDaysInput,
            user_id : user.id
        }

        fetch('http://localhost:3000/habits',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(habit)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            return setShowCreateHabbitTab(false)

        })

    }
    
    function handleBackButton(){
        setShowCreateHabbitTab(!showCreateHabbitTab)
    }

    // function handleHabitNameInput

    return(
       
        <> 
        <button onClick={handleBackButton}>Back</button>
        <h1> Create Your own Habbit </h1>
        <form>
            <label name="Habit name input">Habit Name:</label>
            <input onChange={handleHabitNameInput} name="Habit name input"></input>

            <br></br>
            <br></br>

            <label name= "goal description input">What would you like your habbit's description to be?</label>
            <input onChange={handleGoalDescriptionInput} name= "goal description input"></input>

            <br></br>
            <br></br>

            <label name= "goal days input"> What is your goal for the number of consistant days you would like to do this habbit?</label>
            <input onChange={handleGoalDaysInput} name= "goal days input"></input>
            
            <br></br>
            <br></br>

            <label name="color input">What would you like the color of your habit to be?</label>
            <input onChange={handleColorChange} type='color'></input>

            <br></br>
            <br></br>

            <input onClick={handleSubmit} type='submit' value='Create your new habit!'></input>



        </form>
        </>

    )
}

export default CreateHabit