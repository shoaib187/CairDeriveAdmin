import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Easing,
} from "react-native";

import { COLORS } from "../../constants/colors/colors";
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get("window");

const Dropdown = ({
  label,
  data = [],
  placeholder = "Select option",
  value,
  onSelect,
  wrapperStyle,
  dropdownStyle,
}) => {
  const [visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current; // dropdown animation

  const toggleDropdown = () => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start(() => setVisible(false));
    } else {
      setVisible(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  };

  const dropdownHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.min(data.length * 45, 200)], // auto height but max 200
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        onSelect(item);
        toggleDropdown();
      }}
    >
      <Text style={styles.itemText}>{item?.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Input styled button */}
      <TouchableOpacity
        style={styles.inputField}
        onPress={toggleDropdown}
        activeOpacity={0.7}
      >
        <Text style={[styles.inputText, !value && { color: "#9CA3AF" }]}>
          {value ? value.label : placeholder}
        </Text>
        <Icon
          name={visible ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#9CA3AF"
        />
      </TouchableOpacity>

      {/* Dropdown menu */}
      {visible && (
        <Animated.View style={[styles.dropdown, dropdownStyle, { height: dropdownHeight }]}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.borderColor,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderRadius: 12,
    height: 44,
    paddingHorizontal: width * 0.03,
    justifyContent: "space-between",
  },
  inputText: {
    fontSize: 14,
  },
  arrow: {
    fontSize: 12,
  },
  dropdown: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EAECF0",
    borderRadius: 6,
    marginTop: 4,
    elevation: 6,
    backgroundColor: COLORS.white,

  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  itemText: {
    fontSize: 14,

  },
});

export default Dropdown;
