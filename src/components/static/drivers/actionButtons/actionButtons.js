import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../../components/common/button/button';

export const ActionButtons = ({ onCancel, onSubmit }) => (
  <View style={styles.container}>
    <Button title="Cancel" onPress={onCancel} variant="warning" fullWidth style={[styles.button, { backgroundColor: `#ddd`, }]} textStyle={{ color: "black" }} />
    <Button title="Add Driver" onPress={onSubmit} variant="primary" icon="person-add" fullWidth style={styles.button} />
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 12, marginTop: 8, marginBottom: 0 },
  button: { flex: 1, borderRadius: 8, },
});
