import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <LinearGradient
      colors={["#000259", "#050578"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.container, style]}
    >
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default Container;
