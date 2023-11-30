Exercise: Displaying Images in your app
Overview
So far you have learned how to display images in React Native with the Image component, as well as how to style images. Remember that Image is a core component that accepts locally stored image files in addition to online image files and can take many styling props.

In this exercise, you will display and style images within the Little Lemon app.

Scenario
Your next duty is to add a unique Little Lemon logo to the Welcome screen. 

Below you’ll find the logo you will need to add, in the form of a PNG file. 

The Little Lemon logo
Starter Code:  

The starter code can be downloaded from the zipped folder below:  

You will add the Image component to the Welcome Screen to render the Little Lemon logo. 

The image below is an example of how your app should look after you complete this exercise:

Little Lemon app as displayed in emulator. An image of a lemon is visible beside the header text "Little Lemon".
Colors that you will use:

#EE9972, #EDEFEE, black and white.

Instructions
Step 1: Import the Little Lemon logo 
Your first step is to import the Little Lemon logo image into your project. To make sure that you have it available, right-click on the Little Lemon logo image in Scenario and then click on Save image as... to save it to your local drive as a .png file. Create an image folder in your project and then add the logo.png file to it.

You can name it as follows with the following folder structure within the root folder of your project:

img/logo.png

Step 2: Configure the image component within the Welcome Screen
Your next step is to configure the Image component within the welcome screen. It should display the Little Lemon logo that you just imported on the screen. Import the Image component within your Welcome screen to start using it.

Step 3: Style the component
In this step, you will style the logo image and the welcome heading, to match the screenshots. Make sure to provide meaningful names for all your styles.

Hint: You can set the image’s height, width and borderRadius styles to match the screenshots.

Conclusion
By completing this exercise, you will demonstrate your understanding and ability to configure and utilize the Image component to display images within your React Native app.


Solution: Displaying Images in your app
Overview
In this reading, you will review the solution code for the exercise.

The code block below outlines the outcome of the exercise in its entirety.

  import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('./img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
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
