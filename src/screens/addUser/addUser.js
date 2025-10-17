import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Switch } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../components/common/header/header";
import { FONT_STYLES, SPACING } from "../../components/constants/sizes/size";
import InputField from "../../components/common/inputField/inputField";
import { COLORS } from "../../components/constants/colors/colors";
import { ActionButtons } from "../../components/static/drivers/actionButtons/actionButtons";
import Dropdown from "../../components/common/dropdown/dropdown";


const AddUser = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    userId: "",
    fullName: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    profilePic: "",
    password: "",
    isVerified: false,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreateUser = () => {
    console.log("Created User:", form);
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header
        showBackButton
        title="Add user"
        showUser={false}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: SPACING.xl }}
        showsVerticalScrollIndicator={false}
      >
        {/* --- User Information --- */}
        <View style={styles.sectionHeader}>
          <Icon name="person-outline" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>User Information</Text>
        </View>

        <InputField
          label="Username *"
          placeholder="john@abccorp.com"
          value={form.username}
          onChangeText={(val) => handleChange("username", val)}
        />

        <InputField
          label="User ID *"
          placeholder="Enter user ID"
          value={form.userId}
          onChangeText={(val) => handleChange("userId", val)}
        />

        <InputField
          label="Full Name *"
          placeholder="Enter full name"
          value={form.fullName}
          onChangeText={(val) => handleChange("fullName", val)}
        />

        <Dropdown
          label={"Role *"}
          placeholder="Select a role"
          value={form.role}
          onSelect={(val) => handleChange("role", val)}
          data={[
            { label: "Admin", value: "Admin" },
            { label: "User", value: "User" },
          ]}
        />

        <InputField
          label="Email *"
          placeholder="Enter email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(val) => handleChange("email", val)}
        />

        <InputField
          label="Phone *"
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(val) => handleChange("phone", val)}
        />

        <InputField
          label="Address *"
          placeholder="Enter address"
          value={form.address}
          onChangeText={(val) => handleChange("address", val)}
        />

        <InputField
          label="Profile Picture URL *"
          placeholder="Enter profile picture URL"
          value={form.profilePic}
          onChangeText={(val) => handleChange("profilePic", val)}
        />

        <InputField
          label="Password *"
          placeholder="••••••••••••••••"
          secureTextEntry
          value={form.password}
          onChangeText={(val) => handleChange("password", val)}
        />

        {/* --- Verification --- */}
        <View style={styles.sectionHeader}>
          <Icon name="checkmark-done-outline" size={22} color={COLORS.primary} />
          <Text style={[FONT_STYLES.md, styles.sectionTitle]}>Verification</Text>
        </View>

        <View style={styles.switchRow}>
          <Text style={[FONT_STYLES.sm, { color: "#111" }]}>Is Verified</Text>
          <Switch
            value={form.isVerified}
            onValueChange={(val) => handleChange("isVerified", val)}
            trackColor={{ false: "#ccc", true: COLORS.primary }}
          />
        </View>

        {/* --- Buttons --- */}
        <ActionButtons
          title="Create"
          onSubmit={handleCreateUser}
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
  sectionTitle: {
    marginLeft: SPACING.sm,
    color: "#111",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    borderRadius: 10,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
  },
});

export default AddUser;
