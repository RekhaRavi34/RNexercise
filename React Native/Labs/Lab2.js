Exercise: Build a React Native screen
Overview
Previously, you were introduced to two core components: View and Text. If you recall, View is the basic building block of the user interface that houses other elements, while Text is used to display text on the screen.

In this activity, you will use these components to create a Welcome screen for the Little Lemon app. In the process you’ll learn best practices for efficiently building React Native screens in a mobile app.

Scenario
The Little Lemon app already has a header and footer component, and now you have been asked to create a Welcome screen for the app. This screen will contain a welcome message as demonstrated below:

https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/pnHhKVLTRxaZ6ygbGGhWPw_aefe9b8a09124924b079b4e0e64f04a1_Buld-RN-screen-a.png?expiry=1701216000000&hmac=q8Hwh62rQ0mZW3rAtgrHenyygPAEW7_ujW7qYgOCGfI

Welcome screen of Little Lemon app as displayed in emulator.
Starter Code  
Use the code below and build upon it to complete this exercise. The code can be downloaded from the zipped folder below:

Instructions
Step 1: Create a Welcome Screen
Your first step is to create a Welcome screen. Create a file named WelcomeScreen.js within your source project folder. This will contain the code to display the welcome text.

The screen should display the following title:

Welcome to Little Lemon

Below this title you should have the following subheading:

Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!

Hint: Think about how to structure this with components. Where should the Text component be relative to View?

Step 2: Style Welcome Screen
The next step is to add styles to your Welcome screen. Don't forget that this is a creative process, so feel free to choose any styles, font sizes and colors that you think suit the screenshot given in the scenario.

Hint: You can follow the same styling patterns and colors used so far in the starter code.

Step 3: Render the Welcome Screen from the App Component
In this step, you will call the Welcome screen that you created from the App component. This ensures that the Welcome screen is rendered on the app.

Hint: Have you imported all the necessary components for rendering?

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to create screens within your React Native app. You will demonstrate how to use some of the core components in React Native, such as View and Text while building the Welcome screen for Little Lemon. 

  WelcomeScreen.js

import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
}

App.js

import * as React from 'react';
import { View, Text } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./WelcomeScreen";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
