import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title: string,
  onPress: () => void
}
const Header = ({title, onPress}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
      <Pressable onPress={onPress}>
      <Ionicons name="search-outline" color="white" size={24} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8
    
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    color: "white",
    textAlign: 'center'
  },
});
