Exercise: HTTP Request/Response in React Native
Overview
Now that you are familiar with how to make HTTP calls using the Fetch API in React Native as well as handle the response that is returned, you’re ready to use these skills to retrieve data from the server and add it to the Little Lemon app.

Scenario
In this exercise, your task is to make an HTTP GET request call to a URL to access data about the items in Little Lemon’s menu. Specifically, this will contain a JSON response with menu items, price per item, and category of each item.

You will parse through this JSON response data and display it within the Little Lemon app using the FlatList component. Recall that FlatList is used to render large, performant lists in React Native. 

Starter code
You can download the starter code from the zipped folder below:

Use 
this URL
 to fetch your data.

You will add the code to fetch data from the network within your App.js file.

The image below demonstrates how your app should appear after you complete this exercise:

Little Lemon menu items on an iOS phone.
Instructions  
Step 1: Make HTTP request call using Fetch API
Your first step in this exercise is to make a fetch request call to the API, using the provided URL.

Step 2: Parse through HTTP response JSON
Next, you will need to parse the response that is received from the API call, as this response is in JSON format.

Step 3: Ensure HTTP call is asynchronous, and resolves promises
You will use the async await methods from JavaScript to ensure the HTTP call is asynchronous and promises are resolved. Make sure to include a try, catch and finally block in your code to handle errors.

Step 4: Store JSON response in the local state
In this step, you will store JSON response in the local state. Use the useState hook and set the state when the JSON response is received from the HTTP call.

Step 5: Ensure the HTTP call is made when the App component renders
The next step is to invoke the HTTP API fetch call. Typically the useEffect hook is a good spot to invoke this call, to ensure that it is called each time the App component renders.

Step 6: Configure the FlatList component
Next, you will configure the FlatList component and pass the required prop data. Make sure to use the required renderItem method to render each item in the menu, along with its corresponding price.

Hint: Note that the data prop used here is the menu that has been stored in a local state variable in the previous step.

Step 7: Style the component
Finally, you will style the App component that you created to match the screenshots. Make sure to provide meaningful names to all your styles.

Conclusion  
By completing this exercise, you will have demonstrated your understanding and ability to work with HTTP requests and responses in React Native applications.

Solution:

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

  const getData = async() =>{
    try{
      const response = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json')
      const json = await response.json();
      setData(json.menu);
    }catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }  
  }

  useEffect(()=>{getData();},[]);
  const renderItem = ({item}) =>{
    return (<Item name={item.title} price={item.price}/>)
  }

  const Item = ({name,price}) =>{
    return(
      <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (<FlatList data={data}
                    renderItem={renderItem}/>
      )}
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center',
  },
  innerContainer:{
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText:{
    color: '#F4CE14',
    fontSize: 22,
  }
});
