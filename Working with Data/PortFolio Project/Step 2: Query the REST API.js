Exercise: Query the REST API

Overview      
For this exercise, you will be tasked with utilizing the REST API to fetch data from the network. You will then write a SQL statement to store it inside a table within a SQLite database. 

Scenario      
The data for Little Lemon’s menu items is stored in a server as a JSON file, and each item is assigned an ID, title, price and category. It would be cumbersome to query this data in its current form, so to make things easier you’ll store it as a table in a database. This will set things up for simpler code once it comes time to render the data in the app.

Instructions :

Step 1 – Fetch data from the server      
You’ll need to implement the fetchData function that is in the App.js file. Its responsibility is to fetch the menu from a GitHub endpoint, whose URL is stored under the API_URL variable in the code. You can inspect the data returned in your browser by visiting such a URL.

The GitHub endpoint URL for this exercise can be found here 

https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json     

The category field returned by the endpoint comes as an object with a property called title. You just need to grab the title value and set it under the key category, so the category becomes a string.

{
    "id": 1,
    "title": "Spinach Artichoke Dip",
    "price": "10",
    "category": {
        "title": "Appetizers"
    }
},
That means the server response should be slightly transformed in this function to flatten out each menu item in the array.

Hint: Use the map function to achieve this.      

Step 2 – Store data in SQLite database     

Complete the implementation of the saveMenuItems function inside the database.js file. For that, implement a single SQL statement to save all menu data in a table called menuitems, which has already been created for you. 

To view all the different columns of the table, observe the table below or alternatively check the code from the createTable() function:

uuid  title price  category

'1' 'Pizza' '5'   'Main Dishes'      

Hint: You need a SQL statement that allows you to insert multiple rows at once.

Conclusion      
In this exercise, you fetched data from a JSON file and wrote a SQL statement to store it in a table within a database. Now that you’ve completed these steps, you’re in a much better position to display the data in your app, which you’ll get to soon.
