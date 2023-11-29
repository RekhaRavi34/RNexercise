Exercise: Create a clickable text area with Pressable
Overview
Previously, you learned about the Pressable component and how it is used to detect and respond to press interactions from the user.

In this exercise, you will implement the Pressable component to create a clickable text area within the Little Lemon app.

Scenario
Recall the Login screen that you built in a previous exercise. It should consist of two text input boxes: one for entering an email address and another for entering a password.

This time, you have been asked to build a Login button for the Login screen. You will use the Pressable component to create a simple login button for the login screen.

When the user clicks on the Login button, the message that the user has logged in successfully will be displayed on the screen.

Below is the zipped folder for  the starter code you should use for this exercise: 

The screenshots below demonstrate how the Login screen should appear before the user has clicked on the Login button and what happens after it is clicked.

  Colors that you will use:

#EE9972, #EDEFEE, black and white.

Instructions
Step 1: Configure Pressable Component within Login Screen
Start off by configuring the Pressable component within the login screen. It should display the text Login, and it should be pressable. 

Step 2: Track logged-in status using local state and update UI if logged in
After configuring the Pressable, you will store the status of whether the user is logged in or not as a local state. 

Hint: When the Pressable component is pressed, then toggle the user’s login state.

Step 3: Style the component
Before you finish, style the Login button that you have created to match the screenshots above. Make sure to provide meaningful names for all your styles.

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to configure and utilize the Pressable component to create pressable areas within the app.

Solution: Create a clickable text area with Pressable
Overview
In this reading, you will review the solution code for the exercise.

The code block below outlines the outcome of the exercise in its entirety.

LoginScreen.js
 import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, onLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}

      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </>
      )}
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
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});

LoginScreen.js:

import { ScrollView, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import * as React from "react"
export default function LoginScreen() {
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [isSubmit,setIsSubmit]=React.useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {isSubmit ? (<Text style={styles.headerText}>You are logged in!</Text>):(
      <>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput 
                onChangeText={setEmail}
                placeholder="email"
                value={email}
                keyboardType="email-address"
                style={styles.input}
                />
      <TextInput 
                onChangeText={setPassword}
                placeholder="password"
                value={password}
                secureTextEntry={true}
                style={styles.input}
                keyboardType={'default'}
                />
      <Pressable
                style={styles.button}
                onPress={()=>{setIsSubmit(!isSubmit)}}>
          <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
      </>)}
      
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
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: 'white',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 80,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 35
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
});

Both are correct and produces same outcome
