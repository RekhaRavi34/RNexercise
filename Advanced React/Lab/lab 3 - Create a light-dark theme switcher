# Instructions

## Task

You've learned about React Context and how it allows you to define global state without passing individual props down through each component.
One of the most common use cases for Context is to define a theme for your application. In this exercise, you'll create a light/dark theme switcher.

The starter code includes all the necessary UI elements, as well as switch component to toggle the theme. Your goal is to implement the missing functionality inside `ThemeContext.js`.
`ThemeContext` already exports a `ThemeProvider` component and a `useTheme` hook.
At the moment, they don't do anything and return dummy values. 

![Alt text](images/image1.png)

You'll need to implement both `ThemeProvider` component and `useTheme` hook inside `ThemeContext.js` file to complete this exercise.

`ThemeProvider` should render a context provider component and inject as the context value an object with 2 properties: a `theme` property that is a string that can be either `light` or `dark` and a function named `toggleTheme` that allows to toggle the theme. 
`useTheme` hook should return that context object.

**Note:** Before you begin, make sure you understand how to work with the Coursera Code Lab for the [Advanced React course](https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course).

If you run `npm start` and view the app in the browser, you'll notice that the starting React app works as is.
The app outputs a simple view with a header, page and a switch widget in the top right corner to change the theme.

## Steps

### **Step 1**

Open the `ThemeContext.js` file.

Create a `ThemeContext` object using `React.createContext()`

Implement the `ThemeProvider` component. It should accept a `children` prop and return a `ThemeContext.Provider` component.
The `ThemeContext.Provider` receives an object as its `value` prop, with a `theme` string and a `toggleTheme` function.

`toggleTheme` should toggle the theme between `light` and `dark`.

### **Step 2**

Implement the `useTheme` hook. It should return the `theme` and `toggleTheme` values from the `ThemeContext`.

### **Step 3**

Open the `Switch/index.js` file. Add an `onChange` prop to the input element and pass as the event handler a callback function to change the theme.
You don’t need to use the event argument in this case.

### **Step 4**

Verify that the app works as expected. You should be able to toggle the theme between light and dark.
Notice how the background color of the page changes, as well as the color of the text.

![Alt text](images/image2.png)

App.js

import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;


Switch/index.js

import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;


ThemeContext.js

import { createContext, useState,useContext } from "react";

const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme=="dark"?"light":"dark");
    }
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);


Switch/Styles.css
.switch {
    position: absolute;
    display: inline-block;
    right: 32px;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
