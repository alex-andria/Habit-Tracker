import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Error } from "./styles";

function CreateHabit({ setShowCreateHabbitTab, user, showCreateHabbitTab}) {
  const [habitNameInput, setHabitNameInput] = useState('');
  const [goalDescriptionInput, setGoalDescriptionInput] = useState('');
  const [goalDaysInput, setGoalDaysInput] = useState('');
  const [habitColorInput, setHabitColorInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const habit = {
      habit_name: habitNameInput,
      goal_description: goalDescriptionInput,
      goal_days: goalDaysInput,
      user_id: user.id,
      color_code: habitColorInput,
    };

    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(habit),
    }).then((r) => {
        setShowCreateHabbitTab(false);
        if (r.ok) {
        } else {
          r.json().then((err) => setErrorMessage(err.errors));
        }
      });
    }

  function handleBackButton() {
    setShowCreateHabbitTab(!showCreateHabbitTab);
  }

  // function handleHabitNameInput

  return (
    <>
      <button onClick={handleBackButton}>Back</button>
      <h1> Create Your own Habbit </h1>

      {errorMessage}
      <form>
        <label name="Habit name input">Habit Name:</label>
        <input 
            value={habitNameInput} 
            onChange={(e) => setHabitNameInput(e.target.value)} 
            name="Habit name input">
        </input>

        <br></br>
        <br></br>

        <label name="goal description input">
          What would you like your habbit's description to be?
        </label>
        <input 
            value={goalDescriptionInput} 
            onChange={(e) => setGoalDescriptionInput(e.target.value)} 
            name="goal description input">
        </input>

        <br></br>
        <br></br>

        <label name="goal days input">
          {" "}
          What is your goal for the number of consistant days you would like to
          do this habbit?
        </label>
        <input 
            value={goalDaysInput} 
            onChange={(e) => setGoalDaysInput(e.target.value)} 
            name="goal days input">
        </input>

        <br></br>
        <br></br>

        <label name="color input">
          What would you like the color of your habit to be?
        </label>
        <input 
            type="color"
            value={habitColorInput} 
            onChange={(e) => setHabitColorInput(e.target.value)} 
            name="color input">
        </input>

        <br></br>
        <br></br>

        <input
          onClick={handleSubmit}
          type="submit"
          value="Create your new habit!"
        ></input>
      </form>
    </>
  );
}

export default CreateHabit;
