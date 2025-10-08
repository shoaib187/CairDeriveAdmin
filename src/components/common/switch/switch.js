import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors/colors';

export default function SwitchField({ label, value, onToggle, icon, description }) {
  return (
    <View style={styles.switchContainer}>
      <View style={styles.switchLabelRow}>
        <View style={styles.switchLabelContainer}>
          <Icon name={icon} size={18} color="#007AFF" style={styles.inputIcon} />
          <Text style={styles.switchLabel}>{label}</Text>
        </View>
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: '#E5E5EA', true: '#007AFF' }}
          thumbColor={value ? '#fff' : '#f4f3f4'}
        />
      </View>
      {description && (
        <Text style={styles.switchDescription}>{description}</Text>
      )}
      <View style={[
        styles.statusIndicator,
        { backgroundColor: value ? '#34C759' : '#FF3B30' }
      ]}>
        <Text style={styles.statusIndicatorText}>
          {value ? 'ACTIVE' : 'INACTIVE'}
        </Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  switchContainer: {
    backgroundColor: '#f8f9fa',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  switchLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  switchLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 8,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  switchDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  statusIndicator: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 36,
  },
  statusIndicatorText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
