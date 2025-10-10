import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors/colors';

const { width } = Dimensions.get('window');

// Responsive helpers
const scale = width / 375; // 375 is base iPhone width
const responsiveSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

export default function Searchbar({
  searchQuery,
  setSearchQuery,
  placeholder = 'Search...',
}) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor="#8E8E93"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery?.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Icon name="close" size={responsiveSize(20)} color="#8E8E93" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveSize(40),
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: responsiveSize(8),
    paddingHorizontal: responsiveSize(14),
    height: responsiveSize(42),
    borderColor: COLORS.borderColor,
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: responsiveSize(8),
  },
  searchInput: {
    flex: 1,
    fontSize: responsiveSize(15),
    color: '#1a1a1a',
    paddingVertical: 0, // ensures alignment
  },
});
