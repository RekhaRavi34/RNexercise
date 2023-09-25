import React from 'react';

// function SocialMediaPost(props){
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <h3>By: {props.author}</h3>
//       <p>{props.text}</p>
//     </div>
    
//   )
// }

const SocialMediaPost = props => {
   return (
    <div>
      <h2>{props.title}</h2>
      <h3>By: {props.author}</h3>
      <p>{props.text}</p>
    </div>
  )
}

const Link = props => <div><a href={props.url}>{props.url}</a></div>

function App(){
  return (
    <SocialMediaPost 
      title="Day 100 of Learning React"
      author="Allen Stone"
      text="I can't believe it's only been 100 days since I started learning React!" />
  )
}

export default App;

/*  Task 

1. Convert the App Component to a function expression 

 const App = function(){
  return (
    <SocialMediaPost 
      title="Day 100 of Learning React"
      author="Allen Stone"
      text="I can't believe it's only been 100 days since I started learning React!" />
  )
}

2. Convert the App Component to an arrow function 
 const App = () => {
  return (
    <SocialMediaPost 
      title="Day 100 of Learning React"
      author="Allen Stone"
      text="I can't believe it's only been 100 days since I started learning React!" />
  )
}
 */


