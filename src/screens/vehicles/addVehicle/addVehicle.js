import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../../components/constants/colors/colors';
import InputField from '../../../components/common/inputField/inputField';
import { ActionButtons } from '../../../components/static/drivers/actionButtons/actionButtons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/common/header/header';

export default function AddVehicle({ navigation }) {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    weight: '',
    volume: '',
    currentStatus: '',
    lastMaintenanceDate: null,
    vehicleImageUrl:
      'https://ui-avatars.com/api/?name=Vehicle+Image&background=0D8ABC&color=ffff',
  });

  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) onChange('lastMaintenanceDate', selectedDate);
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
      'registrationNumber',
      'vehicleType',
      'make',
      'model',
      'year',
      'weight',
      'volume',
      'currentStatus',
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = 'This field is required';
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit?.(formData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header showBackButton title='Add vehicle' showUser={false} onBackPress={() => navigation.goBack()} />
      <View style={{ flex: 1, paddingHorizontal: 12, backgroundColor: '#fff', }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 10, paddingTop: 14 }}
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Icon name="local-shipping" size={22} color={COLORS.primary} />
            <Text style={styles.title}>Vehicle Information</Text>
          </View>

          {/* Vehicle Information */}
          <InputField
            label="Registration Number *"
            placeholder="e.g., ABC-1234"
            value={formData.registrationNumber}
            onChangeText={t => onChange('registrationNumber', t)}
            error={errors.registrationNumber}
          />

          <InputField
            label="Vehicle Type *"
            placeholder="e.g., Truck"
            value={formData.vehicleType}
            onChangeText={t => onChange('vehicleType', t)}
            error={errors.vehicleType}
          />

          {/* Vehicle Info */}
          <Text style={styles.subTitle}>Vehicle Info</Text>

          <InputField
            label="Make *"
            placeholder="e.g., Ford"
            value={formData.make}
            onChangeText={t => onChange('make', t)}
            error={errors.make}
          />

          <InputField
            label="Model *"
            placeholder="e.g., F-150"
            value={formData.model}
            onChangeText={t => onChange('model', t)}
            error={errors.model}
          />

          <InputField
            label="Year *"
            placeholder="e.g., 2022"
            keyboardType="numeric"
            value={formData.year}
            onChangeText={t => onChange('year', t)}
            error={errors.year}
          />

          {/* Capacity */}
          <Text style={styles.subTitle}>Capacity</Text>

          <InputField
            label="Weight (kg) *"
            placeholder="e.g., 1000"
            keyboardType="numeric"
            value={formData.weight}
            onChangeText={t => onChange('weight', t)}
            error={errors.weight}
          />

          <InputField
            label="Volume (m³) *"
            placeholder="e.g., 10"
            keyboardType="numeric"
            value={formData.volume}
            onChangeText={t => onChange('volume', t)}
            error={errors.volume}
          />

          {/* Additional Info */}
          <Text style={styles.subTitle}>Additional Information</Text>

          <InputField
            label="Current Status *"
            placeholder="Available"
            value={formData.currentStatus}
            onChangeText={t => onChange('currentStatus', t)}
            error={errors.currentStatus}
          />

          {/* Date Picker */}
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>Last Maintenance Date</Text>
            <TouchableOpacity
              style={[
                styles.dateInput,
                errors.lastMaintenanceDate && { borderColor: '#ff6b6b' },
              ]}
              onPress={() => setShowDatePicker(true)}>
              <Text
                style={[
                  styles.dateText,
                  !formData.lastMaintenanceDate && { color: '#999' },
                ]}>
                {formatDate(formData.lastMaintenanceDate)}
              </Text>
              <Icon name="calendar-today" size={20} color="#666" />
            </TouchableOpacity>
            {errors.lastMaintenanceDate && (
              <Text style={styles.errorText}>{errors.lastMaintenanceDate}</Text>
            )}
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={formData.lastMaintenanceDate || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}

          {/* Vehicle Image URL */}
          <InputField
            label="Vehicle Image URL"
            placeholder="https://ui-avatars.com/api/?name=Vehicle+Image&background=0D8ABC&color=ffff"
            value={formData.vehicleImageUrl}
            onChangeText={t => onChange('vehicleImageUrl', t)}
          />
          <ActionButtons />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  buttonContainer: { flexDirection: 'row', marginTop: 20 },
});
