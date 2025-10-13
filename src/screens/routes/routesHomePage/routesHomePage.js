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
import DeliveryRoutesCard from '../../../components/static/routes/deliveryRoutesCard/deliveryRoutesCard'

export default function RoutesHomePage({ navigation }) {

  const [deliveryData, setDeliveryData] = useState([
    {
      id: 1,
      title: 'Sialkot to Karachi',
      subtitle: 'Pak Army Ordinance Delivery Route',
      route: 'Dubai Port to Jaddah Dry Port',
      distance: '500.0 km',
      time: '1 min',
      type: 'domestic'
    },
    {
      id: 2,
      title: 'Jaddah to Dubai',
      subtitle: 'Army Ordinance Delivery Route',
      route: 'Dubai Port to Jaddah Dry Port',
      distance: '1000.0 km',
      time: '90000 min',
      type: 'international'
    }])
  // ✅ Searchbar state
  const [searchQuery, setSearchQuery] = useState('')

  // ✅ Filter data
  const filteredLocations = useMemo(() => {
    return deliveryData.filter(
      loc =>
        loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.route.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, deliveryData])


  const renderLocation = ({ item }) => {
    return (
      <DeliveryRoutesCard onViewDetails={() => navigation.navigate("LocationDetails")} key={item.id} item={item} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onBackPress={() => navigation.goBack()}
        title="Routes"
        showUser={false}
        showBackButton
      />

      <SectionInformation title='Routes Overview' />
      <FilterSearchBar onAddPress={() => navigation.navigate("AddRoute")} />
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
