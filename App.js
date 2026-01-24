import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthProvider, useAuth} from './context/AuthContext';
import { TodoProvider } from './context/ToDoContext';
import {SafeAreaProvider} from "react-native-safe-area-context";

import SignIn from './screens/SignIn';
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import TaskForm from "./screens/TaskForm";
import Profile from "./screens/Profile";



/*
import HomeTabs from './src/navigation/HomeTabs';
*/

const Stack = createNativeStackNavigator();

function Root() {
    const {user} = useAuth();
    console.log('AUTH USER: ',user)
  return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              {user ?(
                  <>
                      <Stack.Screen name="Home" component ={Home}/>
                      <Stack.Screen name="TaskForm" component ={TaskForm}/>
                      <Stack.Screen name="Profile" component ={Profile}/>
                  </>

              ):(
                  <>
                      <Stack.Screen name="SignIn" component={SignIn}/>
                      <Stack.Screen name="SignUp" component={SignUp}/>
                  </>
              )}
          </Stack.Navigator>
  );
}

export default function App() {
  return (
      <AuthProvider>
          <SafeAreaProvider>
              <TodoProvider>
                  <NavigationContainer>
                      <Root />
                  </NavigationContainer>
              </TodoProvider>
          </SafeAreaProvider>
      </AuthProvider>
  );
}