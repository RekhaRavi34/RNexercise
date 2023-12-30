Exercise: Read and write with SQLite

Overview
By now you are familiar with SQLite, which is a free, open-source, and lightweight, relational database management system. It is best suited to more complex projects and often used for small mobile applications. In this exercise, you’ll discover how to implement the logic required to ensure that the stored data syncs with the app's local state when editing or deleting information.

Scenario
The Little Lemon restaurant has created a small application to register all customers that are currently dining in. The application offers several customer management features, such as editing a customer's name or deleting the customer profile.  

SQLite is the storage solution currently in use. The code to persist the list of customers is in place. However, the stored data isn't synced with the app's local state when an addition or deletion operation occurs. Your goal is to implement that logic.

Instructions

Step 1
You can find the starter code in the zip folder below:

Step 2 
The next step is to run the application in the Android emulator. Please note that the application will not run correctly in the web option on Snack.  

A screen titled “Little Lemon Customers” is displayed. A text input appears to enter a new customer name, and a button to save it.

Little Lemon customer section with no customers listed on an android phone.
You can enter and save some names, and the registered customers will be displayed in a list. 

You have the option to edit or delete a customer. Each customer can be either edited or deleted by pressing one of the icons located on the right of each customer, as per the screenshot below.

Little Lemon customer section with customers, Sophie, Mark, and Maria listed on an android phone.
The SQLite database for this exercise has a single table named “customers”. Here, each customer entry presents three properties: “id”, “uid” and “name”. The default “id” primary key is not needed for this exercise. Instead, use “uid” for your queries. It’s guaranteed to be unique, per customer.

Step 3 
This step explores editing a customer.

Update the local state and sync the underlying SQLite database when editing a customer. 

Place the code inside the hideDialog function in the App.js file. If you are unable to locate this function within the code, you can utilize the ‘Find’ functionality of your browser by pressing Ctrl + F and entering hideDialog as your search query. The function receives an updated customer as an argument. Each customer object has two keys: uid, representing a unique id, and name. 

For the SQL transaction, make sure that if two names are the same, only the selected item is deleted.

 const hideDialog = (updatedCustomer) => { 
   setDialog({ 
     isVisible: false, 
     customer: {}, 
   }); 
   // 1. Set the new local customer state 
   // 2. Create a SQL transaction to edit a customer. Make sure if two names are the same, only the selected item is deleted 
 }; 

Step 4 
This step describes how to delete a customer.

Update the local state and sync the database when deleting a customer. 

