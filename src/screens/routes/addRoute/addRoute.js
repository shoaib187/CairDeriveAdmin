import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../../components/common/header/header';
import InputField from '../../../components/common/inputField/inputField';
import { COLORS } from '../../../components/constants/colors/colors';
import { FONT_STYLES, SPACING } from '../../../components/constants/sizes/size';
import { ActionButtons } from '../../../components/static/drivers/actionButtons/actionButtons';
import Dropdown from '../../../components/common/dropdown/dropdown';

const dummyLocations = [
  { label: 'Lahore', value: 'lahore' },
  { label: 'Karachi', value: 'karachi' },
  { label: 'Islamabad', value: 'islamabad' },
  { label: 'Faisalabad', value: 'faisalabad' },
];

const status = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
]

const AddRoute = ({ navigation }) => {
  const [routeData, setRouteData] = useState({
    routeName: '',
    description: '',
    startLocation: '',
    endLocation: '',
    estimatedDistance: '',
    estimatedDuration: '',
    isActive: true,
  });

  const [dropdownVisible, setDropdownVisible] = useState({
    start: false,
    end: false,
  });

  const handleChange = (key, value) => {
    setRouteData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddRoute = () => {
    const { routeName, startLocation, endLocation, estimatedDistance, estimatedDuration } = routeData;

    if (!routeName.trim()) return Alert.alert('Error', 'Please enter a valid route name.');
    if (!startLocation || !endLocation) return Alert.alert('Error', 'Select both start and end locations.');
    if (!estimatedDistance || isNaN(estimatedDistance))
      return Alert.alert('Error', 'Estimated distance must be a valid number.');
    if (!estimatedDuration || isNaN(estimatedDuration))
      return Alert.alert('Error', 'Estimated duration must be a valid number.');

    console.log('✅ Route Added:', routeData);
    Alert.alert('Success', 'Route added successfully!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const handleCancel = () => {
    Alert.alert('Cancel', 'Are you sure you want to cancel?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes', onPress: () => navigation.goBack() },
    ]);
  };




  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header
        showBackButton
        title="Add route"
        showUser={false}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: SPACING.xl }}
        showsVerticalScrollIndicator={false}
      >
        {/* Route Information */}
        <View style={styles.sectionHeader}>
          <Icon name="alt-route" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>
            Route Information
          </Text>
        </View>

        <InputField
          label="Route Name *"
          placeholder="e.g., Lahore to Karachi"
          value={routeData.routeName}
          onChangeText={(val) => handleChange('routeName', val)}
        />

        <InputField
          label="Description"
          placeholder="e.g., Main delivery route"
          value={routeData.description}
          onChangeText={(val) => handleChange('description', val)}
        />

        {/* Locations */}
        <View style={styles.sectionHeader}>
          <Icon name="location-on" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Locations</Text>
        </View>

        {/* Start Location Dropdown */}
        <Dropdown label={"Start Location *"} data={dummyLocations} />
        <Dropdown label={"End Location *"} data={dummyLocations} />
        {/* Route Metrics */}
        <View style={styles.sectionHeader}>
          <Icon name="timeline" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>
            Route Metrics
          </Text>
        </View>

        <InputField
          label="Estimated Distance (km) *"
          placeholder="e.g., 1200"
          value={routeData.estimatedDistance}
          onChangeText={(val) => handleChange('estimatedDistance', val)}
          keyboardType="numeric"
        />

        <InputField
          label="Estimated Duration (min) *"
          placeholder="e.g., 600"
          value={routeData.estimatedDuration}
          onChangeText={(val) => handleChange('estimatedDuration', val)}
          keyboardType="numeric"
        />

        {/* Status */}
        <View style={styles.sectionHeader}>
          <Icon name="check-circle" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Status</Text>
        </View>

        <Dropdown label={"Status *"} data={status} />

        <ActionButtons
          title="Add Route"
          onSubmit={handleAddRoute}
          onCancel={handleCancel}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    marginLeft: SPACING.sm,
    color: '#111',
  },
  label: {
    fontWeight: '600',
    color: '#444',
    marginTop: SPACING.sm,
    marginBottom: 4,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: SPACING.sm,
  },
  dropdownValue: {
    color: '#333',
    fontSize: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  dropdownContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    maxHeight: 250,
  },
  dropdownItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  statusButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  statusButtonActive: {
    backgroundColor: COLORS.primary,
  },
  statusText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  statusTextActive: {
    color: COLORS.white,
  },
});

export default AddRoute;

