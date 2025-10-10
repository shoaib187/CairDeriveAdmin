import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors/colors';
import { FONT_STYLES, SPACING } from '../../constants/sizes/size';

const Header = ({
  title = "Management",
  showBackButton = false,
  onBackPress,
  showUser = true,
  userInitials = "JD",
}) => {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {showBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Icon name="arrow-back" size={20} color={COLORS.white} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Right Section */}
      {showUser && (
        <TouchableOpacity style={styles.userButton}>
          <View style={styles.userInitials}>
            <Text style={styles.userInitialsText}>{userInitials}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    ...FONT_STYLES.lg, // responsive + bold
    color: COLORS.white,
    marginLeft: SPACING.xs,
  },
  backButton: {
    padding: SPACING.xs,
  },
  userButton: {
    padding: SPACING.xs,
  },
  userInitials: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  userInitialsText: {
    ...FONT_STYLES.sm,
    color: COLORS.white,
    fontWeight: '700',
  },
});

export default Header;
