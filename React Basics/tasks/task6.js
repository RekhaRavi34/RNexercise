import React from 'react';

function SocialMediaPost(props){
  return (
    <div>
      <p>Article ID: {props.articleID}</p>
      <p>{props.read ? "✅ Read" : "❌ Not Read"}</p>
      <p>You've read this article <b>{props.timesRead}</b> time(s)</p>
      <p>Article origin: {props.origin}</p>
      <h2>{props.title}</h2>
      <h3>By: {props.author}</h3>
      <p>{props.text}</p>
    </div>
    
  )
}

function createArticleId(){
  return Math.floor(Math.random() * 100000)
}

function App(){ 
  const articleOrigin = "The Daily Code";
  return (
    <SocialMediaPost 
      title="Day 100 of Learning React"
      author="Allen Stone"
      text="I can't believe it's only been 100 days since I started learning React!"
      read={false}
      timesRead={10 * 4 / 2 * 9 - 10}
      origin={`This article was originally published in ${articleOrigin}`}
      articleID={createArticleId()}
      />
  )
}

export default App;

/*  Task 

Allen wants a variable to keep track of how many days he's been studying
React. Create a variable inside the App component that holds the number of days 
he's been learning to code. 

Modify the `title` and `text` props to use the variable instead of the hardcoded number.
 */

function App(){ 
  const articleOrigin = "The Daily Code";
  const days = 1000;
  return (
    <SocialMediaPost 
      title={`Day ${days} of Learning React`}
      author="Allen Stone"
      text="I can't believe it's only been 100 days since I started learning React!"
      read={false}
      timesRead={10 * 4 / 2 * 9 - 10}
      origin={`This article was originally published in ${articleOrigin}`}
      articleID={createArticleId()}
      />
  )
}

