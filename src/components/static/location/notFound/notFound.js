import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../common/button/button'
import { COLORS } from '../../../constants/colors/colors'


export default function NotFound({ navigation }) {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.iconWrapper}>
        <Icon name="map-marker-off-outline" size={60} color={COLORS.primary} />
      </View>
      <Text style={styles.emptyTitle}>No Locations Found</Text>
      <Text style={styles.emptySubtitle}>
        Try adjusting your search or add a new location to get started.
      </Text>
      <Button
        title="Add New Location"
        onPress={() => navigation.navigate('AddLocation')}
        variant="primary"
        size="small"
        style={{ marginTop: 16, borderRadius: 10 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // 🎨 Not Found Styling
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    backgroundColor: '#EEF2FF',
    padding: 20,
    borderRadius: 50,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 260,
  },
})