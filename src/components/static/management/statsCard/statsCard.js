import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../../../constants/colors/colors';

export default function StatsCard() {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>156</Text>
        <Text style={styles.statLabel}>Total Assets</Text>
      </View>

      <View style={styles.statDivider} />

      <View style={styles.statItem}>
        <Text style={styles.statNumber}>42</Text>
        <Text style={styles.statLabel}>Active Drivers</Text>
      </View>

      <View style={styles.statDivider} />

      <View style={styles.statItem}>
        <Text style={styles.statNumber}>89</Text>
        <Text style={styles.statLabel}>Ongoing Routes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 10,
  },
});
