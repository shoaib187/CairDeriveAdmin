import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import InputField from "../../../components/common/inputField/inputField";
import { COLORS } from "../../../components/constants/colors/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../../../components/common/header/header";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ActionButtons } from "../../../components/static/drivers/actionButtons/actionButtons";
import { FONT_STYLES, SPACING } from "../../../components/constants/sizes/size";

const AddLocation = ({ navigation }) => {
  const [form, setForm] = useState({
    locationName: "",
    description: "",
    country: "",
    city: "",
    region: "",
    postalCode: "",
    longitude: "",
    latitude: "",
    imageUrl: "",
    timezone: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddLocation = () => {
    console.log("Added Location:", form);
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header showBackButton title="Add location" showUser={false} onBackPress={() => navigation.goBack()} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: SPACING.xl }}
        showsVerticalScrollIndicator={false}
      >
        {/* --- Location Information --- */}
        <View style={styles.sectionHeader}>
          <Icon name="location-on" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Location Information</Text>
        </View>

        <InputField
          label="Location Name *"
          placeholder="e.g., Riyadh Warehouse"
          value={form.locationName}
          onChangeText={(val) => handleChange("locationName", val)}
        />
        <InputField
          label="Description *"
          placeholder="e.g., Main storage facility"
          value={form.description}
          onChangeText={(val) => handleChange("description", val)}
        />

        {/* --- Address Details --- */}
        <View style={styles.sectionHeader}>
          <Icon name="home-work" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Address Details</Text>
        </View>

        <InputField
          label="Country *"
          placeholder="e.g., Saudi Arabia"
          value={form.country}
          onChangeText={(val) => handleChange("country", val)}
        />
        <InputField
          label="City *"
          placeholder="e.g., Riyadh"
          value={form.city}
          onChangeText={(val) => handleChange("city", val)}
        />
        <InputField
          label="Region *"
          placeholder="e.g., Riyadh Region"
          value={form.region}
          onChangeText={(val) => handleChange("region", val)}
        />
        <InputField
          label="Postal Code *"
          placeholder="e.g., 12345"
          value={form.postalCode}
          onChangeText={(val) => handleChange("postalCode", val)}
        />

        {/* --- Coordinates --- */}
        <View style={styles.sectionHeader}>
          <Icon name="my-location" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Coordinates</Text>
        </View>

        <InputField
          label="Longitude *"
          placeholder="e.g., 46.6753"
          value={form.longitude}
          onChangeText={(val) => handleChange("longitude", val)}
        />
        <InputField
          label="Latitude *"
          placeholder="e.g., 24.7136"
          value={form.latitude}
          onChangeText={(val) => handleChange("latitude", val)}
        />

        {/* --- Location Image --- */}
        <View style={styles.sectionHeader}>
          <Icon name="image" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Location Image</Text>
        </View>

        <InputField
          label="Image URL *"
          placeholder="https://ui-avatars.com/api/?name=Location+Image"
          value={form.imageUrl}
          onChangeText={(val) => handleChange("imageUrl", val)}
        />

        {/* --- Timezone --- */}
        <View style={styles.sectionHeader}>
          <Icon name="schedule" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Timezone</Text>
        </View>

        <InputField
          label="Timezone *"
          placeholder="e.g., Asia/Riyadh"
          value={form.timezone}
          onChangeText={(val) => handleChange("timezone", val)}
        />

        {/* --- Buttons --- */}
        <ActionButtons
          title="Save"
          onSubmit={handleAddLocation}
          onCancel={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.md,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  title: {
    marginLeft: SPACING.sm,
  },
  sectionTitle: {
    marginLeft: SPACING.sm,
    color: "#111",
  },
});

export default AddLocation;
