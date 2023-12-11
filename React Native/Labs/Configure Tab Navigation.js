Configure Tab Navigation

Overview
In addition to the Stack Navigator, you also learned about the Tab Navigation capabilities of React Navigation. In this exercise, you will create a tab navigation method for moving between screens within the Little Lemon app.

Scenario
In this exercise, you will re-purpose the code you used to create stack navigation, to instead set up tab navigation within the Little Lemon app.

Starter Code:
For the starter code for this exercise, download the zipped folder below and get started.

You need to refactor the starter code to use tab navigation instead stack navigation.

The screenshots below provide you with the output from the emulator. Take a few moments to examine what will appear on the emulator after you complete this exercise. You will notice two tabs on the bottom: one for the Welcome screen and the other for the Login screen. Clicking on each tab will take you to the respective screens.

Login screen of the Little Lemon app as displayed in emulator. The navigation route name "Login" is visible in the header.

Welcome screen of the Little Lemon app in the emulator. The navigation route name "Welcome" is visible in the header
All of the code changes will be done in the App.js file. You do not need to make any changes to the other files and can use them as is.

Instructions
Step 1: Install tab navigation
Before you start, you will first need to install the Tab Navigation library.

To do this, run the following command:

1
npm install @react-navigation/bottom-tabs
Step 2: Instantiate createBottomTabNavigator
Next, you will import the createBottomTabNavigator from the package you just installed. Then you will instantiate the createBottomTabNavigator. This will be done in the App.js file. 

Step 3: Setup Tab Navigator and Tab Screens with routes
In this step, you will remove the code that has already been written for stack navigation and instead replace it with the tab navigator instead. Ensure to set up screens within the tab and provide a default route as well. The two screens for tab navigation in this example will be the Login screen and Welcome screen.

Step 4: Configure icons for each Tab
In this final step, you will add icons to be displayed in each tab. This will be added to the screenOptions within the tab navigator and a tabBarIcon is set. You can use any icon of your choice to represent the Welcome screen and Login screen. 

You can import Ionicons from expo as shown below:
import Ionicons from '@expo/vector-icons/Ionicons';


Conclusion 
By completing this exercise, you will be able to move between screens using the tab navigator within your mobile app.

Solution: Configure Tab Navigation
Overview
In this reading, you will review the solution code for the exercise.

The code block below outlines the outcome of the exercise in its entirety. All the other code is available in the starter code for this exercise.

App.js

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({size}) => {
                let iconName;
                if (route.name === 'Welcome') {
                  iconName = 'ios-home';
                } else if (route.name === 'Login') {
                  iconName = 'ios-enter';
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="Login">
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
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
