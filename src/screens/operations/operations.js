import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/common/header/header';
import MagagementCard from '../../components/static/management/magagementCard/magagementCard';
import { SPACING, FONT_STYLES } from '../../components/constants/sizes/size';

const Operations = ({ navigation }) => {
  const operationsCards = [
    { id: 1, title: 'New Journey', description: 'View Details', icon: 'directions-car', color: '#007AFF', screen: 'JourneyDetails' },
    { id: 2, title: 'Pending Approval', description: '0 Vehicles', icon: 'hourglass-top', color: '#FF9500', screen: 'PendingApproval' },
    { id: 3, title: 'Approved', description: '1 Vehicles', icon: 'check-circle', color: '#34C759', screen: 'Approved' },
    { id: 4, title: 'Completed', description: '1 Vehicles', icon: 'done-all', color: '#5856D6', screen: 'Completed' },
    { id: 5, title: 'Rejected', description: '0 Vehicles', icon: 'cancel', color: '#FF3B30', screen: 'Rejected' },
  ];

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const Card = ({ item }) => <MagagementCard item={item} handleCardPress={handleCardPress} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Operations" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Operations Dashboard</Text>
          <Text style={styles.subtitle}>Track and manage your operations</Text>
        </View>

        {/* Operations Cards Grid */}
        <View style={styles.gridContainer}>
          {operationsCards.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  title: {
    ...FONT_STYLES.lg,
    marginBottom: SPACING.xs,
    fontWeight: 'bold',
  },
  subtitle: {
    ...FONT_STYLES.md,
    color: '#666',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Operations;
