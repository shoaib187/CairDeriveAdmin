import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors/colors'; // Make sure this exists

export default function EditHeader({ mode = 'edit', onClose }) {
  return (
    <View style={styles.modalHeader}>
      <View style={styles.headerContent}>
        <View style={styles.headerIcon}>
          <Icon
            name={mode === 'edit' ? 'edit' : 'add'}
            size={24}
            color="#fff"
          />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.modalTitle}>
            {mode === 'edit' ? 'Edit Device' : 'Add New Device'}
          </Text>
          <Text style={styles.modalSubtitle}>
            {mode === 'edit'
              ? 'Update device information'
              : 'Add a new hardware device'}
          </Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  closeButton: {
    padding: 8,
  },
});
