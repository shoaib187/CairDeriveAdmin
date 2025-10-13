// import { TabNavigator } from "../tabNavigator/tabNavigator"
// const AppNavigator = () => {
//   return <TabNavigator />
// }

// export { AppNavigator }

// src/navigation/RootNavigator.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { checkTokenExpiry } from '../../redux/slices/authSlice/authSlice';
import AuthStack from '../authStack/authStack';
import { TabNavigator } from '../tabNavigator/tabNavigator';
import { StatusBar } from 'react-native';
import { COLORS } from '../../components/constants/colors/colors';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { token, expiry } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkTokenExpiry());
  }, [dispatch]);

  // Watch for token expiry and auto logout if expired
  useEffect(() => {
    if (expiry) {
      const remainingTime = expiry - Date.now();
      const timer = setTimeout(() => dispatch(checkTokenExpiry()), remainingTime);
      return () => clearTimeout(timer);
    }
  }, [expiry]);

  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor={COLORS.primary} showHideTransition={true} />
      {!token ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export { AppNavigator };
