import { Alert, Linking, Platform, PermissionsAndroid } from 'react-native';

export const requestGalleryPermission = async () => {
  if (Platform.OS !== 'android') return true;

  try {
    // For Android 13+ (API level 33) we need READ_MEDIA_IMAGES
    // For older versions, we use READ_EXTERNAL_STORAGE
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const result = await PermissionsAndroid.request(permission, {
      title: 'Media Access',
      message: 'App needs access to your media to select images',
      buttonPositive: 'Allow',
      buttonNegative: 'Deny',
      buttonNeutral: 'Ask Later',
    });

    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Alert.alert(
        'Permission Required',
        'You have permanently denied media access. Please enable it in app settings.',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Open Settings',
            onPress: () => Linking.openSettings(),
          },
        ],
        { cancelable: false },
      );
    }
    return false;
  } catch (err) {
    console.warn('Permission error:', err);
    return false;
  }
};

export const requestFilePermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_DOCUMENTS,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};