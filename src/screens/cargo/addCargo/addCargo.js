import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../../../components/common/inputField/inputField';
import { ActionButtons } from '../../../components/static/drivers/actionButtons/actionButtons';
import Header from '../../../components/common/header/header';
import { COLORS } from '../../../components/constants/colors/colors';
import Dropdown from '../../../components/common/dropdown/dropdown';

const cargoTypes = [
  { label: 'Perishable', value: 'Perishable' },
  { label: 'Bulk', value: 'Bulk' },
  { label: 'Hazardous', value: 'Hazardous' },
  { label: 'Fragile', value: 'Fragile' },
  { label: 'General', value: 'General' },
];
const priorityLevels = [
  { label: 'High', value: 'High' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Low', value: 'Low' },
];
const statusOptions = [
  { label: 'Pending', value: 'Pending' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Cancelled', value: 'Cancelled' },
];


export default function AddCargo({ navigation }) {
  const [formData, setFormData] = useState({
    cargoName: '',
    cargoType: '',
    description: '',
    weight: '',
    volume: '',
    length: '',
    width: '',
    height: '',
    priorityLevel: '',
    cargoStatus: '',
    estimatedDeliveryDate: null,
    deliveryInstructions: '',
  });

  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) onChange('estimatedDeliveryDate', selectedDate);
  };

  const formatDate = date => {
    if (!date) return 'dd/mm/yyyy';
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  };

  const validateAndSubmit = () => {
    const newErrors = {};
    const requiredFields = [
      'cargoName',
      'cargoType',
      'weight',
      'length',
      'width',
      'height',
      'priorityLevel',
      'cargoStatus',
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = 'This field is required';
    });

    setErrors(newErrors);

    console.log(formData)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        showBackButton
        title="Add Cargo"
        showUser={false}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Cargo Information */}
        <View style={styles.header}>
          <Icon name="inventory" size={22} color={COLORS.primary} />
          <Text style={styles.title}>Cargo Information</Text>
        </View>

        <InputField
          label="Cargo Name *"
          placeholder="e.g., Medical Supplies"
          value={formData.cargoName}
          onChangeText={t => onChange('cargoName', t)}
          error={errors.cargoName}
        />

        <Dropdown
          label="Cargo Type *"
          placeholder="Select Cargo Type"
          data={cargoTypes}
          value={selected}
          onSelect={val => setSelected(val)}
        />

        <InputField
          label="Description"
          placeholder="e.g., Fragile medical equipment requiring careful handling"
          value={formData.description}
          onChangeText={t => onChange('description', t)}
        />

        {/* Capacity and Dimensions */}
        <Text style={styles.subTitle}>Capacity and Dimensions</Text>

        <InputField
          label="Weight (kg) *"
          placeholder="e.g., 500"
          keyboardType="numeric"
          value={formData.weight}
          onChangeText={t => onChange('weight', t)}
          error={errors.weight}
        />

        <InputField
          label="Volume (m³)"
          placeholder="e.g., 2.5"
          keyboardType="numeric"
          value={formData.volume}
          onChangeText={t => onChange('volume', t)}
        />

        <InputField
          label="Length (cm) *"
          placeholder="e.g., 100"
          keyboardType="numeric"
          value={formData.length}
          onChangeText={t => onChange('length', t)}
          error={errors.length}
        />

        <InputField
          label="Width (cm) *"
          placeholder="e.g., 50"
          keyboardType="numeric"
          value={formData.width}
          onChangeText={t => onChange('width', t)}
          error={errors.width}
        />

        <InputField
          label="Height (cm) *"
          placeholder="e.g., 50"
          keyboardType="numeric"
          value={formData.height}
          onChangeText={t => onChange('height', t)}
          error={errors.height}
        />

        {/* Status and Priority */}
        <Text style={styles.subTitle}>Status and Priority</Text>
        <Dropdown
          label="Priority Level *"
          placeholder="Medium"
          data={priorityLevels}
          value={formData.priorityLevel}
        />
        <Dropdown
          label="Cargo Status *"
          placeholder="Pending"
          data={statusOptions}
          value={formData.priorityLevel}
        />
        {/* Estimated Delivery Date */}
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.label}>Estimated Delivery Date</Text>
          <TouchableOpacity
            style={[
              styles.dateInput,
              errors.estimatedDeliveryDate && { borderColor: '#ff6b6b' },
            ]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text
              style={[
                styles.dateText,
                !formData.estimatedDeliveryDate && { color: '#999' },
              ]}
            >
              {formatDate(formData.estimatedDeliveryDate)}
            </Text>
            <Icon name="calendar-today" size={20} color="#666" />
          </TouchableOpacity>
          {errors.estimatedDeliveryDate && (
            <Text style={styles.errorText}>{errors.estimatedDeliveryDate}</Text>
          )}
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={formData.estimatedDeliveryDate || new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        )}

        {/* Delivery Instructions */}
        <InputField
          label="Delivery Instructions"
          placeholder="e.g., Handle with care, deliver to back entrance"
          value={formData.deliveryInstructions}
          onChangeText={t => onChange('deliveryInstructions', t)}
        />

        <ActionButtons onCancel={() => navigation.goBack()} onSubmit={validateAndSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', padding: 12 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a', marginLeft: 8 },
  subTitle: { fontSize: 15, fontWeight: '600', color: COLORS.primary, marginVertical: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8 },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fafbfc',
  },
  dateText: { fontSize: 16, color: '#1a1a1a' },
  errorText: { color: '#ff6b6b', fontSize: 12, marginTop: 4, marginLeft: 4 },
});
