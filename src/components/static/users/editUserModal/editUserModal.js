import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Switch,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from '../../../common/header/header';
import { COLORS } from '../../../constants/colors/colors';
import { SPACING } from '../../../constants/sizes/size';
import InputField from '../../../common/inputField/inputField';
import Dropdown from '../../../common/dropdown/dropdown';

const EditUserModal = ({
  visible,
  editForm,
  setEditForm,
  setEditModalVisible,
  handleSaveEdit,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={() => setEditModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <Header
          title="Edit User"
          showBackButton
          showUser={false}
          onBackPress={() => setEditModalVisible(false)}
        />

        <ScrollView
          style={styles.modalContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Username (read-only) */}
          <InputField
            label="Username"
            value={editForm.username}
            placeholder="Username"
            editable={false}
          />

          {/* User ID (read-only) */}
          <InputField
            label="User ID"
            value={editForm.userId}
            placeholder="User ID"
            editable={false}
          />

          {/* Full Name */}
          <InputField
            label="Full Name"
            value={editForm.fullName}
            placeholder="Full Name"
            onChangeText={(text) => setEditForm({ ...editForm, fullName: text })}
          />

          {/* Role Dropdown */}
          <Dropdown
            label="Role"
            placeholder="Select Role"
            value={editForm.role}
            onSelect={(selectedItem) =>
              setEditForm({ ...editForm, role: selectedItem.value })
            }
            data={[
              { label: 'Admin', value: 'Admin' },
              { label: 'User', value: 'User' },
            ]}
          />

          {/* Email */}
          <InputField
            label="Email"
            value={editForm.email}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEditForm({ ...editForm, email: text })}
          />

          {/* Phone */}
          <InputField
            label="Phone"
            value={editForm.phone}
            placeholder="Phone"
            keyboardType="phone-pad"
            onChangeText={(text) => setEditForm({ ...editForm, phone: text })}
          />

          {/* Address */}
          <InputField
            label="Address"
            value={editForm.address}
            placeholder="Address"
            onChangeText={(text) => setEditForm({ ...editForm, address: text })}
          />

          {/* Profile Picture URL */}
          <InputField
            label="Profile Picture URL"
            value={editForm.profilePicture}
            placeholder="Profile Picture URL"
            onChangeText={(text) =>
              setEditForm({ ...editForm, profilePicture: text })
            }
          />

          {/* Password */}
          <InputField
            label="Password"
            value={editForm.password}
            placeholder="Enter new password (optional)"
            secureTextEntry
            onChangeText={(text) => setEditForm({ ...editForm, password: text })}
          />

          {/* Verified Switch */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Is Verified</Text>
            <Switch
              value={editForm.isVerified}
              onValueChange={(value) =>
                setEditForm({ ...editForm, isVerified: value })
              }
              thumbColor={editForm.isVerified ? COLORS.primary : '#ccc'}
              trackColor={{ false: '#ddd', true: '#a0d2eb' }}
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setEditModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.saveButton]}
              onPress={handleSaveEdit}
            >
              <Text style={styles.saveButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  modalContent: {
    padding: SPACING.md,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
    marginBottom: SPACING.md,
    paddingHorizontal: 4,
  },
  switchLabel: {
    fontSize: 16,
    color: COLORS.black,
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

export default EditUserModal;
