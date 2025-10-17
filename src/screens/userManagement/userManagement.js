import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import Header from '../../components/common/header/header';
import DynamicTable from '../../components/common/table/table';
import FilterSearchBar from '../../components/common/filterSearchBar/filterSearchBar';
import SectionInformation from '../../components/common/sectionInformation/sectionInformation';
import EditUserModal from '../../components/static/users/editUserModal/editUserModal';
import PasswordResetModal from '../../components/static/users/passwordResetModal/passwordResetModal';
import { COLORS } from '../../components/constants/colors/colors';

const UserManagement = ({ navigation }) => {
  // ===== States =====
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: 'johnabncm46z',
      username: 'johnabc',
      fullName: 'John Doe',
      email: 'john@abccorp.com',
      phone: '+123456789',
      role: 'Admin',
    },
  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [editForm, setEditForm] = useState({
    username: '',
    userId: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
    address: '',
    profilePicture: '',
    password: '',
    isVerified: false,
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // ===== Handlers =====
  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditForm({
      username: user.username,
      userId: user.userId,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      address: user.address || '',
      profilePicture: user.profilePicture || '',
      password: '',
      isVerified: user.isVerified || false,
    });
    setEditModalVisible(true);
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
            setUsers(users.filter((u) => u.id !== user.id));
            Alert.alert('Deleted', 'User removed successfully');
          },
        },
      ]
    );
  };

  const handlePasswordReset = (user) => {
    setSelectedUser(user);
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setPasswordModalVisible(true);
  };

  const handleSaveEdit = () => {
    setUsers(
      users.map((user) =>
        user.id === selectedUser.id ? { ...user, ...editForm } : user
      )
    );
    setEditModalVisible(false);
    Alert.alert('Success', 'User updated successfully');
  };

  const handlePasswordChange = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordForm;

    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New passwords do not match.');
      return;
    }

    // TODO: Implement actual password update logic
    setPasswordModalVisible(false);
    Alert.alert('Success', 'Password updated successfully!');
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { key: 'userId', label: 'User ID', width: 120 },
    { key: 'username', label: 'Username', width: 120 },
    { key: 'fullName', label: 'Full Name', width: 150 },
    { key: 'email', label: 'Email', width: 180 },
    { key: 'phone', label: 'Phone', width: 120 },
    { key: 'role', label: 'Role', width: 100 },
  ];

  // ===== Render =====
  return (
    <View style={styles.container}>
      <Header
        title="User Management"
        showBackButton
        showUser={false}
        onBackPress={() => navigation.goBack?.()}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <SectionInformation
          icon="account-outline"
          title="User Management"
          subtitle="Manage all registered users and roles"
        />

        <FilterSearchBar
          title="Add User"
          onAddPress={() => navigation.navigate("AddUser")}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <DynamicTable
          data={filteredUsers}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handlePasswordReset}
          actionButtons={[{ label: 'Edit', icon: 'edit', color: '#FF9500', action: 'edit' }, { label: 'Delete', icon: 'trash', color: '#FF3B30', action: 'delete' }, { label: 'View', icon: 'eye', color: COLORS.primary, action: 'view' }]}
          maxHeight={400}
          style={styles.table}
        />
      </ScrollView>

      {/* ===== Edit User Modal ===== */}
      <EditUserModal
        visible={editModalVisible}
        editForm={editForm}
        setEditForm={setEditForm}
        setEditModalVisible={setEditModalVisible}
        handleSaveEdit={handleSaveEdit}
      />

      {/* ===== Password Reset Modal ===== */}
      <PasswordResetModal
        visible={passwordModalVisible}
        selectedUser={selectedUser}
        passwordForm={passwordForm}
        setPasswordForm={setPasswordForm}
        setPasswordModalVisible={setPasswordModalVisible}
        handlePasswordChange={handlePasswordChange}
      />
    </View>
  );
};

// ===================== Styles =====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
  table: {
    marginBottom: 20,
  },
});

export default UserManagement;
