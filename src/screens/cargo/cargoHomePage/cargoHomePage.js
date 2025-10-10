import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { getBatteryColor, getStatusBackground, getStatusColor } from '../../../utils/services/services';
import Header from '../../../components/common/header/header';
import Searchbar from '../../../components/common/searchBar/searchbar';
import Button from '../../../components/common/button/button';
import DynamicTable from '../../../components/common/table/table';
import { COLORS } from '../../../components/constants/colors/colors';



const CargoHome = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (item) => {
    navigation.navigate("AddCargo", { item });
  };

  const onViewDetails = (item) => {
    navigation.navigate("ViewDeviceDetails", { item });
  };

  const [cargoData, setCargoData] = useState([
    {
      id: 'CG001',
      cargoName: 'Electronics',
      type: 'Fragile',
      status: 'In Transit',
      priority: 'High',
      weight: '1200',
      dimensions: '120x80x60',
    },
    {
      id: 'CG002',
      cargoName: 'Furniture',
      type: 'Non-Fragile',
      status: 'Pending',
      priority: 'Medium',
      weight: '2500',
      dimensions: '200x100x150',
    },
    {
      id: 'CG003',
      cargoName: 'Pharmaceuticals',
      type: 'Fragile',
      status: 'Delivered',
      priority: 'High',
      weight: '500',
      dimensions: '50x40x60',
    },
    {
      id: 'CG004',
      cargoName: 'Clothing',
      type: 'Non-Fragile',
      status: 'In Transit',
      priority: 'Low',
      weight: '300',
      dimensions: '80x50x40',
    },
  ]);

  const columns = [
    { key: 'cargoName', label: 'Cargo Name', width: 150 },
    { key: 'type', label: 'Type', width: 120 },
    {
      key: 'status',
      label: 'Status',
      width: 120,
      render: (item) => (
        <View style={[
          styles.statusBadge,
          { backgroundColor: getStatusBackground(item.status) }
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      )
    },
    { key: 'priority', label: 'Priority', width: 100 },
    { key: 'weight', label: 'Weight (kg)', width: 100 },
    { key: 'dimensions', label: 'Dimensions (cm)', width: 120 },
  ];

  const filteredData = cargoData.filter(item =>
    item.cargoName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.priority.toLowerCase().includes(searchQuery.toLowerCase())
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
            // setHardwareData(hardwareData.filter(device => device.id !== item.id));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Cargo Management"
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
            <Button
              title="Add Cargo"
              onPress={() => navigation.navigate("AddCargo")}
              variant="primary"
              size='small'
              style={{ elevation: 0, borderRadius: 6 }}
              icon={"add"}
            />
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
  content: {
    flex: 1,
  },
  contentInner: {
    padding: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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

export default CargoHome;
