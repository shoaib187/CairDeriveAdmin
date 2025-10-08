import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../inputField/inputField';
import Dropdown from '../dropdown/dropdown';
import SwitchField from '../switch/switch';
import { COLORS } from '../../constants/colors/colors';
import EditHeader from '../editHeader/editHeader';
import Footer from '../footer/footer';

const EditDeviceModal = ({
  visible,
  onClose,
  device,
  onSave,
  mode = 'edit', // 'edit' or 'add'
}) => {
  const [formData, setFormData] = useState({
    deviceId: '',
    vehicle: '',
    channelNumber: '',
    groupName: '',
    deviceType: '',
    deviceName: '',
    isOnline: false,
    isActive: false,
  });

  const [errors, setErrors] = useState({});

  const deviceTypes = [
    'GPS Tracker',
    'RFID Scanner',
    'Temperature Sensor',
    'Dash Cam',
    'Barcode Printer',
    'Weight Sensor',
    'Fuel Sensor',
    'Door Sensor',
  ];

  const groupNames = [
    'Fleet Vehicles',
    'Warehouse Equipment',
    'Delivery Trucks',
    'Office Equipment',
    'Cold Storage',
    'Heavy Machinery',
  ];

  // Initialize or reset form
  useEffect(() => {
    if (device) {
      setFormData({
        deviceId: device.id || '',
        vehicle: device.vehicle || '',
        channelNumber: device.channelNumber?.toString() || '',
        groupName: device.groupName || '',
        deviceType: device.hardwareType || '',
        deviceName: device.deviceName || device.regNo || '',
        isOnline: device.status === 'Active',
        isActive: device.status === 'Active',
      });
    } else {
      setFormData({
        deviceId: '',
        vehicle: '',
        channelNumber: '',
        groupName: '',
        deviceType: '',
        deviceName: '',
        isOnline: false,
        isActive: false,
      });
    }
    setErrors({});
  }, [device, visible]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.deviceId.trim()) newErrors.deviceId = 'Device ID is required';
    if (!formData.deviceName.trim()) newErrors.deviceName = 'Device name is required';
    if (!formData.deviceType) newErrors.deviceType = 'Device type is required';
    if (!formData.groupName) newErrors.groupName = 'Group name is required';
    if (!formData.channelNumber) newErrors.channelNumber = 'Channel number is required';
    else if (isNaN(formData.channelNumber) || parseInt(formData.channelNumber) < 1)
      newErrors.channelNumber = 'Enter a valid channel number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fix the errors before saving.');
      return;
    }

    const deviceData = {
      ...formData,
      channelNumber: parseInt(formData.channelNumber),
      status: formData.isActive ? 'Active' : 'Inactive',
    };

    onSave(deviceData);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <EditHeader mode={mode} onClose={onClose} />

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Device Information */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Icon name="device-hub" size={20} color="#007AFF" />
                <Text style={styles.sectionTitle}>Device Information</Text>
              </View>

              <InputField
                label="Device ID"
                value={formData.deviceId}
                onChange={v => handleInputChange('deviceId', v)}
                placeholder="Enter device ID"
                error={errors.deviceId}
                icon="fingerprint"
              />

              <Dropdown
                label="Device Name"
                value={formData.deviceName}
                data={[
                  { label: 'Shoaib', value: 'shoaib' },
                  { label: 'BMW', value: 'bmw' },
                ]}
                onSelect={v => handleInputChange('deviceName', v)}
                placeholder="Enter device name"
                error={errors.deviceName}
                icon="badge"
              />

              <InputField
                label="Vehicle"
                value={formData.vehicle}
                onChange={v => handleInputChange('vehicle', v)}
                placeholder="Enter vehicle number"
                error={errors.vehicle}
                icon="directions-car"
              />

              <InputField
                label="Channel Number"
                value={formData.channelNumber}
                onChange={v => handleInputChange('channelNumber', v)}
                placeholder="Enter channel number"
                error={errors.channelNumber}
                icon="tune"
                keyboardType="numeric"
              />

              <InputField
                label="Group Name"
                placeholder={"Group name"}
                value={formData.groupName}
                onSelect={v => handleInputChange('groupName', v)}
                options={groupNames}
                error={errors.groupName}
                icon="group-work"
              />

              <InputField
                label="Device Type"
                placeholder={"Device type"}
                value={formData.deviceType}
                onSelect={v => handleInputChange('deviceType', v)}
                options={deviceTypes}
                error={errors.deviceType}
                icon="devices"
              />
            </View>

            {/* Status Information */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Icon name="info" size={20} color="#007AFF" />
                <Text style={styles.sectionTitle}>Status Information</Text>
              </View>

              <SwitchField
                label="Online Status"
                value={formData.isOnline}
                onToggle={v => handleInputChange('isOnline', v)}
                icon="wifi"
                description="Device is currently connected to the network"
              />

              <SwitchField
                label="Active Status"
                value={formData.isActive}
                onToggle={v => handleInputChange('isActive', v)}
                icon="power-settings-new"
                description="Device is active and operational"
              />
            </View>
          </ScrollView>

          {/* Footer */}
          <Footer onClose={onClose} onSave={onSave} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' },
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingHorizontal: 12 },
  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a', marginLeft: 8 },
  footer: { flexDirection: 'row', padding: 20, borderTopWidth: 1, borderTopColor: '#E5E5EA', gap: 12 },
  cancelBtn: { flex: 1, backgroundColor: '#f8f9fa', padding: 16, borderRadius: 12, alignItems: 'center', borderWidth: 2, borderColor: '#E5E5EA' },
  cancelText: { fontSize: 16, fontWeight: '600', color: '#666' },
  saveBtn: { flex: 2, borderRadius: 12, overflow: 'hidden' },
  saveBtnContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 16, gap: 8, backgroundColor: '#007AFF' },
  saveText: { fontSize: 16, fontWeight: '600', color: '#fff' },
});

export default EditDeviceModal;
