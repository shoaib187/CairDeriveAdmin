import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,

  Alert,
} from 'react-native';
import DynamicTable from '../../../components/common/table/table';
import Searchbar from '../../../components/common/searchBar/searchbar';
import { getBatteryColor, getStatusBackground, getStatusColor } from '../../../utils/services/services';
import IconButton from '../../../components/common/iconButton/iconButton';
import Header from '../../../components/common/header/header';
import { COLORS } from '../../../components/constants/colors/colors';

const HardwareManagement = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleEdit = (item) => {
    navigation.navigate("AddDevice", { item })
  };
  const onViewDetails = (item) => {
    navigation.navigate("ViewDeviceDetails", { item })
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

  // Define columns - you can easily add/remove columns here
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

  // Choose which columns to display
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
    <View style={styles.container}>
      <Header
        title="Hard management"
        // userInitials="MS"
        showBackButton
        showUser={false}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentInner}>
          <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <View style={styles.tableHeader}>
            <Text style={styles.sectionTitle}>
              Hardware Devices ({filteredData.length})
            </Text>
            <IconButton onPress={() => navigation.navigate("AddDevice")} />a
          </View>

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
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  headerButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  contentInner: {
    padding: 12,
  },

  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  viewToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  viewToggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
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

export default HardwareManagement;