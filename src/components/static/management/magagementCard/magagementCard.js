import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../constants/colors/colors';

const { width } = Dimensions.get('window');

export default function MagagementCard({ item, handleCardPress }) {
  return (
    <TouchableOpacity style={[styles.card
      // { borderLeftColor: item.color }
    ]}
      onPress={() => handleCardPress(item.screen)}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
          <Icon name={item.icon} size={28} color={item.color} />
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>12</Text>
        </View>
      </View>

      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <View style={styles.status}>
          <View style={[styles.statusDot, { backgroundColor: item.color }]} />
          <Text style={styles.statusText}>Active</Text>
        </View>
        <Icon name="arrow-forward" size={20} color={item.color} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: (width - 48) / 2,
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
    // borderLeftWidth: 4,
    shadowColor: '#eee',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    position: 'relative'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: `${COLORS.primary}90`,
    borderRadius: 120,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: "absolute",
    // bottom: 10,
    // left: 14
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
});
