import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/common/header/header';
import InfoCard from '../../../components/static/management/infoCard/infoCard';
import InfoRow from '../../../components/static/management/infoRow/infoRow';

export default function ViewDevice({ navigation }) {
  // Sample device data - in real app, this would come from route.params
  const deviceData = {
    deviceId: '503240216',
    deviceName: 'Driver Behavior Dashcam I',
    deviceType: 'Dashcam',
    groupName: '203045',
    channelNumber: '1',
    onlineStatus: true,
    activeStatus: true,
    registrationNumber: 'RTY5566',
    vehicleType: 'Bus',
    vehicleMake: 'Hyundai',
    vehicleModel: 'County',
    vehicleYear: '2018',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onBackPress={() => navigation.goBack()}
        showBackButton={true}
        showUser={false}
        title='Device Details'
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Device Header Card */}
        <View style={styles.deviceHeaderContent}>
          <Text style={styles.deviceId}>ID: {deviceData.deviceId}</Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: deviceData.activeStatus ? '#E8F8ED' : '#FFE6E6' },
            ]}
          >
            <Text
              style={[
                styles.activeText,
                { color: deviceData.activeStatus ? '#34C759' : '#FF3B30' },
              ]}
            >
              {deviceData.activeStatus ? 'Active' : 'Inactive'}
            </Text>
          </View>
        </View>

        {/* Device Information */}
        <InfoCard title="Device Information" icon="device-hub">
          <InfoRow label="Device ID" value={deviceData.deviceId} icon="fingerprint" />
          <InfoRow label="Device Name" value={deviceData.deviceName} icon="badge" />
          <InfoRow label="Device Type" value={deviceData.deviceType} icon="devices" />
          <InfoRow label="Group Name" value={deviceData.groupName} icon="group-work" />
          <InfoRow label="Channel Number" value={deviceData.channelNumber} icon="tune" isLast />
        </InfoCard>

        {/* Status Information */}
        <InfoCard title="Status Information" icon="info">
          <InfoRow
            label="Online Status"
            value={deviceData.onlineStatus ? 'Online' : 'Offline'}
            icon="wifi"
          />
          <InfoRow
            label="Active Status"
            value={deviceData.activeStatus ? 'Active' : 'Inactive'}
            icon="power-settings-new"
            isLast
          />
        </InfoCard>

        {/* Vehicle Information */}
        <InfoCard title="Vehicle Information" icon="directions-car">
          <InfoRow label="Registration Number" value={deviceData.registrationNumber} icon="confirmation-number" />
          <InfoRow label="Vehicle Type" value={deviceData.vehicleType} icon="airport-shuttle" />
          <InfoRow label="Vehicle Make" value={deviceData.vehicleMake} icon="business" />
          <InfoRow label="Vehicle Model" value={deviceData.vehicleModel} icon="model-training" />
          <InfoRow label="Vehicle Year" value={deviceData.vehicleYear} icon="calendar-today" isLast />
        </InfoCard>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 12,
  },
  deviceHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  deviceId: {
    fontSize: 18,
    fontWeight: '900',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  activeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 20,
  },
});

