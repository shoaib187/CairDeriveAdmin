import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';

import InputField from '../../../common/inputField/inputField';
import { SPACING } from '../../../constants/sizes/size';
import { COLORS } from '../../../constants/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActionButtons } from '../../drivers/actionButtons/actionButtons';

const PasswordResetModal = ({
  visible,
  setPasswordModalVisible,
  selectedUser,
  passwordForm,
  setPasswordForm,
  handlePasswordChange,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={() => setPasswordModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerWrapper}>
            <View>
              <Text style={styles.modalTitle}>Reset Password</Text>
              <Text style={styles.modalSubtitle}>
                Reset password for {selectedUser?.fullName}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setPasswordModalVisible(false)}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Current Password */}
            <InputField
              label="Current Password"
              placeholder="Enter current password"
              secureTextEntry
              value={passwordForm.currentPassword}
              onChangeText={(text) =>
                setPasswordForm({ ...passwordForm, currentPassword: text })
              }
            />

            {/* New Password */}
            <InputField
              label="New Password"
              placeholder="Enter new password"
              secureTextEntry
              value={passwordForm.newPassword}
              onChangeText={(text) =>
                setPasswordForm({ ...passwordForm, newPassword: text })
              }
            />

            {/* Confirm New Password */}
            <InputField
              label="Confirm New Password"
              placeholder="Re-enter new password"
              secureTextEntry
              value={passwordForm.confirmPassword}
              onChangeText={(text) =>
                setPasswordForm({ ...passwordForm, confirmPassword: text })
              }
            />
          </ScrollView>
          <ActionButtons title={"Save"} onCancel={() => setPasswordModalVisible(false)} onSubmit={handlePasswordChange} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.lg,
    padding: SPACING.xl,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: SPACING.xs,
  },
  modalSubtitle: {
    color: '#555',
    marginBottom: SPACING.md,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.lg,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  saveButton: {
    backgroundColor: '#28a745',
  },
  cancelButtonText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  saveButtonText: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default PasswordResetModal;
