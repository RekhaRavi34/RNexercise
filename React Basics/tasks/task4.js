import React from 'react';

function DisplayRandomNumber(props) {
    const getRandomNumber = (highestNum) => Math.floor(Math.random() * highestNum) + 1;
    
    return (
        <div>
            <p>Here's a random number between 1 and 10:</p>
            <h1>{ getRandomNumber(props.range) }</h1>
        </div>
    );
};

const App = () => {
  return (
    <DisplayRandomNumber range={10000}/>
  )
}

export default App;

 /*  Task 

Create a component called AddingMachine that adds any two numbers. 
It should take any two numbers as props and display the sum of those numbers. 

const AddingMaching = (props) =>{
  const add = (a,b) => { return a+b; }
  return(
    <h1>{add(props.range[0],props.range[1])}</h1>
  );
}
const App = () => {
  return (
    <AddingMaching range={[10,10]}/>
  )
}
 */
