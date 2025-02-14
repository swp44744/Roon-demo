import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ExpandableTextProps {
  text: string;
  style?: object;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, style }) => {
  const [expanded, setExpanded] = useState(false);
  const maxHeight = useSharedValue(100);

  const toggleExpand = () => {
    maxHeight.value = withTiming(expanded ? 100 : 1000, { duration: 700 });
    setExpanded((prev) => !prev);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    maxHeight: maxHeight.value,
    overflow: "hidden",
  }));

  return (
    <View>
      <Animated.View style={animatedStyle}>
        <Text style={style}>{text}</Text>
      </Animated.View>
      <TouchableOpacity onPress={toggleExpand}>
        <Text style={styles.moreText}>{expanded ? "Less" : "More"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  moreText: {
    color: "#007BFF",
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default ExpandableText;