Continue working on the App.js file. Place your code inside the deleteCustomer function. The function receives the customer object that is about to be deleted. Each customer object has two keys: uid, representing a unique id, and the name key.

 const deleteCustomer = async (customer) => { 
   const shouldDelete = await asyncAlert({ 
     title: 'Delete customer', 
     message: `Are you sure you want to delete the customer named "${customer.name}"?`, 
   }); 
   if (!shouldDelete) { 
     return; 
   } 
   // 1. Set the new local customer state 
   // 2. Create a SQL transaction to delete a customer. Make sure if two names are the same, only the selected item is deleted 

Step 5
Verify that your code works correctly by performing the following test:

Open the application on the Android simulator.

Add three new customers with the names “John”, “Maria” and “Sara”.

Edit the second customer with the name “Maria” and change it to “Nadia”.

Now, add a new customer named “John”. At this point, your screen should look like this:

Little Lemon customer section with customers, John, Nadia, Sara, and John listed on an android phone.
Delete the first customer with the name “John”.

Quit the application instance by clicking the Recent Apps button at the bottom of the simulator (shaped like a square) and then performing a swipe gesture on the app.

Little Lemon app in the Recent Apps window with customers, John, Nadia, Sara, and John listed on an android phone.
While in recent apps, click on the Expo app to open it again (be careful not to close this one, or you’ll need to start over with step 6).

Recent apps window on an android phone.
Verify that when the application starts up, it displays a list of three customers: “Nadia”, “Sara” and “John”.

Little Lemon customer section with customers, Nadia, Sara, and John listed on an android phone.

Conclusion
By completing this exercise, you will have demonstrated your ability to set up a React Native app that reads and writes Little Lemon’s 
customer data using SQLite.

asyncAlert.js

import {Alert} from 'react-native';

export default function asyncAlert({
  title,
  message,
  cancelText = 'Cancel',
  okText = 'OK',
  onPress
})  {
  return new Promise(resolve => {
    Alert.alert(
      title,
      message,
      [
        {
          style: 'cancel',
          text: cancelText,
          onPress: () => {
            resolve(false);
          }
        },
        {
          text: okText,
          onPress: () => {
            onPress?.();
            resolve(true);
          }
        }
      ],
      {
        cancelable: true,
        onDismiss: () => resolve(false)
      }
    );
  });
}


App.js:

import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import {
  IconButton,
  Provider,
  Portal,
  Dialog,
  Button,
} from 'react-native-paper';
import asyncAlert from './asyncAlert';

const db = SQLite.openDatabase('little_lemon');

// Implement edit and delete with SQLite
export default function App() {
  const [textInputValue, setTextInputValue] = useState('');
  const [dialog, setDialog] = useState({
    customer: {},
    isVisible: false,
  });
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists customers (id integer primary key not null, uid text, name text);'
      );
      tx.executeSql('select * from customers', [], (_, { rows }) => {
        const customers = rows._array.map((item) => ({
          uid: item.uid,
          name: item.name,
        }));
        setCustomers(customers);
      });
    });
  }, []);

  const showDialog = (customer) =>
    setDialog({
      isVisible: true,
      customer,
    });

  const hideDialog = (updatedCustomer) => {
    setDialog({
      isVisible: false,
      customer: {},
    });
    const newCustomers = customers.map((customer) => {
      if (customer.uid !== updatedCustomer.uid) {
        return customer;
      }

      return updatedCustomer;
    });

    setCustomers(newCustomers);
    // Edit customer from DB
    db.transaction((tx) => {
      tx.executeSql(
        `update customers set uid=?, name=? where uid=${updatedCustomer.uid}`,
        [updatedCustomer.uid, updatedCustomer.name]
      );
    });
  };

  const deleteCustomer = async (customer) => {
    const shouldDelete = await asyncAlert({
      title: 'Delete customer',
      message: `Are you sure you want to delete the customer named "${customer.name}"?`,
    });
    if (!shouldDelete) {
      return;
    }
    const newCustomers = customers.filter((c) => c.uid !== customer.uid);
    setCustomers(newCustomers);
    // SQL transaction to delete item based on uid
    db.transaction((tx) => {
      tx.executeSql('delete from customers where uid = ?', [customer.uid]);
    });
  };

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Little Lemon Customers</Text>
          <TextInput
            placeholder="Enter the customer name"
            value={textInputValue}
            onChangeText={(data) => setTextInputValue(data)}
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <TouchableOpacity
            disabled={!textInputValue}
            onPress={() => {
              const newValue = {
                uid: Date.now().toString(),
                name: textInputValue,
              };
              setCustomers([...customers, newValue]);
              db.transaction((tx) => {
                tx.executeSql(
                  'insert into customers (uid, name) values(?, ?)',
                  [newValue.uid, newValue.name]
                );
              });
              setTextInputValue('');
            }}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}> Save Customer </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.customerName}>Customers: </Text>
            {customers.map((customer) => (
              <View style={styles.customer}>
                <Text style={styles.customerName}>{customer.name}</Text>
                <View style={styles.icons}>
                  <IconButton
                    icon="pen"
                    size={24}
                    onPress={() => showDialog(customer)}
                  />
                  <IconButton
                    icon="delete"
                    size={24}
                    onPress={() => deleteCustomer(customer)}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        <Portal>
          <Dialog visible={dialog.isVisible} onDismiss={hideDialog}>
            <Dialog.Title>Edit Customer name</Dialog.Title>
            <Dialog.Content>
              <TextInput
                value={dialog.customer.name}
                onChangeText={(text) =>
                  setDialog((prev) => ({
                    ...prev,
                    customer: {
                      ...prev.customer,
                      name: text,
                    },
                  }))
                }
                underlineColorAndroid="transparent"
                style={styles.textInputStyle}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => hideDialog(dialog.customer)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  customer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  customerName: {
    fontSize: 18,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
    marginBottom: 16,
  },
  buttonTextStyle: {
    padding: 5,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    fontSize: 18,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
  icons: {
    flexDirection: 'row',
  },
});


