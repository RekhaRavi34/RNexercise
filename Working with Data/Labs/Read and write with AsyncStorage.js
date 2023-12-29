Exercise: Read and write with AsyncStorage

Overview
You previously learned about AsyncStorage, which is an asynchronous key-value storage system that can be used to store and persist data in a React Native application. 

In this activity, you will learn how you can utilize it for saving customers' communication preferences in the Little Lemon mobile app.

Scenario 
The Little Lemon restaurant has created a section called Settings on their mobile application for users. This allows their users to set their preferences for communication purposes. 

This new screen contains three toggle buttons to enable specific communication channels, like push notifications, marketing emails, and news updates. 

Your goal is to use the AsyncStorage module to preserve the chosen preferences even when the user quits the application. The end result reflects in the image below.

Account Preferences image listing Push notifications, Marketing emails and Latest News options with inactive toggle buttons.

Instructions

Step 1
Begin by downloading the starter code from this zipped folder:

Step 2 
The next step is to run the application in the Android emulator. 

A screen titled Account Preferences is displayed, and you can toggle any communication preference on or off. 

Let’s test this by toggling on both the Push notifications and the Latest news options and quitting the application. 

Now, reopen the application. Notice how your previous selections are lost with all communications opted out.

Account Preferences with Push notifications, Marketing emails and Latest News toggled off on an android phone.
  
Step 3 
The following step is for persisting the data.

Persist the selected preferences with the AsyncStorage library. The requirement is to store them separately, under three different keys: pushNotifications, emailMarketing and latestNews.

Now, store them, using the 
AsyncStorage.multiSet API. This is used for storing multiple key-value pairs in a batch. Then, place your code inside the useUpdate hook, inside the async function that’s already defined.
  
 // This effect only runs when the preferences state updates, excluding initial mount 
 useUpdate(() => { 
   (async () => { 
     // Use AsyncStorage.multiSet API to persist each preference under a separate key. 
   })(); 
 }, [preferences]); 
Tip: Remember that AsyncStorage only supports storing string values, so first convert Booleans to strings. 

If the AsyncStorage.multiSet operation fails and throws an error, display an alert by using the following:

Alert.alert(`An error occurred: ${e.message}`); 

Step 4 
Populate the preferences and retrieve the values with the AsyncStorage.multiGet API.

Populate the preferences from storage once the application starts up and set the local state with the values retrieved. Place your code inside the defined async function in the useEffect hook.

 useEffect(() => { 
   (async () => { 
     // Populate preferences from storage using AsyncStorage.multiGet 
   })(); 
 }, []); 
Once again, retrieve the values, using the 
AsyncStorage.multiGet
 API.

Recall that AsyncStorage only supports storing strings, so parse the values first. 

If AsyncStorage.multiGet operation fails and throws an error, display an alert by using the following:

Alert.alert(`An error occurred: ${e.message}`);

Step 5
Asses that your code is correct by performing the following testing procedure:

Open the application on the Android simulator.

Opt-in for Push notifications and Latest news by toggling the appropriate switches (the first and third options).

Quit the application instance by clicking the Recent Apps button at the bottom of the simulator (shaped like a square) and then performing a swipe gesture on the app.

Account Preferences with Push notifications, Marketing emails and Latest News alongside Recent Apps on android phones.
While in recent apps, click on the Expo app to open it again (be careful not to close this one, or you’ll need to start over with step 5).

The Recent Apps window on an android phone.
Verify that the application remembered your previously selected options and that Push notifications and Latest news are still opted in.

Account Preferences app with Push notifications toggled on, Marketing emails toggled off, and Latest News toggled on.
By completing this exercise, you will have demonstrated your understanding and ability to set up a React Native app for Little Lemon that reads and writes data using AsyncStorage.

useUpdate.js:

import {useRef, useEffect} from 'react';

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
export default function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}


Solution:

App.js:
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useUpdate from './useUpdate';

export default function App() {
  const [preferences, setPreferences] = useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  useEffect(() => {
    // Populating preferences from storage using AsyncStorage.multiGet
    (async () => {
      try {
        const values = await AsyncStorage.multiGet(Object.keys(preferences));
        const initialState = values.reduce((acc, curr) => {
          // Every item in the values array is itself an array with a string key and a stringified value, i.e ['pushNotifications', 'false']
          acc[curr[0]] = JSON.parse(curr[1]);
          return acc;
        }, {});
        setPreferences(initialState);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    })();
  }, []);

  // This effect only runs when the preferences state updates, excluding initial mount
  useUpdate(() => {
    (async () => {
      // Every time there is an update on the preference state, we persist it on storage
      // The exercise requierement is to use multiSet API
      const keyValues = Object.entries(preferences).map((entry) => {
        return [entry[0], String(entry[1])];
      });
      try {
        await AsyncStorage.multiSet(keyValues);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    })();
  }, [preferences]);

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


