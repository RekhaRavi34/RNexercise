# Task
You are using the code similar to the lesson item titled *The Navbar*. Your goal is to add another link to the existing code. This link should show a brand new component, named Contact.

## Instructions

### **Step 1**

Add a new file, `Contact.js`, to the root of the `src` folder.

### **Step 2**

Inside the `Contact.js` file, create a `Contact` component.

### **Step 3**

Inside the body of the `Contact` function, add a return statement with the following code: `<h1>Contact Little Lemon on this page.</h1>`.

### **Step 4**

Inside the App.js file, import the newly-built Contact component.

### **Step 5**

Inside the App.js file's App function's return statement, locate the `nav` element, and inside of it, add another `<Link>` element, with the `to` attribute pointing to `contact`, the `className` set to `"nav-item"`, and the the text inside the Link element's opening and closing tags set to `Contact`.

### **Step 6** 

Inside the `Routes` element, add a third route, with the `path` attribute pointing to `"/contact"`, and the `element` attribute set to `{<Contact />}`.

### **Step 7**

Save all your changes and view your updates in the served app. You should have three links in the top navbar, and the third link should be `Contact`. Once you click the link, the sentence "Contact Little Lemon on this page" should replace whatever other content was under the navbar previously.

## Tip

If you’re having trouble with this lab, please review the "The Navbar" video lesson item.  That video explains how to work with routes in React.


App.js

import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to= "/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

Contact.js

function Contact() {
    return (<h1>Contact Little Lemon on this page.</h1>);
}
export default Contact;

AboutLittleLemon.js

function AboutLittleLemon() {
    return (
        <h1>About AboutLittleLemon</h1>
    )
}

export default AboutLittleLemon


Home.js

function Homepage() {
    return (
        <h1>Welcome to the Little Lemon site</h1>
    )
}

export default Homepage

index.js

import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
