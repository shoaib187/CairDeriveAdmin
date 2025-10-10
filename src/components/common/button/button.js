import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  Dimensions,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors/colors';

const { width } = Dimensions.get('window');
const scale = width / 375; // base iPhone width
const responsive = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

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
  // 🎨 Define button style variants
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: COLORS.primary,
        textColor: '#fff',
        borderColor: 'transparent',
      },
      secondary: {
        backgroundColor: '#E2E8F0',
        textColor: '#1A202C',
        borderColor: '#CBD5E0',
      },
      success: {
        backgroundColor: '#38B2AC',
        textColor: '#fff',
        borderColor: 'transparent',
      },
      warning: {
        backgroundColor: '#F6AD55',
        textColor: '#fff',
        borderColor: 'transparent',
      },
      danger: {
        backgroundColor: '#E53E3E',
        textColor: '#fff',
        borderColor: 'transparent',
      },
      outline: {
        backgroundColor: 'transparent',
        textColor: COLORS.primary,
        borderColor: COLORS.primary,
      },
      ghost: {
        backgroundColor: 'transparent',
        textColor: COLORS.primary,
        borderColor: 'transparent',
      },
    };
    return variants[variant] || variants.primary;
  };

  // 📏 Define responsive size variations
  const getSizeStyles = () => {
    const sizes = {
      small: {
        paddingVertical: responsive(6),
        paddingHorizontal: responsive(12),
        fontSize: responsive(13),
        iconSize: responsive(16),
        height: responsive(36),
      },
      medium: {
        paddingVertical: responsive(10),
        paddingHorizontal: responsive(20),
        fontSize: responsive(15),
        iconSize: responsive(20),
        height: responsive(40),
      },
      large: {
        paddingVertical: responsive(14),
        paddingHorizontal: responsive(28),
        fontSize: responsive(17),
        iconSize: responsive(24),
        height: responsive(56),
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
      borderWidth: variant === 'outline' ? 1.5 : 0,
      borderColor: variantStyles.borderColor,
      backgroundColor: variantStyles.backgroundColor,
      width: fullWidth ? width - responsive(32) : 'auto',
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
    borderRadius: responsive(10),
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
    marginRight: responsive(8),
  },
  iconRight: {
    marginLeft: responsive(8),
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: responsive(6),
    fontWeight: '600',
    fontSize: responsive(13),
  },
});

export default Button;
