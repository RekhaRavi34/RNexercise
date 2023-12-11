Exercise: Configure Drawer Navigation
Overview
Within React Navigation, you’ve practiced building navigation routes using the Stack Navigator and the Tab Navigator. You were then introduced to another useful approach, Drawer Navigation. Recall that this is used to bring in a drawer from the edge of the screen, which contains navigation options.

In this exercise, you will create a drawer navigation method for moving between screens for the Little Lemon app.

Starter Code
In this exercise, you will repurpose the code you used to create stack navigation so that it sets up drawer navigation instead.

The starter code for this exercise can be downloaded from the zipped folder below:

Scenario
Below is what you will see on the emulator after you complete this exercise. You will notice a hamburger menu on the top left corner of the screen. The user can use the drawer and open it from left to right. Inside this drawer, options for the various screens, such as Login and Welcome, will be displayed. The user can click on any of the screens and navigate to that specific screen.

The Little Lemon app with the drawer open to select the option to navigate to the Welcome screen.

The Welcome screen of the Little Lemon app.

The Little Lemon app with the drawer open to select the option to navigate to the Login screen.

The navigation screen of the Little Lemon app.
All of the code changes will be done in the App.js file. You do not need to make any changes to the other files and can use them as is.

Instructions
Step 1: Install Drawer navigation
First, you will need to install the Drawer Navigation library.

To do this, run the followng command:


npm install @react-navigation/drawer

You also need to install two more packages within your expo project, which are  react-native-gesture-handler  and  react-native-reanimated. You can install these by running the following line:

npx expo install react-native-gesture-handler react-native-reanimated

Step 2: Instantiate createDrawerNavigator
The next step is to import the createDrawerNavigator from the package you just installed. Then you will instantiate the  createDrawerNavigator. This will be done in the App.js file. 

Step 3: Setup Drawer Navigator and Drawer Screens with routes
Finally, you will remove the code that has already been written for tab navigation and replace it with the drawer navigator instead. Make sure to setup screens within the drawer and provide a default route as well. The two screens for drawer navigation in this example will be the Login screen and Welcome screen.

Note: Make sure to pass the useLegacyImplementation prop to the Drawer Navigator for it to work.

Conclusion
By completing this exercise, you have practiced how to move between screens using the drawer navigator within your mobile app.

Solution: Configure Drawer Navigation
Overview
In this reading, you will review the solution code for the exercise.

The code block below outlines the outcome of the exercise in its entirety.  All the other code is available in the starter code for this exercise. 

App.js :


import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
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
