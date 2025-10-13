// src/navigation/AuthStack.js
import React from 'react';

import { Text } from 'react-native';
import Login from '../../screens/login/login';
import { createStackNavigator } from '@react-navigation/stack';


function Register() {
  return <Text>Login</Text>
}

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
