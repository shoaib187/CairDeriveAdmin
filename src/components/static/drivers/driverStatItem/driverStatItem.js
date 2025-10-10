import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function DriverStatItem({ item, isLast }) {
  return (
    <View style={[styles.statItem, isLast && styles.lastStatItem]}>
      <TouchableOpacity style={styles.statContent} activeOpacity={0.8}>
        {/* Gradient Background Icon */}
        <View style={styles.statIconContainer}>
          <Icon name={item.icon} size={26} color="#fff" />
        </View>

        {/* Stats below the icon */}
        <View style={styles.statTextContainer}>
          <Text style={styles.statValue}>{item.value}</Text>
          <Text style={styles.statLabel}>{item.label}</Text>
        </View>

        {/* Decorative dot */}
        <View style={[styles.decorativeDot, { backgroundColor: item.color }]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  statItem: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'relative',
  },
  statContent: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 4,
    minWidth: 100,
  },
  statIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  statTextContainer: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  decorativeDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 0.6,
  },
});