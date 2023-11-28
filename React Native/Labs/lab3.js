Exercise: Build a scrollable component
Overview 
Recently, you learned how to use the ScrollView component in React Native. By now, you should know that ScrollView can be used to create a scrollable view for lists that are too long to be contained in one screen.

In this activity, you will use a ScrollView component to create a scrollable Welcome screen for the Little Lemon app. The skills you will practice here can be applied to building other scrollable views for your React Native apps.

Scenario
The Little Lemon app has a Welcome screen that is demonstrated in the image below. Currently, this screen is not scrollable. Because of the large font size used for the text, the contents do not fit within the confines of one screen, and users cannot view the content in full.

In order to make the content accessible, you have been asked to enhance the Welcome screen from the previous exercise to make it scrollable. You should also make sure that the scroll indicator is white, so it matches the Welcome screen styles.

Starter Code
 In the first screenshot, the emulator is without a scroll bar.    It is then followed by an example of the emulator where the scrollbar is visible after you have run the code and followed the instructions.  

The starter code can be downloaded as a zipped file here:

Little Lemon app as displayed in the emulator, needing a scrollable component.
Little Lemon app as displayed in the emulator - displaying a scroll bar.
Instructions 
Step 1: Enhance the Welcome screen to be Scrollable
In this step, you will use the existing code for the Welcome screen and enhance it to be a scrollable screen instead. Here you can use the ScrollView component, instead of the View component.

Step 2: Ensure that the scroll indicator is white in color
Next, you will include a prop to the ScrollView component to ensure that the scroll indicator is white in color.

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to create scrollable views. You will demonstrate how to use the ScrollView component from React Native while building the Welcome screen for Little Lemon.


Solution: Build a scrollable component
Overview  
In this reading, you will review the solution code for the exercise.   

The code block below outlines the outcome of the exercise in its entirety. 

WelcomeScreen.js

  import * as React from 'react';
import { ScrollView, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 38,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
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
