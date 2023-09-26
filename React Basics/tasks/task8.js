import { useState } from 'react';

/* EXAMPLE ONE */

// function ToggleButton(){
//   const [buttonText, setButtonText] = useState('ON');
  
//   function handleClick(){
//     buttonText === "ON" ? setButtonText("OFF") : setButtonText("ON")
//   }
  
//   return (
//     <button onClick={handleClick}>{buttonText}</button>
//   )
// }

/* EXAMPLE TWO */

function Parrot() { 
 const [inputText, setInputText] = useState('');
 const [times,setTimes]=useState(0);
 function handleChange(event){
   setInputText(event.target.value);
 }
 
 function handleClick(){
    setInputText("");
 }
 function incre(){
   setTimes(times+1);
 }
 
 return ( 
    <> 
      <input value={inputText} onChange={handleChange}/> 
      <p>🦜 Parrot says: {inputText}</p>
      <button onClick={incre}>Reset {times}</button>
    </> 
  ); 
} 

export default function App(){
  return (
    //<ToggleButton/>
    <Parrot/>
  )
}

/*

Task: Write another hook inside the Parrot component to keep track of how many times the "Reset" button has been clicked. 

Hint: Set your initial state to 0 and use your setter function to increment your hook's state variable. 

 */
