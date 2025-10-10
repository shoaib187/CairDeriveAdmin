import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../../components/constants/colors/colors';
import Button from '../../../../components/common/button/button';
import { imagePicker } from '../../../../utils/services/imagePicker/imagePicker';

export const DriverImageSection = ({ formData, onChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);


  const handleCaptureImage = async () => {
    const image = await imagePicker();
    if (image) setSelectedImage(image);
    console.log("selectedImage", selectedImage)
  };

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Icon name="camera-alt" size={20} color={COLORS.primary} />
        <Text style={styles.title}>Driver Image</Text>
      </View>

      <View style={styles.imageSection}>
        <View style={styles.imageContainer}>
          {formData.driverImage ? (
            <Image source={{ uri: formData.driverImage }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Icon name="person" size={40} color="#ccc" />
              <Text style={{ marginTop: 8, color: '#999', fontSize: 12 }}>No Image</Text>
            </View>
          )}
        </View>
        <Button title="Capture Image" onPress={handleCaptureImage} variant="primary" icon="photo-camera" fullWidth style={{ width: '90%', borderRadius: 8 }} />
      </View>
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
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a', marginLeft: 8 },
  imageSection: { alignItems: 'center' },
  imageContainer: { width: 120, height: 120, borderRadius: 60, overflow: 'hidden', marginBottom: 16, borderWidth: 1, borderColor: COLORS.borderColor, backgroundColor: '#f8f9fa' },
  image: { width: '100%', height: '100%', borderRadius: 60 },
  placeholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
