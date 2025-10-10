import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { COLORS } from '../../constants/colors/colors';

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  icon,
  keyboardType = 'default',
  multiline = false
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputLabelRow}>
        {/* <Icon name={icon} size={18} color="#007AFF" style={styles.inputIcon} /> */}
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
      <TextInput
        style={[
          styles.textInput,
          error && styles.inputError,
          multiline && styles.multilineInput
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8E8E93"
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
      />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  )
};


const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  inputLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputIcon: {
    marginRight: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  textInput: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 12,
    fontSize: 16,
    paddingLeft: 12
  },
  inputError: {
    borderColor: '#FF3B30',
    backgroundColor: '#FFF5F5',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
