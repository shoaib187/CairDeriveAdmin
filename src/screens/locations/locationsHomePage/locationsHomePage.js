import React, { useState, useMemo } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native'
import Header from '../../../components/common/header/header'
import Button from '../../../components/common/button/button'
import Searchbar from '../../../components/common/searchBar/searchbar'
import LocationCard from '../../../components/static/location/locationCard/locationCard'
import { COLORS } from '../../../components/constants/colors/colors'
import NotFound from '../../../components/static/location/notFound/notFound'
import SectionInformation from '../../../components/common/sectionInformation/sectionInformation'
import FilterSearchBar from '../../../components/common/filterSearchBar/filterSearchBar'

export default function LocationsHomePage({ navigation }) {
  // ✅ Sample dummy data
  const [locations, setLocations] = useState([
    {
      id: 'LOC001',
      name: 'Riyadh Warehouse',
      description: 'Main storage facility',
      country: 'Saudi Arabia',
      city: 'Riyadh',
      region: 'Riyadh Region',
      postalCode: '12345',
      longitude: '46.6753',
      latitude: '24.7136',
      timezone: 'Asia/Riyadh',
      image: 'https://ui-avatars.com/api/?name=Riyadh+Warehouse&background=0D8ABC&color=ffff',
    },
    {
      id: 'LOC002',
      name: 'Jeddah Distribution Center',
      description: 'Secondary distribution point',
      country: 'Saudi Arabia',
      city: 'Jeddah',
      region: 'Makkah Region',
      postalCode: '21411',
      longitude: '39.1979',
      latitude: '21.4858',
      timezone: 'Asia/Riyadh',
      image: 'https://ui-avatars.com/api/?name=Jeddah+Center&background=0D8ABC&color=ffff',
    },
  ])

  // ✅ Searchbar state
  const [searchQuery, setSearchQuery] = useState('')

  // ✅ Filter data
  const filteredLocations = useMemo(() => {
    return locations.filter(
      loc =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, locations])


  const renderLocation = ({ item }) => (
    <LocationCard onViewDetails={() => navigation.navigate("LocationDetails")} key={item.id} location={item} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onBackPress={() => navigation.goBack()}
        title="Location Management"
        showUser={false}
        showBackButton
      />

      <SectionInformation title='Location Overview' />
      <FilterSearchBar />
      {/* locations data */}
      {filteredLocations?.length > 0 ? (
        <FlatList
          data={filteredLocations}
          keyExtractor={(item) => item.id}
          renderItem={renderLocation}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <NotFound navigation={navigation} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  addButton: {
    elevation: 0,
    borderRadius: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: '500',
  },
})
