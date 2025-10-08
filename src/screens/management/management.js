import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MagagementCard from '../../components/static/management/magagementCard/magagementCard';
import Header from '../../components/common/header/header';
import StatsCard from '../../components/static/management/statsCard/statsCard';

const Management = ({ navigation }) => {
  const managementCards = [
    {
      id: 1,
      title: 'Cair Hardware',
      description: 'Manage hardware devices and equipment',
      icon: 'memory',
      color: '#007AFF',
      gradient: ['#007AFF', '#0056CC'],
      screen: 'HardwareManagement',
    },
    {
      id: 2,
      title: 'Drivers',
      description: 'Driver management and assignments',
      icon: 'people',
      color: '#34C759',
      gradient: ['#34C759', '#28A745'],
      screen: 'Drivers',
    },
    {
      id: 3,
      title: 'Assets',
      description: 'Track and manage company assets',
      icon: 'inventory',
      color: '#FF9500',
      gradient: ['#FF9500', '#E68500'],
      screen: 'AssetManagement',
    },
    {
      id: 4,
      title: 'Cargo Type',
      description: 'Manage different cargo categories',
      icon: 'local-shipping',
      color: '#FF3B30',
      gradient: ['#FF3B30', '#D70015'],
      screen: 'CargoTypeManagement',
    },
    {
      id: 5,
      title: 'Location',
      description: 'Location tracking and management',
      icon: 'location-on',
      color: '#5856D6',
      gradient: ['#5856D6', '#4746B5'],
      screen: 'LocationManagement',
    },
    {
      id: 6,
      title: 'Routes',
      description: 'Route planning and optimization',
      icon: 'route',
      color: '#AF52DE',
      gradient: ['#AF52DE', '#8E44AD'],
      screen: 'RouteManagement',
    },
  ];

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const Card = ({ item }) => (
    <MagagementCard item={item} handleCardPress={handleCardPress} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title='Management' />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Management Dashboard</Text>
          <Text style={styles.subtitle}>Manage your operations efficiently</Text>
        </View>

        {/* Stats Overview */}
        <StatsCard />

        {/* Management Cards Grid */}
        <View style={styles.gridContainer}>
          {managementCards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="add" size={20} color="#007AFF" />
              <Text style={styles.actionButtonText}>Add New</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="refresh" size={20} color="#34C759" />
              <Text style={styles.actionButtonText}>Sync Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="notifications" size={20} color="#FF9500" />
              <Text style={styles.actionButtonText}>Alerts</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    lineHeight: 22,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickActions: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default Management;
