export const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return '#34C759';
    case 'Inactive': return '#FF3B30';
    case 'Maintenance': return '#FF9500';
    case 'Offline': return '#8E8E93';
    default: return '#8E8E93';
  }
};

export const getStatusBackground = (status) => {
  switch (status) {
    case 'Active': return '#E8F8ED';
    case 'Inactive': return '#FFE6E6';
    case 'Maintenance': return '#FFF4E6';
    case 'Offline': return '#F2F2F7';
    default: return '#F2F2F7';
  }
};

export const getBatteryColor = (battery) => {
  const batteryLevel = parseInt(battery);
  if (batteryLevel >= 70) return '#34C759';
  if (batteryLevel >= 30) return '#FF9500';
  return '#FF3B30';
};
