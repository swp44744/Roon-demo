import { View, StyleSheet } from "react-native";
import React from "react";
import { Empty } from "../Empty";

const NoProfileData = () => {
  return (
    <View style={styles.container}>
      <Empty title="Profile data not available." />
    </View>
  );
};

export default NoProfileData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050578",
    alignItems: "center",
    justifyContent: "center",
  },
});
