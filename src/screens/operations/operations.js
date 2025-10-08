import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Operations = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Operations Center</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Active Tasks</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>

        <View style={styles.operationsList}>
          <Text style={styles.sectionTitle}>Recent Operations</Text>

          <TouchableOpacity style={styles.operationItem}>
            <View style={styles.operationIcon}>
              <Text>⚡</Text>
            </View>
            <View style={styles.operationContent}>
              <Text style={styles.operationTitle}>System Update</Text>
              <Text style={styles.operationTime}>2 hours ago</Text>
            </View>
            <Text style={styles.operationStatus}>Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationItem}>
            <View style={styles.operationIcon}>
              <Text>🔧</Text>
            </View>
            <View style={styles.operationContent}>
              <Text style={styles.operationTitle}>Maintenance</Text>
              <Text style={styles.operationTime}>5 hours ago</Text>
            </View>
            <Text style={[styles.operationStatus, styles.statusInProgress]}>In Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationItem}>
            <View style={styles.operationIcon}>
              <Text>📊</Text>
            </View>
            <View style={styles.operationContent}>
              <Text style={styles.operationTitle}>Data Backup</Text>
              <Text style={styles.operationTime}>Yesterday</Text>
            </View>
            <Text style={styles.operationStatus}>Completed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  operationsList: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  operationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  operationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  operationContent: {
    flex: 1,
  },
  operationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  operationTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  operationStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#34C759',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#E8F8ED',
    borderRadius: 12,
  },
  statusInProgress: {
    color: '#FF9500',
    backgroundColor: '#FFF4E6',
  },
});

export default Operations;