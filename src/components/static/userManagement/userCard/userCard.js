import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserCard = ({ user, onEdit, onPassword, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.fullName.split(' ').map(n => n[0]).join('')}
          </Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.fullName}>{user.fullName}</Text>
          <Text style={styles.username}>@{user.username}</Text>
        </View>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{user.role}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Ionicons name="person-outline" size={16} color="#666" />
          <Text style={styles.detailLabel}>User ID:</Text>
          <Text style={styles.detailValue}>{user.userId}</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="mail-outline" size={16} color="#666" />
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>{user.email}</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="call-outline" size={16} color="#666" />
          <Text style={styles.detailLabel}>Phone:</Text>
          <Text style={styles.detailValue}>{user.phone}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={() => onEdit(user)}>
          <Ionicons name="create-outline" size={16} color="#fff" />
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.passwordButton]} onPress={() => onPassword(user)}>
          <Ionicons name="key-outline" size={16} color="#fff" />
          <Text style={styles.actionText}>Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={() => onDelete(user)}>
          <Ionicons name="trash-outline" size={16} color="#fff" />
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 8,
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
  actionText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default UserCard;
