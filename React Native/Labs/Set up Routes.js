Exercise: Set up Routes
Overview
In earlier videos, you were introduced to React Navigation and how to set up a simple stack navigator and its routes. In this exercise, you will set up the routes for a stack navigator within the Little Lemon app.

Scenario
Recall that we have created two screens within our Little Lemon app in previous exercises. You have the Welcome screen and a Login screen. At this stage, there is no way to navigate between these pages. In this exercise, you have been asked to set up React Navigation and basic routes using a Stack Navigator. Here you will include routes for both the Login and Welcome screens within the stack and provide a default route.

Please note that you will not be able to move between the screens at the end of this exercise. This will be covered in the next one. The aim of this exercise is to do the initial setup work to get started with navigation.

Starter Code:
You’ll find the starter code for this exercise in the zipped folder below:

You will be setting up the routes within the  App.js  file.

Below you'll find screenshots of the Login screen and the Welcome screen for your reference.

Login Screen
Login screen of the Little Lemon app as displayed in emulator.
Welcome Screen
The Welcome screen of the Little Lemon app as displayed in the emulator.
Once you complete this exercise you will see the following screen. Note that you cannot move between the screens yet.


Login screen of the Little Lemon app as displayed in emulator.
Procedure
Step 1: Install React Navigation and other dependencies
Your first step is to install React Navigation within your Expo project and the dependencies. You will be using the native stack navigator so ensure to install that as well. Refer to the instructions linked below for detailed installation steps.

React Navigation:
Getting started | React Navigation

Native stack navigation:
Hello React Navigation |
 React Navigation

Step 2: Instantiate native stack navigator
In this step, once the dependencies are all installed, you will add the necessary imports and instantiate the native stack navigator. You should also use the initialRouteName prop of the navigator to establish which screen the user starts on.

Hint: You’ll need to import both screens of the app to make them accessible for the navigator.

Step 3: Setup routes within the stack
In this step, you will set up routes within the stack. The two routes you will have are the Login screen and the Welcome screen.

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to configure and set up a stack navigator with basic routes using React Navigation within your mobile app.

  import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

