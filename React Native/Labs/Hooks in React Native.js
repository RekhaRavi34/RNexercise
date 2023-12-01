Exercise: Hooks in React Native
Overview
So far, you have learned about some of the hooks in React Native and how to use them. One of the hooks that was covered was useColorScheme, which allows you to detect the user’s preferred color scheme automatically.

In this exercise, you will use the useColorScheme hook to make the Little Lemon app automatically switch between dark mode and light mode, based on the theme setting of the device.

Scenario
For this exercise, you have been tasked with updating the Welcome Screen for Little Lemon to make it responsive to the dark and light theme settings on the user’s device. 

Starter Code:

You can download the starter code for this exercise from the zipped folder below:


You will use the useColorScheme hook to make design changes to the Welcome screen as follows:

Hint: Notice that the Welcome screen shows different colors based on whether the user has light mode or dark mode.

Colors that you will use:

#EE9972, #EDEFEE, black and white, #333333

Instructions
Step 1: Configure the useColorScheme hook within Welcome Screen
Your first step is to configure the useColorScheme hook within the Welcome screen. Make sure to import useColorScheme from React Native. Call the useColorScheme hook function and store its results in a variable within the Welcome screen (instatiate a hook).

Step 2: Style Welcome Screen based on Light mode vs. Dark mode
Once you have the information on whether the user is on light mode or dark mode via the hook, you are ready to style the page. Add the specific the specific light or dark mode styles. Utilize the hook to establish conditional styling based on the theme that is currently set.

Hint: Update the background color to be dark when the user is in dark mode and update the same to be a light color when the user is in light mode.  Similarly, switch the text colors based on the theme between light and dark respectively. 

Hint: You can change the settings on your emulator to Dark mode or Light mode as needed to test your solution.

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to configure hooks in React Native.

Solution: Hooks in React Native
Overview
In this reading, you will review the solution code for the exercise.

The code block below outlines the outcome of the exercise in its entirety.

WelcomeScreen.js

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('./img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.regularText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
