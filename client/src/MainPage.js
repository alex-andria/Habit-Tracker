import React, { useState, useEffect } from "react";
import LogOutButton from "./LogOutButton";
import Habit from "./Habit";
import CreateHabit from "./CreateHabbit";

function MainPage({ user, setUser }) {

  const [habits, setHabits] = useState([]);
  const [showCreateHabbitTab, setShowCreateHabbitTab] = useState(false);

  console.log(habits);

  function handleCreateNewHabbitTab() {
    setShowCreateHabbitTab(!showCreateHabbitTab);
  }

  if (showCreateHabbitTab === true) {
    return (
      <CreateHabit
        user={user}
        setShowCreateHabbitTab={setShowCreateHabbitTab}
        showCreateHabbitTab={showCreateHabbitTab}
      />
    );
  }

  return (
    <>
      <LogOutButton setUser={setUser} />
      <button onClick={handleCreateNewHabbitTab}>Create A New Habbit</button>

      <br />

      <h2>Welcome {user.name}!</h2>
      <h2>Here are your habbits</h2>

      <br></br>
      <br></br>


      {/*has to be users.habits  */}
      {habits.map((h) => {
        return <Habit habit={h} key={h.id} />;
      })}
    </>
  );
}
export default MainPage;
