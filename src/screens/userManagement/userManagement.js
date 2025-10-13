import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  Dimensions
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UserCard from '../../components/static/userManagement/userCard/userCard';
import Header from '../../components/common/header/header';
import { FONT_SIZES } from '../../components/constants/sizes/size';
import { COLORS } from '../../components/constants/colors/colors';

const { width } = Dimensions.get('window');

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: 'johnabncm46z',
      username: 'johnabc',
      fullName: 'John Doe',
      email: 'john@abccorp.com',
      phone: '+123456789',
      role: 'N/A',
    }
  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editForm, setEditForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: ''
  });

  // const UserCard = ({ user }) => (
  //   <View style={styles.card}>
  //     <View
  //       colors={['#ffffff', '#f8f9fa']}
  //       style={styles.cardGradient}
  //     >
  //       {/* Header Section */}
  //       <View style={styles.cardHeader}>
  //         <View style={styles.avatar}>
  //           <Text style={styles.avatarText}>
  //             {user.fullName.split(' ').map(n => n[0]).join('')}
  //           </Text>
  //         </View>
  //         <View style={styles.userInfo}>
  //           <Text style={styles.fullName}>{user.fullName}</Text>
  //           <Text style={styles.username}>@{user.username}</Text>
  //         </View>
  //         <View style={styles.roleBadge}>
  //           <Text style={styles.roleText}>{user.role}</Text>
  //         </View>
  //       </View>

  //       {/* User Details */}
  //       <View style={styles.detailsContainer}>
  //         <View style={styles.detailRow}>
  //           <Ionicons name="person-outline" size={16} color="#666" />
  //           <Text style={styles.detailLabel}>User ID:</Text>
  //           <Text style={styles.detailValue}>{user.userId}</Text>
  //         </View>

  //         <View style={styles.detailRow}>
  //           <Ionicons name="mail-outline" size={16} color="#666" />
  //           <Text style={styles.detailLabel}>Email:</Text>
  //           <Text style={styles.detailValue}>{user.email}</Text>
  //         </View>

  //         <View style={styles.detailRow}>
  //           <Ionicons name="call-outline" size={16} color="#666" />
  //           <Text style={styles.detailLabel}>Phone:</Text>
  //           <Text style={styles.detailValue}>{user.phone}</Text>
  //         </View>
  //       </View>

  //       {/* Action Buttons */}
  //       <View style={styles.actionsContainer}>
  //         <TouchableOpacity
  //           style={[styles.actionButton, styles.editButton]}
  //           onPress={() => handleEdit(user)}
  //         >
  //           <Ionicons name="create-outline" size={16} color="#fff" />
  //           <Text style={styles.actionButtonText}>Edit</Text>
  //         </TouchableOpacity>

  //         <TouchableOpacity
  //           style={[styles.actionButton, styles.passwordButton]}
  //           onPress={() => handlePasswordReset(user)}
  //         >
  //           <Ionicons name="key-outline" size={16} color="#fff" />
  //           <Text style={styles.actionButtonText}>Password</Text>
  //         </TouchableOpacity>

  //         <TouchableOpacity
  //           style={[styles.actionButton, styles.deleteButton]}
  //           onPress={() => handleDelete(user)}
  //         >
  //           <Ionicons name="trash-outline" size={16} color="#fff" />
  //           <Text style={styles.actionButtonText}>Delete</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   </View>
  // );

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditForm({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role
    });
    setEditModalVisible(true);
  };

  const handlePasswordReset = (user) => {
    setSelectedUser(user);
    setPasswordModalVisible(true);
  };

  const handleDelete = (user) => {
    Alert.alert(
      'Delete User',
      `Are you sure you want to delete ${user.fullName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setUsers(users.filter(u => u.id !== user.id));
            Alert.alert('Success', 'User deleted successfully');
          }
        }
      ]
    );
  };

  const handleSaveEdit = () => {
    if (selectedUser) {
      setUsers(users.map(user =>
        user.id === selectedUser.id
          ? { ...user, ...editForm }
          : user
      ));
      setEditModalVisible(false);
      Alert.alert('Success', 'User updated successfully');
    }
  };

  const handlePasswordChange = () => {
    // Implement password reset logic here
    setPasswordModalVisible(false);
    Alert.alert('Success', 'Password reset instructions sent to user');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title='User management' />
      <View
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>User Management</Text>
          <Text style={styles.headerSubtitle}>Manage system users and permissions</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* User Cards */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardsContainer}>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </View>
      </ScrollView>

      {/* Edit User Modal */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit User</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={editForm.fullName}
              onChangeText={(text) => setEditForm({ ...editForm, fullName: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editForm.email}
              onChangeText={(text) => setEditForm({ ...editForm, email: text })}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={editForm.phone}
              onChangeText={(text) => setEditForm({ ...editForm, phone: text })}
              keyboardType="phone-pad"
            />

            <TextInput
              style={styles.input}
              placeholder="Role"
              value={editForm.role}
              onChangeText={(text) => setEditForm({ ...editForm, role: text })}
            />

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
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Password Reset Modal */}
      <Modal
        visible={passwordModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPasswordModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <Text style={styles.modalSubtitle}>
              Reset password for {selectedUser?.fullName}
            </Text>

            <View style={styles.passwordOptions}>
              <TouchableOpacity style={styles.passwordOption}>
                <Ionicons name="mail-outline" size={24} color="#667eea" />
                <Text style={styles.optionText}>Send reset link via email</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.passwordOption}>
                <Ionicons name="key-outline" size={24} color="#667eea" />
                <Text style={styles.optionText}>Generate temporary password</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setPasswordModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handlePasswordChange}
              >
                <Text style={styles.saveButtonText}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.secondary
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: -15,
  },
  cardsContainer: {
    padding: 12,
  },
  card: {
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardGradient: {
    borderRadius: 16,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  roleBadge: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#495057',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    marginRight: 12,
    width: 60,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#28a745',
  },
  passwordButton: {
    backgroundColor: '#ffc107',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordOptions: {
    marginBottom: 20,
  },
  passwordOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  cancelButton: {
    backgroundColor: '#6c757d',
  },
  saveButton: {
    backgroundColor: '#667eea',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UserManagement;