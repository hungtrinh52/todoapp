import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {AuthProvider} from './context/AuthContext';
import { TodoProvider } from './context/ToDoContext';

import SignIn from './screens/SignIn';
import SignUp from "./screens/SignUp";



/*
import HomeTabs from './src/navigation/HomeTabs';
*/

const Stack = createNativeStackNavigator();

function Root() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp}/>
       {/* <Stack.Screen name="Main" component={HomeTabs} />

        <Stack.Screen name="AddToDo" component={AddToDoScreen} />*/}
      </Stack.Navigator>
  );
}

export default function App() {
  return (
      <AuthProvider>
        <TodoProvider>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </TodoProvider>
      </AuthProvider>
  );
}