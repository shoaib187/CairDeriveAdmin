import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../components/constants/colors/colors';

// Screens / Stacks
import ManagementStack from '../managementStack/managementStack';
import Operations from '../../screens/operations/operations';
import UserManagement from '../../screens/userManagement/userManagement';
import Reports from '../../screens/reports/reports';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          // fontSize: 12,
          fontWeight: '600',
          // marginBottom: 4,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 68,
          paddingBottom: 8,
          paddingTop: 6,
          display: shouldShowTabBar(route) ? 'flex' : 'none',
        },
      })}
    >
      <Tab.Screen
        name="Management"
        component={ManagementStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Operations"
        component={Operations}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UserManagement}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account-group' : 'account-group-outline'}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'chart-bar' : 'chart-bar-stacked'}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// 🔒 Hide tab bar on specific screens
const shouldShowTabBar = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hiddenScreens = [
    'AddVehicle',
    'AddRoute',
    'AddCargo',
    'AddLocation',
    'AddDriver',
    'AddDevice',
    'HardwareManagement',
    'Drivers',
    'VehiclesHomePage',
    'CargoHomePage',
    'LocationHomePage',
    'CreateProductService',
    'RoutesHomePage',
  ];
  return !(routeName && hiddenScreens.includes(routeName));
};
