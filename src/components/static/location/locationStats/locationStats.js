import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FONT_STYLES, SPACING } from '../../../constants/sizes/size';

const LocationStats = ({
  stats = { total: 12, active: 9, inactive: 3 },
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Icon name="map-marker-radius" size={22} color={COLORS.primary} />
        <View style={{ marginLeft: SPACING.sm }}>
          <Text style={[FONT_STYLES.lg, styles.title]}>Location Overview</Text>
          <Text style={[FONT_STYLES.sm, styles.subtitle]}>
            Real-time location statistics
          </Text>
        </View>
      </View>

      {/* Quick Stats Bar */}
      <View style={styles.quickStats}>
        <View style={styles.quickStatItem}>
          <Text style={[FONT_STYLES.lg, styles.quickStatValue]}>
            {stats.total}
          </Text>
          <Text style={[FONT_STYLES.sm, styles.quickStatLabel]}>
            Total Locations
          </Text>
        </View>

        <View style={styles.quickStatDivider} />

        <View style={styles.quickStatItem}>
          <Text style={[FONT_STYLES.lg, styles.quickStatValue]}>
            {stats.active}
          </Text>
          <Text style={[FONT_STYLES.sm, styles.quickStatLabel]}>
            Active
          </Text>
        </View>

        <View style={styles.quickStatDivider} />

        <View style={styles.quickStatItem}>
          <Text style={[FONT_STYLES.lg, styles.quickStatValue]}>
            {stats.inactive}
          </Text>
          <Text style={[FONT_STYLES.sm, styles.quickStatLabel]}>
            Inactive
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    marginVertical: SPACING.sm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  title: {
    color: COLORS.primary,
  },
  subtitle: {
    color: '#666',
  },
  quickStats: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.sm,
    justifyContent: 'space-between',
  },
  quickStatItem: {
    flex: 1,
    alignItems: 'center',
  },
  quickStatValue: {
    color: COLORS.primary,
    marginVertical: 4,
  },
  quickStatLabel: {
    color: '#666',
  },
  quickStatDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: SPACING.sm,
  },
});

export default LocationStats;
