# Instructions

## Task

You've learned about jest and react-testing-library to create automated tests for your components. Now it's time to write some of your own tests! 
Remember the Feedback form Little Lemon put together to gather feedback about their recipes? 
In a previous lesson, you were introduced to a test scenario where the app verified that users who provided less than a score of 5 could only submit their form if feedback was also provided.

In this exercise, you'll create two more test scenarios to verify the form submission works as expected:
1. User is able to submit the form if the score is lower than 5 and additional feedback is provided
2. User is able to submit the form if the score is higher than 5, without additional feedback

**Note:** Before you begin, make sure you understand how to work with the Coursera Code Lab for the [Advanced React course](https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course).

## Steps

### **Step 1**
Open the `App.test.js` file.
There you'll encounter two new test scenarios that should be completed.

### **Step 2**
After writing the test scenarios, run the tests to verify they pass.
For that, execute the command `npm test` in the terminal.

### **Tip**
Explore the `FeedbackForm` component to understand the JSX it returns and how you can access the elements in the tests.
For more information about react-testing-library queries, check out the [documentation](https://testing-library.com/docs/queries/about)


                                                                                        
App.js
import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted successfully")
  }

  return (
    <div className="App">
      <FeedbackForm onSubmit={ handleSubmit }/>
    </div>
  );
}

export default App;

App.test.js:

  import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={ handleSubmit }/>);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } })

    const commentInput = screen.getByLabelText(/Comments:/);
    fireEvent.change(commentInput, {target: {value: comment} })

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={ handleSubmit }/>);
    
    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } })

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});


FeedbackForm.js
import "./App.css";
import { useState } from "react";

function FeedbackForm({onSubmit}) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";
  const handleSub = () => {
    console.log("Form submitted");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label htmlFor="score">Score: {score} ⭐</label>
            <input
              id="score"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
              type="range"
              min="0"
              max="10"
            />
          </div>
          <div className="Field">
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FeedbackForm;


                                                                                        
