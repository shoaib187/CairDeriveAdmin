import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/colors/colors';

const { width } = Dimensions.get('window');

const DriverStatsCard = ({
  stats = { total: 45, available: 28, onRoute: 12 },
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerText}>
        <Text style={styles.title}>Drivers Overview</Text>
        <Text style={styles.subtitle}>Real-time driver statistics</Text>
      </View>

      {/* Quick Stats Bar */}
      <View style={styles.quickStats}>
        <View style={styles.quickStatItem}>
          <Text style={styles.quickStatValue}>{stats.available}</Text>
          <Text style={styles.quickStatLabel}>Total</Text>
        </View>
        <View style={styles.quickStatDivider} />
        <View style={styles.quickStatItem}>
          <Text style={styles.quickStatValue}>{stats.total - stats.available}</Text>
          <Text style={styles.quickStatLabel}>Active</Text>
        </View>
        <View style={styles.quickStatDivider} />
        <View style={styles.quickStatItem}>
          <Text style={styles.quickStatValue}>{stats.onRoute}</Text>
          <Text style={styles.quickStatLabel}>On Route</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  quickStats: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  quickStatItem: {
    flex: 1,
    alignItems: 'center',
  },
  quickStatValue: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 4,
  },
  quickStatLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  quickStatDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 8,
  },
});

export default DriverStatsCard;
