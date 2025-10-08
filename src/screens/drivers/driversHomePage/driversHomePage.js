import React from 'react'
import DriverStatsCard from '../../../components/static/drivers/driverStatsCard/driverStatsCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/common/header/header'
export default function DriversHomePage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header showBackButton={true} title='Drivers' onBackPress={() => navigation.goBack()} />
      <DriverStatsCard />
    </SafeAreaView>
  )
}