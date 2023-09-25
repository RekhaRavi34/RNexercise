import React from 'react';

// let username = 'Gabby';

// username === "Gabby" ? console.log("Hello, Gabby!") : console.log("Hello, Friend!");

const DisplayUserName = (props) => {
  return (
    <h2>{props.user ? `Hello, ${props.user}!` :"Hello, Friend!"}</h2>
  )
}

const DisplayLogin = (props) =>{
  return(
    <h2>{props.status ? "You are currently logged in" : "Please login in to view this page!" }</h2>
  )
}

const App = () => {
  return (
    <DisplayLogin status="true"/>
  )
}

export default App;


/*  Task

1. Create a component called DisplayLogin. DisplayLogin should accept a prop called `status`.
2. Using the ternary operator:
  If `status` is true, the DisplayLogin component should display: "You are currently logged in."
  If `status` is false, the component should display: "Please login in to view this page!"

 */
