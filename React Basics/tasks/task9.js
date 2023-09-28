// function MotivationalMessage(props){
//   return props.day < 6 ? "Get It Done!" : "Get Some Rest!"
// }

function MotivationalMessage(props){
 
  let message= props.username;
  
  return (
    <div>
      {message}
    </div>
  )
}

function App() { 
  let enabled = "";
  let username = "Rekha"
  return ( 
    <div>
      {username && 
        <MotivationalMessage username={username} />}
    </div>
  ); 
}; 

export default App;

/* Task

Add a variable to the App component called username. Use the logical AND
operator to display the message `It's going to be a great day, ${username}!`
if a username is provided. 

 */
