HTTP protocol and Promises in detail

Previously, you discovered how to make HTTP calls from your React Native app while using the async/await methods to resolve promises.

You’ve become familiar with the built-in fetch method in React Native and found out how to fetch data and handle the response from the API.

In this reading, you’ll explore HTTP calls in more detail, including some additional features. But before you do so, here is a refresher on fetching data within your React Native app.

Making a GET request
To fetch content from a URL, use the following to pass the URL to the fetch method in React Native.
fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json');

Handling the response
The goal is to make a request and perform an action with the response. The fetch method returns a Promise. Now, use the async/await method to handle the Promise. Notice that the catch block contains any errors that occur, and the finally block actions any remaining items.

In the following example, you will fetch Little Lemon’s menu data from the API and handle the response data to be displayed within the app.

 const getMenu = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
      );
      const json = await response.json();
      setData(json.menu);
      console.log(json.menu);
    } catch (error) {
      console.error(error);

For the complete code for fetching the menu data using a GET request,  below:
      
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
      );
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{'$' + price}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.title} price={item.price} />
  );

  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
});

POST Requests

By default, the requests made using the fetch method are GET requests. Recall that fetching calls with the GET method retrieves data from the network. The POST method sends data to the server from your app. 

In React Native, you can use the fetch method to make POST requests to send data to the server.

Let’s consider the following scenario that makes use of the HTTP POST method. A user wants to log into the Little Lemon app. So, you need to send a POST request to the server. 

Therefore, the user must enter their name, email, password, or other credentials to log in to the app. Then, the server receives the credentials entered by the user, validates the information, and eventually responds to the app about whether the login was successful.

POST Request and Handle Response – Login a User
The following code snippet showcases a POST request from your React Native app. The fetch method takes in the method parameter, where you provide the value as POST. If no value is provided, then by default, the fetch method makes a GET call to the server.


const loginUser = async () => {
  try { 
    const response = await fetch('https://your-website.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
 
      body: JSON.stringify({

The fetch method allows you to include optional headers. Within the body property, the request body is passed to the server. In the example of logging in a user, it contains the string values of the user’s credentials.

With all this information, the fetch call is made to the server. The server then responds asynchronously, and the JSON response is parsed by the application, as illustrated in the following image.

A diagram of the Parse response with the Fetch call is sent from the app to the server and a JSON response is returned.
                           
Other Networking Libraries
Note that you can also use other networking libraries to make network calls within your React Native application. The XMLHttpRequest API is also built into React Native. It is an alternative to the fetch method.

So, within your React Native app, use the XMLHttpRequest API directly or other third-party libraries such as axios that depend on it.

Below you’ll find a sample code snippet showcasing the use of the XMLHttpRequest.
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');

Furthermore, explore other networking library options with the XMLHttpRequest by visiting the documentation in the Additional Resources of this lesson. 

Conclusion
React Native accepts many networking libraries. So, explore the library that best suits your needs. 

In this reading, you delved deeper into HTTP Protocol and Promises and learned how to use the fetch method to execute them within your React Native app.
