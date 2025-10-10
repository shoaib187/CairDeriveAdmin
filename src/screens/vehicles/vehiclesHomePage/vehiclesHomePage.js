import React, { useState } from 'react'
import VehicleCard from '../../../components/static/vehicles/vehiclesCard/vehiclesCard'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../../../components/common/header/header'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/common/button/button';
import Searchbar from '../../../components/common/searchBar/searchbar';
import DynamicTable from '../../../components/common/table/table';
import { COLORS } from '../../../components/constants/colors/colors';
import FilterSearchBar from '../../../components/common/filterSearchBar/filterSearchBar';
import SectionInformation from '../../../components/common/sectionInformation/sectionInformation';
export default function VehiclesHomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [driversData, setDriversData] = useState([
    {
      id: 'DR001',
      description: 'Ali Khan - Experienced long-route driver',
      regNo: 'TRK-1234',
      country: 'Pakistan',
      type: 'Truck',
      mobileDevice: 'Samsung A52',
      lastTrip: '2 hours ago',
      site: 'Lahore Warehouse',
    },
    {
      id: 'DR002',
      description: 'Sara Ahmed - City delivery expert',
      regNo: 'VAN-5678',
      country: 'Pakistan',
      type: 'Van',
      mobileDevice: 'iPhone 12',
      lastTrip: '1 day ago',
      site: 'Karachi Port',
    },
    {
      id: 'DR003',
      description: 'Usman Ali - Fast route specialist',
      regNo: 'TRK-9012',
      country: 'Pakistan',
      type: 'Truck',
      mobileDevice: 'Infinix Note 30',
      lastTrip: '30 minutes ago',
      site: 'Islamabad Depot',
    },
    {
      id: 'DR004',
      description: 'Ayesha Iqbal - High-priority delivery driver',
      regNo: 'VAN-3344',
      country: 'Pakistan',
      type: 'Van',
      mobileDevice: 'Tecno Spark 10',
      lastTrip: '3 hours ago',
      site: 'Multan Hub',
    },
  ]);
  const columns = [
    { key: 'description', label: 'DESCRIPTION', width: 200 },
    { key: 'id', label: 'ID', width: 100 },
    { key: 'regNo', label: 'REG NO', width: 120 },
    { key: 'country', label: 'COUNTRY', width: 120 },
    { key: 'type', label: 'TYPE', width: 100 },
    { key: 'mobileDevice', label: 'MOBILE DEVICE', width: 150 },
    { key: 'lastTrip', label: 'LAST TRIP', width: 130 },
    { key: 'site', label: 'SITE', width: 150 },
  ];

  const filteredData = driversData.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.regNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.site.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (item) => {
    Alert.alert(
      'Delete Driver',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setDriversData(driversData.filter(driver => driver.id !== item.id));
          },
        },
      ]
    );
  };
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header title='Assetss' showBackButton showUser={false} onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionInformation title='Assets overview' subtitle='Assets you have' />
        <VehicleCard />
        <FilterSearchBar />
        <DynamicTable
          data={filteredData}
          columns={columns}
          onDelete={handleDelete}
          actionButtons={[
            { label: 'Edit', icon: 'edit', color: '#FF9500', action: 'edit' },
            { label: 'Delete', icon: 'trash', color: '#FF3B30', action: 'delete' },
            { label: 'View', icon: 'eye', color: COLORS.primary, action: 'view' }
          ]}
          style={styles.table}
          maxHeight={400}
        />
      </ScrollView>
    </SafeAreaProvider>
  )
}




const styles = StyleSheet.create({
  wrapperContainer: {
    padding: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  table: {
    marginBottom: 20,
  },
});
