Solution: Your first React Native component
Overview
In the preceding exercise, you created a reusable React component for the Little Lemon mobile app. Here is the solution code for the exercise to assist you on your learning journey.

Procedure
Step 1: Create Footer Component
Create a LittleLemonFooter component in a new file within the components folder. 

This component will print the text needed for the footer.

components/LittleLemonFooter.js

import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View>
      <Text>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

Step 2: Style Footer Component 
Below you'll find the code used to style the footer component.

import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

Step 3: Call Footer Component from App Component
Finally, you’ll need to call the footer component from the App component by applying the following code:

import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

The code block below outlines the outcome of the exercise in its entirety. 

components/LittleLemonFooter.js

import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

App.js
import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

LittleLemonHeader.js
import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function LittleLemonHeader() {
    return (
      <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
        <Text style={{ padding: 40, fontSize: 30, color: 'black' }}>
          Welcome to Little Lemon
        </Text>
      </View>
    );
}
