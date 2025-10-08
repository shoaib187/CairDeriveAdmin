import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DriverStatItem({ item, isLast }) {
  return (
    <View style={[styles.statItem, isLast && styles.lastStatItem]}>
      <TouchableOpacity style={styles.statContent} activeOpacity={0.7}>
        {/* Icon with colored background */}
        <View style={[styles.statIconContainer, { backgroundColor: item.color || '#007AFF' }]}>
          <Icon name={item.icon} size={28} color="#fff" />
        </View>

        {/* Stats below the icon */}
        <View style={styles.statTextContainer}>
          <Text style={styles.statValue}>{item.value}</Text>
          <Text style={styles.statLabel}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  statItem: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  statContent: {
    alignItems: 'center',
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statTextContainer: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 2,
  },
});
