Exemplar: Little Lemon Menu App

This reading will guide you on how to complete all of the exercises in this lesson.

Solution: Set up the app
Begin by downloading the solution code for this project from the zip folder below.

In your project, run the application in the iOS or Android emulator. The output should appear as in the screenshot below:


Solution: Query the REST API

a) In the App.js file, implement the fetchData function as follows:

 const fetchData = async () => {
   const response = await fetch(API_URL);
   const json = await response.json();

   menuItems = json.menu.map((item) => ({
     ...item,
     category: item.category.title,
   }));

   return menuItems;

First, you’ll need to fetch the data from Github by using the React Native fetch API, which is a polyfill of the browser API. 

This means that it implements a feature that is not natively supported by the browser. Since this is an asynchronous operation, the process should be wrapped in a try/catch clause.

Once the data is retrieved, you need to transform the data returned by the server so that the category field is flattened into a single string. 

For that, you can use the map method from JavaScript arrays, iterate over all items from the collection and return a modified category that is a string instead of the original object.

b) To store the menu items, the implementation of the saveMenuItems function inside the database.js file is demonstrated below:

123456789101112
export function saveMenuItems(menuItems) {
 db.transaction((tx) => {
   tx.executeSql(
     `insert into menuitems (uuid, title, price, category) values ${menuItems
       .map(
         (item) =>
           `('${item.id}', '${item.title}', '${item.price}', '${item.category}')`
       )
       .join(', ')}`
   );

The SQL statement is an INSERT operation that takes the data returned from the server (and slightly transformed in the client to turn category into a string) and stores it in the database. 

To insert multiple rows in one single operation, you can use the multiple insertion syntax as described below:

INSERT INTO table_name (column_list)
VALUES
    (value_list_1),
    (value_list_2),
    ...
    (value_list_n);

Solution: Displaying the food menu via SQLite

The code below demonstrates the implementation of the getSectionListData function, which is located in the utils.js file. The code returns a data structure that is supported by the SectionList component. 

Specifically, it applies the dish category for each section title, and also groups the dishes into the appropriate section.

export function getSectionListData(data) {
 const dataByCategory = data.reduce((acc, curr) => {
   const menuItem = {
     id: curr.id,
     title: curr.title,
     price: curr.price,
   };
   if (!Array.isArray(acc[curr.category])) {
     acc[curr.category] = [menuItem];
   } else {

The transformation involves turning the array into an object first by using the reduce method from JavaScript arrays. That allows you to create an object whose keys are the categories and whose values are the different dishes that belong to that category.

Then the object is transformed back into an array by using the Object.entries method, which iterates over each object key-value pair. The return statement represents a section structure for the SectionList component.

Solution: Sorting and filtering the food menu
This is the last step is the implementation of the filterByQueryAndCategories function located in the database.js file.

The code is split into two different branches or conditions, either having an active text in the search bar or no text at all.

If there is no text query present, then the filtering is considering only the active categories. The OR keyword makes sure to have a union operation, so that all categories are taken into account.

Otherwise, if there is an active text query, the condition (everything after the WHERE keyword) has to represent an intersection between the results obtained by filtering by active categories, like in the first branch of the code, or by filtering by a specific substring. 

To search for dish titles that contain the substring provided as the query, you have to use the LIKE keyword and wrap the text with the percentage character as LIKE ‘%{query}%’. 

Finally, the AND keyword produces an intersection of both filters and outputs the desired result.

export async function filterByQueryAndCategories(query, activeCategories) {
 return new Promise((resolve, reject) => {
   if (!query) {
     db.transaction((tx) => {
       tx.executeSql(
         `select * from menuitems where ${activeCategories
           .map((category) => `category='${category}'`)
           .join(' or ')}`,
         [],
         (_, { rows }) => {
           resolve(rows._array);
         }
       );
     }, reject);
   } else {
     db.transaction((tx) => {
       tx.executeSql(
         `select * from menuitems where (title like '%${query}%') and (${activeCategories
           .map((category) => `category='${category}'`)
           .join(' or ')})`,
         [],
         (_, { rows }) => {
           resolve(rows._array);
         }
       );
     }, reject);
   }
 });
}
