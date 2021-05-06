import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const SettingsToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#4ecdc4" }}
        thumbColor={isEnabled ? "#fc5c65" : "#fc5c65"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default SettingsToggleSwitch;
