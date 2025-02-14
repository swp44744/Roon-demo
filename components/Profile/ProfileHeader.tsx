import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileHeader = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="chevron-down" size={30} color="white" />
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#162292",
    height: 45,
    width: 45,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
});
