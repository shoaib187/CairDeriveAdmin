import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FONT_STYLES, SPACING } from '../../../constants/sizes/size';
import { COLORS } from '../../../constants/colors/colors';

const LocationCard = ({ onViewDetails }) => {
  const handleEdit = () => {
    Alert.alert('Edit', 'Edit functionality would go here');
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this location?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive' }
    ]);
  };

  const handleViewDetails = () => {
    // Alert.alert('Details', 'View details functionality would go here');
  };

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Jeddah Dry Port</Text>
          <Text style={styles.subtitle}>
            Specialized dry port for industrial exports and imports
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton} onPress={handleEdit}>
            <Icon name="edit" size={20} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
            <Icon name="trash" size={20} color={COLORS.danger || '#E74C3C'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Coordinates Section */}
      <View style={styles.coordinates}>
        <View style={styles.coordinateItem}>
          <Icon name="map-marker" size={16} color={COLORS.textLight} />
          <Text style={styles.coordinateText}>Lat: 32.4945</Text>
        </View>
        <View style={styles.coordinateItem}>
          <Icon name="map-marker" size={16} color={COLORS.textLight} />
          <Text style={styles.coordinateText}>Long: 74.5667</Text>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.detailsSection}>
        <TouchableOpacity style={styles.detailsButton} onPress={onViewDetails}>
          <Text style={styles.detailsButtonText}>View Details</Text>
          <Icon name="angle-right" size={16} color={COLORS.textDark} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.siteDetails}>
            <Icon name="map-marker" size={16} color={COLORS.danger || '#E74C3C'} />
            <Text style={styles.siteDetailsText}>Site Details</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: SPACING.lg,
    margin: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  titleContainer: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  title: {
    ...FONT_STYLES.lg, // responsive + bold
    color: COLORS.textDark,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    ...FONT_STYLES.sm,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: SPACING.xs,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.lightGray || '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECF0F1',
  },
  coordinates: {
    flexDirection: 'row',
    gap: SPACING.xl,
    marginBottom: SPACING.md,
    padding: SPACING.sm,
    backgroundColor: COLORS.lightGray || '#F8F9FA',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
    // justifyContent: 'space-between'
  },
  coordinateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  coordinateText: {
    ...FONT_STYLES.sm,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: '#ECF0F1',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    backgroundColor: '#ECF0F1',
    borderRadius: 8,
  },
  detailsButtonText: {
    ...FONT_STYLES.sm,
    color: COLORS.textDark,
    fontWeight: '600',
  },
  siteDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  siteDetailsText: {
    ...FONT_STYLES.sm,
    color: COLORS.textDark,
    fontWeight: '500',
  },
});

export default LocationCard;
