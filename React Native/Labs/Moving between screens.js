Moving between screens
Overview
In a previous exercise, you set up React Navigation in your app and used the Stack Navigator to establish routes between two screens.

However, the user currently cannot move from one screen to another. So, in this exercise, you will implement the ability to move between screens in the Little Lemon app.

Scenario
Previously, you wrote the code for setting up navigation routes in the Stack Navigator. To continue, you will expand this code to allow movement between the login screen and the welcome screen. To be more specific, your task is to implement a feature that takes the user to the welcome screen when they press the login button.

A back button will be automatically available on the welcome screen, and you need to validate it if it takes you back to the login screen as expected.

Starter Code
For the starter code for this exercise, use the code of the 
Solution: Set up Routes

Below you’ll find screenshots from the emulator which demonstrate the expected output after you complete this exercise.

The initial screen should be the Login screen, and then clicking on the login button should take you to the Welcome screen.

Login screen of the Little Lemon app as displayed in emulator. The navigation route name "Login" is visible in the header.
Welcome screen of the Little Lemon app in the emulator. The navigation route name "Welcome" is visible in the header
Instructions
Step 1: Configure the Login button to move from the Login screen to the Welcome screen
First, you will set the Login button to move the user from the Login screen to the Welcome screen. When the user presses the Login button they can move to the Welcome screen.

Step 2: Verify built-in back button works
You will notice that when you move to the Welcome screen from the Login screen, there will be a back button on the top left corner of the screen. You need to verify that clicking on it takes you back to the Login screen. This is an in-built feature and requires no additional code. If the back button does not appear or does not work correctly, review your code and revise it as needed.

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to move between screens using the Stack Navigator within your mobile app.

Solution: Moving between screens:

LoginScreen.js
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
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
      <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
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

