Exercise: Sorting and filtering the food menu

Overview      
After completing the previous exercise, your app should now be populated with data. However, you’re not done just yet; in most real-world situations, users will want to control what information is shown. You’ll make this possible by adding sorting and filtering functionalities to the app.

Scenario      
When users access the menu page of the Little Lemon app, they’ll find a full list of all items offered by the restaurant. But what if a user only wants to view a specific category, rather than navigating through everything or finding a particular dish by name? Fortunately, you can execute SQL statements to display only results that match a query string, as well as the ability to filter items by category.

Instructions      
Step 1 – Sort and filter the data                    
1.  Implement a transaction that executes a SQL statement to filter the menu by the combination of two criteria: a query string and a list of selected categories.  

The query string should be matched against the menu item titles to see if it's a substring contained within. 

For example, if there are four items in the database with titles: 'pizza, 'pasta', 'french fries' and 'salad', the query 'a' should return 'pizza' 'pasta' and 'salad', but not 'french fries', since the latter does not contain any 'a' substring anywhere in the sequence of characters. 

The activeCategories parameter represents an array of selected categories from the filter component. All results should belong to an active category to be retrieved. 

For instance, if 'pizza' and 'pasta' belong to the 'Main Dishes' category and 'french fries' and 'salad' to the 'Sides' category, a value of ['Main Dishes'] for active categories should only return 'pizza' and 'pasta'.

2.  Alter the SQL statement to support filtering by both criteria at the same time. 

That means if the query string is 'a' and the active category 'Main Dishes', the SQL statement should return only 'pizza' and 'pasta'. 

The 'french fries' option is excluded because it's part of a different category and 'salad' is excluded due to the same reason, even though the query 'a' is a substring of 'salad', so the combination of the two filters should be linked with the AND SQL keyword. 

Step 2 – Test the app      
Finally, it’s time to verify if you have implemented everything correctly by following the procedure described below.

1.  Disable all filters. The application should display a list of 12 menu items, grouped in 3 categories, with 4 items in each category. Observe the following items for an example: 


2.   Select the Appetizers filter. Only the Appetizers should be displayed, as in the image below: 


3.   With the Appetizers filter active, select the Beverages filter as well. This should display all categories except for Salads: 


4.   Activate all filters. At this point, all categories and their items should be displayed:    


5.   Type the text ‘Sa’ in the search box. You should see only 3 items within the Salads category:    


6.   Deselect the Salads filter. There should be no results displayed at all:    


7.   Type the text ‘Ca’ in the search box with all filters activated. The menu should display 2 items from 2 different categories as illustrated below:    


8.   Deactivate the Beverages and Salads filters. The result should be as follows:    


9.   Type the text ‘Tea’ in the search box. The list should display only the ‘Iced Tea’ drink:    


Conclusion      
If the testing procedure produces the expected outcomes, then you’re all done! You’ve used your knowledge for fetching data, storing it in a database, and then implementing and presenting it within a React Native app. You’ve also applied principles of real-world app design, namely giving users the ability to manipulate data to best suit their needs. Well done!
