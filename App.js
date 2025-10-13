import React from 'react'
import { AppNavigator } from './src/navigation/appNavigator/appNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}