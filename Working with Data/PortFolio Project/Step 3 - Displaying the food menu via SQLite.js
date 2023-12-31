Exercise: Displaying the food menu via SQLite
Overview      
Now that the menu item data has been stored inside a table in a SQLite database, you’re ready to render it within your app. This will entail defining it in a way that it can be interpreted accurately by React Native components.

Scenario      
The App.js file of the Little Lemon mobile app already contains a SectionList component, but currently it cannot properly extract the data that it needs to display. You’ll need to implement a function that defines the structure to make the data compatible.

Instructions      
Step 1 – Prepare data for React Native      
For this step, implement the getSectionListData function inside the utils.js file. The function will transform the raw data retrieved from the menuitems table into the data structure a SectionList React Native component expects as its sections prop.       

The SECTION_LIST_MOCK_DATA variable defined at the top of utils.js file represents an example of the data structure you need to return from this function. Note that for this exercise, it is used as a placeholder for the API call and will be over written. To clarify, this variable holds the following data:           

The title of each section should be the category

The data property should contain an array of menu items

Each item needs to have the following properties: id, title and price

Step 2 – Check the SectionList component        
In the App.js file, observe the SectionList component. It has already been coded to render the data in accordance with how you set it up in the previous step, but you should familiarize yourself with how this is done.

If you need a refresher on how to use SectionList and its props, you can check the SectionList documentation as a reference.https://reactnative.dev/docs/sectionlist

Conclusion
In this exercise, you structured the data extracted from the database in order to make it React Native-ready. 
