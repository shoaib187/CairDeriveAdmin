import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DriverStatItem from '../driverStatItem/driverStatItem';
import { COLORS } from '../../../constants/colors/colors';

const DriverStatsCard = ({
  stats = { total: 45, available: 28, onRoute: 12 },
  style = {},
}) => {
  const statItems = [
    {
      key: 'total',
      label: 'Total Drivers',
      value: stats.total,
      icon: 'people',
      color: COLORS.primary, // Add custom color for icon background
    },
    {
      key: 'available',
      label: 'Available',
      value: stats.available,
      icon: 'check-circle',
      color: COLORS.success,
    },
    {
      key: 'onRoute',
      label: 'On Route',
      value: stats.onRoute,
      icon: 'directions-car',
      color: COLORS.warning,
    },
  ];

  return (
    <View style={[styles.container, style]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={[styles.headerIcon, { backgroundColor: COLORS.primary }]}>
            <Icon name="local-shipping" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.title}>Drivers Overview</Text>
            <Text style={styles.subtitle}>Real-time driver statistics</Text>
          </View>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        {statItems.map((item, index) => (
          <DriverStatItem
            key={item.key}
            item={item}
            isLast={index === statItems.length - 1}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    margin: 16,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default DriverStatsCard;
