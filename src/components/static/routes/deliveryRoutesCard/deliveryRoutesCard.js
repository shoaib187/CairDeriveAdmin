import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../constants/colors/colors';

const DeliveryRoutesCard = ({ item }) => {
  console.log("item", item)
  const handleEdit = (id) => {
    Alert.alert('Edit', `Edit route ${id}`);
  };

  const handleDelete = (id) => {
    Alert.alert('Delete', `Delete route ${id}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive' },
    ]);
  };

  const handleRouteInfo = (item) => {
    Alert.alert('Route Info',
      `${item.title}\n${item.subtitle}\n\nRoute: ${item.route}\nDistance: ${item.distance}\nTime: ${item.time}`
    );
  };

  const getRouteIcon = (type) => {
    return type === 'international' ? 'globe-asia' : 'truck';
  };

  const getRouteColor = (type) => {
    return type === 'international' ? '#E74C3C' : '#2E86C1';
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <IconFA
            name={getRouteIcon(item?.type)}
            size={20}
            color={getRouteColor(item?.type)}
            style={styles.routeIcon}
          />
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
        </View>

        <View style={styles.actionIcons}>
          <TouchableOpacity style={styles.iconButton} onPress={handleEdit}>
            <IconF name="edit" size={20} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
            <IconF name="trash" size={20} color={COLORS.danger || '#E74C3C'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.routeDetails}>
        <View style={styles.detailRow}>
          <Icon name="place" size={16} color="#7F8C8D" />
          <Text style={styles.detailText}>{item.route}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="speed" size={16} color="#27AE60" />
            <Text style={styles.statText}>{item.distance}</Text>
          </View>

          <View style={styles.statItem}>
            <Icon name="access-time" size={16} color="#F39C12" />
            <Text style={styles.statText}>{item.time}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.routeInfoButton}
        onPress={() => handleRouteInfo(item)}
      >
        <Icon name="info" size={18} color="#FFFFFF" />
        <Text style={styles.routeInfoText}>Route Info</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    marginHorizontal: 12
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  routeIcon: {
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    fontWeight: '500',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    backgroundColor: '#F8F9FA',
    width: 36,
    height: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeDetails: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#2C3E50',
    marginLeft: 8,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 0.48,
  },
  statText: {
    fontSize: 13,
    color: '#2C3E50',
    fontWeight: '600',
    marginLeft: 6,
  },
  routeInfoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    borderRadius: 12,
  },
  routeInfoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default DeliveryRoutesCard;