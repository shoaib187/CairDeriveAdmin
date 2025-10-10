import ImagePicker from 'react-native-image-crop-picker';
import { requestGalleryPermission } from '../../permissions/permissions';


export const imagePicker = async (options = {}) => {
  const defaultOptions = {
    width: 300,
    height: 300,
    // cropping: true,
    cropperCircleOverlay: false,
    compressImageQuality: 0.8,
    includeBase64: false,
    mediaType: 'any',
  };

  const mergedOptions = { ...defaultOptions, ...options };

  try {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      return {
        success: false,
        error: 'Permission denied',
        permissionDenied: true,
      };
    }

    const image = await ImagePicker.openPicker(mergedOptions);
    return { success: true, image };
  } catch (error) {
    if (error.code === 'E_PICKER_CANCELLED') {
      return { success: false, cancelled: true };
    }

    console.error('Image picker error:', error);
    return {
      success: false,
      error: error.message || 'Failed to pick image',
      code: error.code,
    };
  }
};