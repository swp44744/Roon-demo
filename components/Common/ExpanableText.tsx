import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Pressable } from "react-native";

interface ExpandableTextProps {
  text: string;
  style?: object;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, style }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Text
        style={style}
        numberOfLines={expanded ? undefined : 4}
        ellipsizeMode="tail"
      >
        {text}
      </Text>
      <Pressable onPress={() => setExpanded(!expanded)}>
        <Text style={styles.moreText}>{expanded ? "Less" : "More"}</Text>
      </Pressable>
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
