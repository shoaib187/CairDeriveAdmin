import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors/colors';
import { FONT_STYLES, SPACING } from '../../../constants/sizes/size';


export default function StatsCard() {
  const stats = [
    { number: '156', label: 'Total Assets' },
    { number: '42', label: 'Active Drivers' },
    { number: '89', label: 'Ongoing Routes' },
  ];

  return (
    <View style={styles.statsContainer}>
      {stats.map((item, index) => (
        <React.Fragment key={index}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{item.number}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
          {index < stats.length - 1 && <View style={styles.statDivider} />}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
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
    ...FONT_STYLES.lg,
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    ...FONT_STYLES.sm,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: SPACING.sm,
  },
});
