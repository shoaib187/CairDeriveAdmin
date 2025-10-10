import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import PersonalInfoSection from '../../../components/static/drivers/personalInfoSection/personalInfoSection';
import { LicenseInfoSection } from '../../../components/static/drivers/licenseInfoSection/licenseInfoSection';
import { ContactInfoSection } from '../../../components/static/drivers/contactInfoSection/contactInfoSection';
import { AddressInfoSection } from '../../../components/static/drivers/addressInfoSection/addressInfoSection';
import { DriverImageSection } from '../../../components/static/drivers/driverImageSection/driverImageSection';
import { ActionButtons } from '../../../components/static/drivers/actionButtons/actionButtons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/common/header/header';


const AddDriver = ({ navigation }) => {
  const [formData, setFormData] = useState({
    driverId: '',
    driverName: '',
    username: '',
    driverEmail: '',
    password: '',
    licenseNumber: '',
    licenseExpiryDate: null,
    contactNumber: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    driverImage: null,
  });

  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'driverId', 'driverName', 'username', 'driverEmail', 'password',
      'licenseNumber', 'licenseExpiryDate', 'contactNumber',
      'emergencyContactName', 'emergencyContactPhone',
      'streetAddress', 'city', 'state', 'zipCode'
    ];
    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Driver added successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
      console.log("formData", formData)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showUser={false} showBackButton onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <PersonalInfoSection formData={formData} onChange={handleInputChange} errors={errors} />
          <LicenseInfoSection
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker}
          />
          <ContactInfoSection formData={formData} onChange={handleInputChange} errors={errors} />
          <AddressInfoSection formData={formData} onChange={handleInputChange} errors={errors} />
          <DriverImageSection formData={formData} onChange={handleInputChange} />
          <ActionButtons onCancel={() => navigation.goBack()} onSubmit={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a' },
  formContainer: { padding: 12 },
});

export default AddDriver;
