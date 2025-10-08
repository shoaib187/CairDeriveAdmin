import React from 'react'
import { AppNavigator } from './src/navigation/appNavigator/appNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'


export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaProvider>
  )
}