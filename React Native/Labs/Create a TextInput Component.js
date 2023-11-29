Exercise: Create a TextInput Component
Overview 
You should now be familiar with what the TextInput component is and how to use it. Recall that TextInput is a built-in component that enables users to input text to a React Native app using a keyboard.

In this exercise, you will create a sample text input box in the Little Lemon app that enters the user’s name.

Scenario 
For this exercise, your task is configuring a text input box on the Welcome screen, where the user can enter their name. The input box should contain placeholder text, and the text that is input should be stored in the local state.

Starter code
You can download the starter code from the zipped folder below:

You will add the text input box to the Welcome screen.

The images below demonstrate how your app should appear after you complete this exercise:

  The colors displayed in the images above can be applied using the following values:   

#EDEFEE, black and white.

Instructions  
Step 1: Configure TextInput component on the Welcome Screen.
Your first step in this exercise is to configure the TextInput component on the Welcome Screen. It will accept the user’s input.

Make sure to import the TextInput component from React Native and provide it with the value and onChangeText props.

Step 2: Store user input within TextInput as local state
In this step, you will store what the user types within the component’s local state.

Hint: You’ll need to make use of the useState hook to accomplish this.

Step 3: Style the component
In this step, you will style the new component that you created to match the screenshots. Make sure to provide meaningful names to all your styles.

Hint: Style the text input box by providing appropriate height, margin, padding, border width and font size. You can play around with different styles here to get the desired outcome, so be creative!

Conclusion  
By completing this exercise, you will demonstrate your understanding and ability to configure and utilize the TextInput component to accept user’s input within a text box.

Solution: Create a TextInput Component
Overview 
In this reading, you will review the solution code for the exercise.

The code block below outlines the outcome of the exercise in its entirety.

WelcomeScreen.js
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={'First Name'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});
