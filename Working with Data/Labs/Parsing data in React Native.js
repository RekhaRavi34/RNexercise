Exercise: Parsing data in React Native

Overview 
You previously discovered that JSON is a useful format for storing complex data, but you also need to parse any specific data to be used within your React Native app.

In this exercise, you will do exactly that and parse a .json file to display menu items, along with each item’s price, within the Little Lemon app.

Starter code
You can download the starter code from the zipped folder below:

Scenario 
Your task is to parse a JSON file that is provided to you, which contains Little Lemon’s menu items and the corresponding price for each item. This information will be rendered in the app by using the FlatList within the App component.

You will add code to parse the JSON file and display the menu items in the App.js file.

The JSON file is placed within the project folder and is named menuItems.json.

The images below demonstrate how your app should appear after you complete this exercise:

Little Lemon menu items on iOS and Android phones.
The colors displayed in the images above can be applied using the following values:  

#495E57

#F4CE14

Instructions  
Step 1: Import the menuItems.json file
Your first step in this exercise is to import the menuItems.json file within your App component. 
menuItems.json:
  {
  "menu": [
    {
      "title": "Spinach Artichoke Dip",
      "price": "10"
    },
    {
      "title": "Hummus",
      "price": "10"
    },
    {
      "title": "Fried Calamari Rings",
      "price": "51"
    },
    {
      "title": "Fried Mushroom",
      "price": "12"
    },
    {
      "title": "Greek",
      "price": "7"
    },
    {
      "title": "Caesar",
      "price": "7"
    },
    {
      "title": "Tuna Salad",
      "price": "10"
    },
    {
      "title": "Grilled Chicken Salad",
      "price": "12"
    },
    {
      "title": "Water",
      "price": "3"
    },
    {
      "title": "Coke",
      "price": "3"
    },
    {
      "title": "Beer",
      "price": "7"
    },
    {
      "title": "Iced Tea",
      "price": "3"
    }
  ]
}

Step 2: Parse through the JSON
Next, parse through the JSON and use the property that contains the menuwithin the JSON.

You’ll then need to store this JSON containing the menu items within the App’s local state.

Step 3: Configure the FlatList component
In this step, you will configure the FlatList component and pass the required prop data.Make sure to use the required renderItem method to render each item in the menu along with the corresponding price.

Hint: Note that the data prop used here is the menu that has been stored in a local state variable in the previous step.

Step 4: Style the component
Finally, you will style the App component that you created to match the screenshots. Make sure to provide meaningful names to all your styles.

Conclusion  
By completing this exercise, you will demonstrate your understanding and ability to work with JSON data and parse through JSON data within your React Native application.

Solution:
App.js
import { FlatList, Text, SafeAreaView, View, StyleSheet } from 'react-native';
import menuItems from './menuItems.json';

export default App = () => {
  const { menu } = menuItems;

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
      <Text style={menuStyles.headerText}>Little Lemon Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
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
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center',
  },
}); 
