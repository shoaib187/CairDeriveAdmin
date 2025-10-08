import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../constants/colors/colors';

export default function InfoCard({ title, icon, children }) {
  return (

    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleContainer}>
          <Icon name={icon} size={20} color={COLORS.primary} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardDivider} />
      </View>
      <View style={styles.cardContent}>
        {children}
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: COLORS.borderColor
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft: 8,
  },
  cardDivider: {
    height: 1.2,
    backgroundColor: '#f0f0f0',
    borderRadius: 1,
  },
})