import React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../components/constants/colors/colors';
import ManagementStack from '../managementStack/managementStack';
import Operations from '../../screens/operations/operations';
import UserManagement from '../../screens/userManagement/userManagement';
import Reports from '../../screens/reports/reports';




const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor={COLORS.primary} showHideTransition={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarStyle: {
            display: focusedRouteName(route) ? 'flex' : 'none',
            paddingBottom: 12,
            paddingTop: 6,
            height: 66,
            borderTopColor: '#fff',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Management"
          component={ManagementStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="dashboard" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Operations"
          component={Operations}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="build" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User Management"
          component={UserManagement}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="people" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reports"
          component={Reports}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="assessment" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



const focusedRouteName = route => {
  const route_name = getFocusedRouteNameFromRoute(route);
  const hiddenScreens = [
    'AddVehicle',
    'EditProfile',
    'Profile',
    'EditProfile',
    'ChangePassword',
    'Messages',
    'ProductDetails',
    'EditProductService',
    'CreateProductService',
    'Notifications'
  ];
  return !(route_name && hiddenScreens.includes(route_name));
};
