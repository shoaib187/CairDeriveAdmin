import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../../../../components/common/inputField/inputField';
import { COLORS } from '../../../../components/constants/colors/colors';

export const AddressInfoSection = ({ formData, onChange, errors }) => (
  <View style={styles.section}>
    <View style={styles.header}>
      <Icon name="location-on" size={20} color={COLORS.primary} />
      <Text style={styles.title}>Address Information</Text>
    </View>

    {/* Street Address */}
    <InputField
      label="Street Address *"
      placeholder="Enter street address"
      value={formData.streetAddress}
      onChangeText={t => onChange('streetAddress', t)}
      error={errors.streetAddress}
    />

    {/* City */}
    <InputField
      label="City *"
      placeholder="Enter city"
      value={formData.city}
      onChangeText={t => onChange('city', t)}
      error={errors.city}
    />

    {/* State */}
    <InputField
      label="State *"
      placeholder="Enter state"
      value={formData.state}
      onChangeText={t => onChange('state', t)}
      error={errors.state}
    />

    {/* Zip Code */}
    <InputField
      label="Zip Code *"
      placeholder="Enter zip code"
      value={formData.zipCode}
      onChangeText={t => onChange('zipCode', t)}
      keyboardType="numeric"
      error={errors.zipCode}
    />
  </View>
);

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
});
