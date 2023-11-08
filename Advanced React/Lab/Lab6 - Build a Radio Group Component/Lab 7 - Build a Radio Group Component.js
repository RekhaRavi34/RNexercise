# Instructions

## Task

You've learned about some advanced React APIs, `React.cloneElement` and `React.Children.map` that allow you to modify the children of a component dynamically.
In this exercise, you'll use these APIs to build a `RadioGroup` component.

On HTML, an input of type `radio` offers a `checked` property to determine whether a radio button is selected or not.

When building a radio group in React, in other words, a component that represents a set of choices where only one can be selected at a time, an initial implementation might look like this:

```jsx
  <RadioOption checked={false} onChange={handleOnChange} value="1" />
  <RadioOption checked={true} onChange={handleOnChange} value="2" />
  <RadioOption checked={false} onChange={handleOnChange} value="3" />
```

However, this approach is not ideal because it requires the user of the component to keep track of the state of each radio button,
as well as setting state change handlers for each option.

Wouldn't it be great to remove any redundancies and reduce the state to the bare minimum while still keeping the functionality intact? 
Well, this is a great example where component composition shines and enables developers to use a more intuitive and simpler set of props to define a component's API.

Instead of having the user of the component to keep track of the state of each radio button,
you can have a parent RadioGroup component that is aware of the current selection and provides a handler to manage any selection change,
without you having to explicitly pass the `checked` and `onChange` props to each `RadioOption` component.

The RadioGroup component can then leverage the `children` prop and use both `React.cloneElement` and `React.Children.map` to internally pass the `checked` and `onChange` props to each `RadioOption` child.

```jsx
<RadioGroup selected={selectedValue} onChange={handleOnChange}>
  <RadioOption value="1" />
  <RadioOption value="2" />
  <RadioOption value="3" />
</RadioGroup>
```

In this exercise, you are going to implement this exact component API.

**Note:** Before you begin, make sure you understand how to work with the Coursera Code Lab for the [Advanced React course](https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course).

If you run **npm start** and view the app in the browser you'll notice that the starting React app works as is.
The app outputs a simple view with a header and a submit button, but no radio options yet.

![Alt text](images/image1.png)

## Steps

### **Step 1**

Open the `App.js` file. In there you will already see the desired API for the `RadioGroup` and `RadioOption` components.
At the moment, they don't render anything on the screen. You don't have to change anything in this file, but just understand the set of props involved in the component design.

### **Step 2**

Open the `Radio/index.js` file. Implement the remaining bits for the `RadioGroup` component. The RadioOptions variable is initially set to `null`.
Instead, use `React.Children.map` to iterate over the `children` and clone each child using `React.cloneElement`. The result should be assigned to the `RadioOptions` variable.

Each cloned child should receive two additional props, `checked` and `onChange`.

### **Step 3**

Open the `Radio/index.js` file. The `RadioOption` component is incomplete. In particular, it's missing some props in the input element that it renders: `value`, `checked` and `onChange`.

The `RadioOption` component already receives all those props. Your goal is to connect them to the input element.

When adding the `onChange` prop to the radio input, which represents the event that gets triggered whenever you interact with it, you can access the `value` property of the event target to get the value of the newly selected radio option, as per the code below.

```jsx
const handleChange = (e) => {
  const newValueSelected = e.target.value
}
```

### **Step 4**

Verify that the app works as expected. You should be able to select a radio option and see how the submit button gets enabled as soon as a selection is made.

### **Tips**
The `RadioGroup` component receives the `selected` prop, a string that represents the value of the currently selected radio option.
However, an individual `RadioOption` component only cares about whether it is selected or not, via the boolean`checked` prop.
You would have to perform some small business logic inside the `RadioGroup` component to translate the `selected` prop to the `checked` prop that each `RadioOption` child receives.


O/P:

App.js
import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;

Radio/index.js :

import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 

Step 1

The API for the RadioGroup component is defined as two props: selected, which is a string that matches one of the RadioOption values and onChange, which is the event that gets called whenever a selection changes, providing the new value as an argument.

Step 2:

The RadioOptions variable should be assigned to the return value of React.Children.map, which will be a new React element. The first argument passed to the map function should be the children prop, and the second is a function that gets invoked in every child contained within the children property. Recall that a children prop is a special prop all React components have and that it presents a special data structure, similar to arrays, where you can perform iterations. However, they are not exactly instances of JavaScript arrays. That’s why to iterate over all siblings you should use the special React.children.map API provided by React.

Inside the map projection function, you should first clone the element using React.cloneElement, passing as first argument the target child element and as a second argument a configuration with all new props. The resulting element will have the original element’s props with the new props merged in.

onChange can be passed to each child (RadioOption) as it is and checked is the property the RadioOption uses to determine if the underlying radio input is selected. Since RadioGroup receives a selected property, which is a string pointing to the value of the option that has been selected, checked will be only true for one of the options at any point in time. This is guaranteed by performing an equality check, comparing the RadioOption value prop with the selected value.

Finally, the RadioGroup component returns the new RadioOptions elements by wrapping them in curly braces.


Step 3:

The RadioOption component now receives two new props implicitly, onChange and checked, that RadioGroup is injecting via children manipulation, as seen in the previous section.

The value prop is already provided explicitly inside the App.js component and children represents the label text for the radio input. 

You have to connect the props value, checked and onChange correctly. First, both value and checked props should be passed to the radio input as is. Then, you should use the onChange event from the radio input, retrieve the value property from the event target object and pass it to the onChange prop as the argument as seen below. That completes the implementation of the RadioOption component.

Step 4:
Once you run the application in the browser, you should see something similar to the screenshot below.

The important thing is that the button should be enabled as soon as a selection is made. Don't worry if nothing happens when you click it, it's intended. In this exercise, the button click event has no action bound to it.
