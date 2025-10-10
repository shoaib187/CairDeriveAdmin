// components/common/searchHeader/SearchHeader.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Searchbar from '../searchBar/searchbar';
import Button from '../button/button';
import { COLORS } from '../../constants/colors/colors';
import { FONT_SIZES } from '../../constants/sizes/size';

export default function FilterSearchBar({
  title = 'Add Item',
  placeholder = 'Search...',
  searchQuery,
  setSearchQuery,
  onAddPress,
  showButton = true,
  buttonIcon,
  style,
}) {
  return (
    <View style={[styles.headerContainer, style]}>
      <View style={styles.searchWrapper}>
        <Searchbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder={placeholder}
        />
      </View>
      {showButton && (
        <Button
          title={title}
          onPress={onAddPress}
          icon={buttonIcon}
          variant="primary"
          size="medium"
          style={styles.addButton}
          textStyle={{ fontSize: FONT_SIZES.sm }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 10,
    marginVertical: 8
  },
  searchWrapper: {
    flex: 1,
  },
  addButton: {
    elevation: 0,
    borderRadius: 8,
  },
});
