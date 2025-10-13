import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Text, Alert } from 'react-native';
import DriverStatsCard from '../../../components/static/drivers/driverStatsCard/driverStatsCard';
import Header from '../../../components/common/header/header';
import Searchbar from '../../../components/common/searchBar/searchbar';
import Button from '../../../components/common/button/button';
import DynamicTable from '../../../components/common/table/table';
import { COLORS } from '../../../components/constants/colors/colors';
import { getStatusBackground, getStatusColor } from '../../../utils/services/services';
import FilterSearchBar from '../../../components/common/filterSearchBar/filterSearchBar';
import SectionInformation from '../../../components/common/sectionInformation/sectionInformation';

export default function DriversHomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [driversData, setDriversData] = useState([
    {
      id: 'DR001',
      name: 'Ali Khan',
      location: 'Lahore',
      country: 'Pakistan',
      contact: '+92 300 1234567',
      status: 'Active',
      lastTrip: '2 hours ago',
      vehicle: 'Truck 05',
    },
    {
      id: 'DR002',
      name: 'Sara Ahmed',
      location: 'Karachi',
      country: 'Pakistan',
      contact: '+92 301 7654321',
      status: 'Inactive',
      lastTrip: '1 day ago',
      vehicle: 'Van 12',
    },
    {
      id: 'DR003',
      name: 'Usman Ali',
      location: 'Islamabad',
      country: 'Pakistan',
      contact: '+92 302 9876543',
      status: 'On Route',
      lastTrip: '30 minutes ago',
      vehicle: 'Truck 09',
    },
    {
      id: 'DR004',
      name: 'Ayesha Iqbal',
      location: 'Multan',
      country: 'Pakistan',
      contact: '+92 303 5647382',
      status: 'Active',
      lastTrip: '3 hours ago',
      vehicle: 'Van 07',
    },
  ]);

  const columns = [
    { key: 'name', label: 'NAME', width: 150 },
    { key: 'id', label: 'ID', width: 100 },
    { key: 'location', label: 'LOCATION', width: 120 },
    { key: 'country', label: 'COUNTRY', width: 120 },
    { key: 'contact', label: 'CONTACT', width: 140 },
    {
      key: 'status',
      label: 'STATUS',
      width: 100,
      render: (item) => (
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 12,
          backgroundColor: getStatusBackground(item.status),
        }}>
          <View style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            marginRight: 6,
            backgroundColor: getStatusColor(item.status),
          }} />
          <Text style={{ color: getStatusColor(item.status), fontWeight: '500', fontSize: 12 }}>
            {item.status}
          </Text>
        </View>
      )
    },
    { key: 'lastTrip', label: 'LAST TRIP', width: 120 },
    { key: 'vehicle', label: 'VEHICLE', width: 120 },
  ];

  const filteredData = driversData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
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
    <SafeAreaView style={{ flex: 1 }}>
      <Header showBackButton={true} title='Drivers' onBackPress={() => navigation.goBack()} />
      <SectionInformation />
      <DriverStatsCard />
      <FilterSearchBar onAddPress={() => navigation.navigate("AddDriver")} />
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
    </SafeAreaView>
  );
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
