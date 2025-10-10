import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors/colors';

const VehicleCard = () => {
  const vehicleData = {
    totalVehicles: 10,
    available: 0,
    notAvailable: 0,
    inUse: 1,
    upcomingMaintenance: 0,
    addedThisMonth: 0,
    mostCommonType: 'Van',
    avgCapacity: 3550.00
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>All Vehicles</Text>
        <Text style={styles.totalCount}>{vehicleData.totalVehicles}</Text>
      </View>

      {/* Status Grid */}
      <View style={styles.statusGrid}>
        <StatusItem label="Available" value={vehicleData.available} />
        <StatusItem label="Not Available" value={vehicleData.notAvailable} />
        <StatusItem label="In Use" value={vehicleData.inUse} />
        <StatusItem label="Upcoming Maintenance" value={vehicleData.upcomingMaintenance} />
        <StatusItem label="Added This Month" value={vehicleData.addedThisMonth} />
      </View>

      {/* Vehicle Details */}
      <View style={styles.detailsSection}>
        <DetailRow
          label="Most Common Type"
          value={vehicleData.mostCommonType}
          highlight
        />
        <DetailRow
          label="Avg Capacity (kg)"
          value={vehicleData.avgCapacity.toLocaleString()}
        />
      </View>
    </View>
  );
};

// Status Item Component
const StatusItem = ({ label, value }) => (
  <View style={styles.statusItem}>
    <Text style={styles.statusValue}>{value}</Text>
    <Text style={styles.statusLabel}>{label}</Text>
  </View>
);

// Detail Row Component
const DetailRow = ({ label, value, highlight = false }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={[styles.detailValue, highlight && styles.highlightedText]}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  totalCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statusItem: {
    width: '48%',
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: COLORS.borderColor
  },
  statusValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statusLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  detailsSection: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  highlightedText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default VehicleCard;