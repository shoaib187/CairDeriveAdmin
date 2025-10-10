import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../../../../components/common/inputField/inputField';
import { COLORS } from '../../../../components/constants/colors/colors';

export const LicenseInfoSection = ({ formData, onChange, errors, showDatePicker, setShowDatePicker }) => {
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) onChange('licenseExpiryDate', selectedDate);
  };

  const formatDate = date => {
    if (!date) return 'dd/mm/yyyy';
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Icon name="badge" size={20} color={COLORS.primary} />
        <Text style={styles.title}>License Information</Text>
      </View>

      {/* License Number */}
      <InputField
        label="License Number *"
        placeholder="Enter License Number"
        value={formData.licenseNumber}
        onChangeText={t => onChange('licenseNumber', t)}
        error={errors.licenseNumber}
      />

      {/* License Expiry Date */}
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.label}>License Expiry Date *</Text>
        <TouchableOpacity
          style={[styles.dateInput, errors.licenseExpiryDate && { borderColor: '#ff6b6b' }]}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={[styles.dateText, !formData.licenseExpiryDate && { color: '#999' }]}>
            {formatDate(formData.licenseExpiryDate)}
          </Text>
          <Icon name="calendar-today" size={20} color="#666" />
        </TouchableOpacity>
        {errors.licenseExpiryDate && <Text style={styles.errorText}>{errors.licenseExpiryDate}</Text>}
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={formData.licenseExpiryDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
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
  dateText: {
    fontSize: 16,
    color: '#1a1a1a',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
