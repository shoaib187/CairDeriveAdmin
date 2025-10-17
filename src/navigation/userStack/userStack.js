// src/navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserManagement from '../../screens/userManagement/userManagement';
import AddUser from '../../screens/addUser/addUser';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='UsersHomPage'>
      <Stack.Screen name="UsersHomPage" component={UserManagement} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
};

export { UserStack };
