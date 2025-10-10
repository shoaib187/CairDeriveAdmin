import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../../../components/common/header/header'
import LocationStats from '../../../components/static/location/locationStats/locationStats'
import { SPACING } from '../../../components/constants/sizes/size'
import { getBatteryColor, getStatusBackground, getStatusColor } from '../../../utils/services/services'
import Button from '../../../components/common/button/button'
import DynamicTable from '../../../components/common/table/table'
import { COLORS } from '../../../components/constants/colors/colors'
import Searchbar from '../../../components/common/searchBar/searchbar'
import FilterSearchBar from '../../../components/common/filterSearchBar/filterSearchBar'

export default function LocationDetails({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (item) => {
    navigation.navigate("AddDevice", { item });
  };

  const onViewDetails = (item) => {
    navigation.navigate("ViewDeviceDetails", { item });
  };

  const [hardwareData, setHardwareData] = useState([
    {
      id: 'HW001',
      regNo: 'REG2024001',
      groupName: 'Fleet Vehicles',
      status: 'Active',
      hardwareType: 'GPS Tracker',
      lastSeen: '2 hours ago',
      location: 'Warehouse A',
      firmware: 'v2.1.4',
      battery: '85%',
    },
    {
      id: 'HW002',
      regNo: 'REG2024002',
      groupName: 'Warehouse',
      status: 'Inactive',
      hardwareType: 'RFID Scanner',
      lastSeen: '5 days ago',
      location: 'Storage Room',
      firmware: 'v1.0.2',
      battery: '0%',
    },
    {
      id: 'HW003',
      regNo: 'REG2024003',
      groupName: 'Delivery Trucks',
      status: 'Active',
      hardwareType: 'Temperature Sensor',
      lastSeen: '30 minutes ago',
      location: 'Truck 05',
      firmware: 'v3.2.1',
      battery: '92%',
    },
    {
      id: 'HW004',
      regNo: 'REG2024004',
      groupName: 'Office Equipment',
      status: 'Maintenance',
      hardwareType: 'Barcode Printer',
      lastSeen: '1 week ago',
      location: 'Office Floor',
      firmware: 'v1.5.0',
      battery: '45%',
    },
  ]);

  const basicColumns = [
    { key: 'regNo', label: 'Reg No', width: 120 },
    { key: 'id', label: 'ID', width: 100 },
    { key: 'groupName', label: 'Group Name', width: 150 },
    {
      key: 'status',
      label: 'Status',
      width: 120,
      render: (item) => (
        <View style={[
          styles.statusBadge,
          { backgroundColor: getStatusBackground(item.status) }
        ]}>
          <View style={[
            styles.statusDot,
            { backgroundColor: getStatusColor(item.status) }
          ]} />
          <Text style={[
            styles.statusText,
            { color: getStatusColor(item.status) }
          ]}>
            {item.status}
          </Text>
        </View>
      )
    },
    { key: 'hardwareType', label: 'Hardware Type', width: 150 },
  ];

  const extendedColumns = [
    ...basicColumns,
    { key: 'location', label: 'Location', width: 130 },
    { key: 'firmware', label: 'Firmware', width: 100 },
    {
      key: 'battery',
      label: 'Battery',
      width: 80,
      render: (item) => (
        <Text style={[
          styles.batteryText,
          { color: getBatteryColor(item.battery) }
        ]}>
          {item.battery}
        </Text>
      )
    },
  ];

  const [showExtended, setShowExtended] = useState(false);
  const columns = showExtended ? extendedColumns : basicColumns;

  const filteredData = hardwareData.filter(item =>
    item.regNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.groupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.hardwareType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (item) => {
    Alert.alert(
      'Delete Device',
      `Are you sure you want to delete ${item.regNo}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setHardwareData(hardwareData.filter(device => device.id !== item.id));
          },
        },
      ]
    );
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header onBackPress={() => navigation.goBack()} title='Location details' showBackButton showUser={false} />
      <View style={{ padding: SPACING.md }}>
        <LocationStats />
      </View>
      <FilterSearchBar title='Add location' />
      <DynamicTable
        data={filteredData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={onViewDetails}
        actionButtons={[
          { label: 'Edit', icon: 'edit', color: '#FF9500', action: 'edit' },
          { label: 'Delete', icon: 'trash', color: '#FF3B30', action: 'delete' },
          { label: 'View', icon: 'eye', color: COLORS.primary, action: 'view' }
        ]}
        style={styles.table}
        maxHeight={400}
      />
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
  contentInner: {
    padding: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    width: '100%'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  table: {
    marginBottom: 20,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'center',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  batteryText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
