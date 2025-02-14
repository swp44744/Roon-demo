import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProfileLoading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default ProfileLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050578",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
});
