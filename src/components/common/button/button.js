import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors/colors';

const { width } = Dimensions.get('window');

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
  children,
  fullWidth = false,
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: COLORS.primary, // deep indigo
        textColor: '#fff',
        borderColor: 'transparent',
      },
      secondary: {
        backgroundColor: '#E2E8F0', // soft gray
        textColor: '#1A202C',        // dark gray text
        borderColor: '#CBD5E0',
      },
      success: {
        backgroundColor: '#38B2AC', // teal
        textColor: '#fff',
        borderColor: 'transparent',
      },
      warning: {
        backgroundColor: '#F6AD55', // orange
        textColor: '#fff',
        borderColor: 'transparent',
      },
      danger: {
        backgroundColor: '#E53E3E', // red
        textColor: '#fff',
        borderColor: 'transparent',
      },
      outline: {
        backgroundColor: 'transparent',
        textColor: '#5A67D8',
        borderColor: '#5A67D8',
      },
      ghost: {
        backgroundColor: 'transparent',
        textColor: '#5A67D8',
        borderColor: 'transparent',
      },
    };
    return variants[variant] || variants.primary;
  };

  const getSizeStyles = () => {
    const sizes = {
      small: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: 14,
        iconSize: 16,
        height: 36,
      },
      medium: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        fontSize: 16,
        iconSize: 20,
        height: 48,
      },
      large: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        fontSize: 18,
        iconSize: 24,
        height: 56,
      },
    };
    return sizes[size] || sizes.medium;
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={variantStyles.textColor} />
          <Text style={[styles.loadingText, { color: variantStyles.textColor }]}>
            Loading...
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.contentContainer}>
        {icon && iconPosition === 'left' && (
          <Icon
            name={icon}
            size={sizeStyles.iconSize}
            color={variantStyles.textColor}
            style={styles.iconLeft}
          />
        )}

        {children || (
          <Text
            style={[
              styles.text,
              {
                color: variantStyles.textColor,
                fontSize: sizeStyles.fontSize,
                fontWeight: variant === 'ghost' ? '600' : '700',
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}

        {icon && iconPosition === 'right' && (
          <Icon
            name={icon}
            size={sizeStyles.iconSize}
            color={variantStyles.textColor}
            style={styles.iconRight}
          />
        )}
      </View>
    );
  };

  const buttonStyles = [
    styles.button,
    {
      height: sizeStyles.height,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      borderWidth: variant === 'outline' ? 2 : 0,
      borderColor: variantStyles.borderColor,
      backgroundColor: variantStyles.backgroundColor,
      width: fullWidth ? width - 32 : 'auto',
      opacity: disabled ? 0.6 : 1,
    },
    variant === 'ghost' && styles.ghostButton,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 8
  },
  ghostButton: {
    shadowOpacity: 0,
    elevation: 0,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Button;



// <View style={styles.container}>
//   {/* Primary Button */}
//   <Button
//     title="Primary Button"
//     onPress={() => console.log('Primary pressed')}
//     variant="primary"
//   />

//   {/* Secondary Button */}
//   <Button
//     title="Secondary Button"
//     onPress={() => console.log('Secondary pressed')}
//     variant="secondary"
//   />

//   {/* Success Button with Icon */}
//   <Button
//     title="Success Button"
//     onPress={() => console.log('Success pressed')}
//     variant="success"
//     icon="check-circle"
//   />

//   {/* Warning Button */}
//   <Button
//     title="Warning Button"
//     onPress={() => console.log('Warning pressed')}
//     variant="warning"
//   />

//   {/* Danger Button */}
//   <Button
//     title="Danger Button"
//     onPress={() => console.log('Danger pressed')}
//     variant="danger"
//   />

//   {/* Outline Button */}
//   <Button
//     title="Outline Button"
//     onPress={() => console.log('Outline pressed')}
//     variant="outline"
//   />

//   {/* Ghost Button */}
//   <Button
//     title="Ghost Button"
//     onPress={() => console.log('Ghost pressed')}
//     variant="ghost"
//   />

//   {/* Button with Right Icon */}
//   <Button
//     title="Next Step"
//     onPress={() => console.log('Next pressed')}
//     variant="primary"
//     icon="arrow-forward"
//     iconPosition="right"
//   />

//   {/* Loading Button */}
//   <Button
//     title="Loading Button"
//     onPress={() => console.log('Loading pressed')}
//     variant="primary"
//     loading={true}
//   />

//   {/* Disabled Button */}
//   <Button
//     title="Disabled Button"
//     onPress={() => console.log('Disabled pressed')}
//     variant="primary"
//     disabled={true}
//   />

//   {/* Different Sizes */}
//   <Button
//     title="Small Button"
//     onPress={() => console.log('Small pressed')}
//     variant="primary"
//     size="small"
//   />

//   <Button
//     title="Large Button"
//     onPress={() => console.log('Large pressed')}
//     variant="primary"
//     size="large"
//   />

//   {/* Full Width Button */}
//   <Button
//     title="Full Width Button"
//     onPress={() => console.log('Full width pressed')}
//     variant="primary"
//     fullWidth={true}
//   />

//   {/* Custom Children */}
//   <Button
//     onPress={() => console.log('Custom pressed')}
//     variant="primary"
//     style={styles.customButton}
//   >
//     <View style={styles.customContent}>
//       {/* <Icon name="star" size={20} color="#fff" /> */}
//       <Text style={styles.customText}>Custom Content</Text>
//       {/* <Icon name="star" size={20} color="#fff" /> */}
//     </View>
//   </Button>
// </View>