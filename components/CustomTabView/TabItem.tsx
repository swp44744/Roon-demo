import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface TabItemProps {
  item: { id: string; title: string };
  index: number;
  selectedIndex: number;
  handleTabPress: (index: number) => void;
  onLayout: (id: string, width: number) => void;
}

const TAB_HEADER_MARGIN = 8;

const TabItem: React.FC<TabItemProps> = ({
  item,
  index,
  selectedIndex,
  handleTabPress,
  onLayout,
}) => {
  return (
    <Pressable
      style={[
        styles.tab,
        {
          backgroundColor: selectedIndex === index ? "#3736DA" : "transparent",
          borderColor: selectedIndex === index ? "transparent" : "#A0A3FF4D",
        },
      ]}
      onPress={() => handleTabPress(index)}
      onLayout={(event) => onLayout(item.id, event.nativeEvent.layout.width)}
    >
      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 100,
    borderWidth: 1,
    marginHorizontal: TAB_HEADER_MARGIN,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
