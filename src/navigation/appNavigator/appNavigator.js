import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Operations from '../../screens/operations/operations';
import UserManagement from '../../screens/userManagement/userManagement';
import Reports from '../../screens/reports/reports';
import ManagementStack from '../managementStack/managementStack';
import { COLORS } from '../../components/constants/colors/colors';



const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor={COLORS.primary} showHideTransition={true} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: '#fff',
          headerShown: false,
        }}
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  header: {
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
