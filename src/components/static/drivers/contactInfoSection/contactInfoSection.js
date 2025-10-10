import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../../../../components/common/inputField/inputField';
import { COLORS } from '../../../../components/constants/colors/colors';

export const ContactInfoSection = ({ formData, onChange, errors }) => (
  <View style={styles.section}>
    <View style={styles.header}>
      <Icon name="contact-phone" size={20} color={COLORS.primary} />
      <Text style={styles.title}>Contact Information</Text>
    </View>

    {/* Contact Number */}
    <InputField
      label="Contact Number *"
      placeholder="Enter contact number"
      value={formData.contactNumber}
      onChangeText={t => onChange('contactNumber', t)}
      keyboardType="phone-pad"
      error={errors.contactNumber}
    />

    {/* Emergency Contact Name */}
    <InputField
      label="Emergency Contact Name *"
      placeholder="Enter emergency contact name"
      value={formData.emergencyContactName}
      onChangeText={t => onChange('emergencyContactName', t)}
      error={errors.emergencyContactName}
    />

    {/* Emergency Contact Phone */}
    <InputField
      label="Emergency Contact Phone *"
      placeholder="Enter emergency contact phone"
      value={formData.emergencyContactPhone}
      onChangeText={t => onChange('emergencyContactPhone', t)}
      keyboardType="phone-pad"
      error={errors.emergencyContactPhone}
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
