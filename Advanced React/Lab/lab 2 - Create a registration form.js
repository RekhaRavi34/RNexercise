# Instructions

## Task

You've learned how to create controlled components and forms in React.
Now it's time to put that knowledge to use and create a registration form for Little Lemon Restaurant, where users are able to sign up.

The form layout and styling is already predefined for you. You have to add the missing pieces of code to make the form work as per the requirements.
The form is provided in an uncontrolled fashion and contains the following inputs:
- First Name
- Last Name
- Email
- Password
- Role

All the local state needed to complete this task has been already defined for you.

**Note:** Before you begin, make sure you understand how to work with the Coursera Code Lab for the [Advanced React course](https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course).

If you run `npm start` and view the app in the browser you'll notice that the starting React app works as is.
The app outputs a sign up form with 5 different fields and a submit button.

![Alt text](images/image1.png)

## Steps

### **Step 1**

Open the `App.js` file.
Convert all the elements from the form to controlled components by adding the value and onChange attributes to each input.
Make sure the password input is obscured.

### **Step 2**

Show an error message if the password is less than 8 characters long and the user has interacted with the input at least once.
The error message should be displayed below the password input as follows.

![Alt text](images/image2.png)

For that, a component called `PasswordErrorMessage` has been provided to you. Your goal is to implement the logic for when to show the error message.
The password state is a special one that has an additional property called `isTouched`. This property is used to determine if the user has interacted with the input or not.

### **Step 3**

Prevent the default behaviour of the form when the user clicks the submit button.

### **Step 4**

Implement the body of `getIsFormValid` function to return `true` if the form is valid and `false` otherwise. This determines the submit button state. The rules for the form to be valid are as follows:
- The first name cannot be empty.
- The email must be a valid email address and can't be empty. A function called `validateEmail` has been already provided for you to check if the email is valid. It returns `true` if the email is valid and `false` otherwise.
- The password must be at least 8 characters long
- The role must be either `individual` or `business`

### **Step 5**

Implement the body of `clearForm` function to clear the form state after a successful submission.

### **Tip**

React offers two focus events for form elements: `onBlur` and `onFocus`. You can check more information about them [here](https://reactjs.org/docs/events.html#focus-events).
                                                                                                                          
    App.js


import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {    
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    })
    setRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input 
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name" />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              type="password"
              value={password.value}
              onChange={(e) => {
                setPassword({...password, value: e.target.value})
              }}
              onBlur={(e) => {
                setPassword({...password, isTouched: true})
              }}
              placeholder="Password" />
              {password.isTouched && password.value.length < 8 ?
              <PasswordErrorMessage /> : null }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select 
              value={role} 
              onChange={(e) => {
                setRole(e.target.value)
              }}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

                                                                                                                          
