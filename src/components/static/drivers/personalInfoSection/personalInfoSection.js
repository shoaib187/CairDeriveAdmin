import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../../../../components/common/inputField/inputField';
import { COLORS } from '../../../../components/constants/colors/colors';

export default function PersonalInfoSection({ formData, onChange, errors }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Icon name="person" size={20} color={COLORS.primary} />
        <Text style={styles.sectionTitle}>Personal Information</Text>
      </View>

      <InputField
        label="Driver ID *"
        placeholder="Enter Driver ID"
        value={formData.driverId}
        onChangeText={text => onChange('driverId', text)}
        error={errors.driverId}
      />
      <InputField
        label="Driver Name *"
        placeholder="Enter Driver Name"
        value={formData.driverName}
        onChangeText={text => onChange('driverName', text)}
        error={errors.driverName}
      />
      <InputField
        label="Username *"
        placeholder="Enter Username"
        value={formData.username}
        onChangeText={text => onChange('username', text)}
        error={errors.username}
      />
      <InputField
        label="Email *"
        placeholder="Enter Email"
        value={formData.driverEmail}
        onChangeText={text => onChange('driverEmail', text)}
        error={errors.driverEmail}
      />
      <InputField
        label="Password *"
        placeholder="Enter Password"
        value={formData.password}
        onChangeText={text => onChange('password', text)}
        secureTextEntry
        error={errors.password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1a1a1a',
  },
});
