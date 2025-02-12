import { StyleSheet, Image, Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
