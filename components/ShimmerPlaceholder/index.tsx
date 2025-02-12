import React from "react";
import { StyleSheet } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

type ShimmerProps = {
  style?: any;
  shimmerColors?: string[];
};

const Shimmer = createShimmerPlaceholder(LinearGradient);

export default ({
  style,
  shimmerColors = ["#E1E9EE", "#F2F8FC"],
  ...props
}: ShimmerProps) => {
  return (
    <Shimmer
      shimmerColors={shimmerColors}
      shimmerStyle={{ locations: [0, 1] }}
      style={[styles.defaultStyle, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 8,
  },
});
