import { Question } from "@/types/Profile";
import { Tab } from "@/types/TabView";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
} from "react-native";
import { Empty } from "../Empty";

const { width } = Dimensions.get("window");
const TAB_HEADER_MARGIN = 8;

type TabViewProps = {
  tabs: Tab[];
  content: Record<string, Question[]>;
};

const CustomTabView = ({ tabs, content }: TabViewProps) => {
  if (!tabs?.length || !content) return null;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabWidths = useRef<Record<string, number>>({});
  const tabRef = useRef<FlatList<Tab>>(null);
  const contentRef = useRef<ScrollView>(null);

  const handleTabPress = (tabIndex: number): void => {
    setSelectedIndex(tabIndex);
    contentRef.current?.scrollTo({ x: tabIndex * width, animated: true });
    scrollHeaderToTab(tabIndex);
  };

  const scrollHeaderToTab = (tabIndex: number): void => {
    if (!tabRef.current) return;
  
    // Calculate the total width of all tabs before the selected tab
    const totalWidth = tabs.slice(0, tabIndex).reduce(
      (acc, tab) => acc + (tabWidths.current[tab.id] || 0), 
      0
    );
  
    // Get the width of the currently selected tab
    const tabWidth = tabWidths.current[tabs[tabIndex].id] || 0;
  
    // Calculate the scroll offset to center the selected tab as much as possible
    // This ensures that when moving from left to right, the selected tab remains in the center of the header
    const offset = Math.max(0, totalWidth - width / 2 + tabWidth / 2);
  
    // Scroll the tab bar to the calculated offset, ensuring a smooth animation
    tabRef.current.scrollToOffset({ offset, animated: true });
  };
  

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setSelectedIndex(newIndex);
    scrollHeaderToTab(newIndex);
  };

  return (
    <View style={styles.container}>
      {/* Tab Headers */}
      <FlatList
        ref={tabRef}
        data={tabs}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        renderItem={({ item, index }) => (
          <Pressable
            style={[
              styles.tab,
              {
                backgroundColor: selectedIndex === index ? "#3736DA" : "transparent",
                borderColor: selectedIndex === index ? "transparent" : "#A0A3FF4D",
              },
            ]}
            onPress={() => handleTabPress(index)}
            onLayout={(event) => (tabWidths.current[item.id] = event.nativeEvent.layout.width)}
          >
            <Text numberOfLines={1} style={styles.text}>{item.title}</Text>
          </Pressable>
        )}
      />

      {/* Tab Content */}
      <ScrollView
        ref={contentRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        showsHorizontalScrollIndicator={false}
      >
        {tabs.map((tab) => {
          const questions = content[tab.id] || [];
          return (
            <View key={tab.id} style={styles.contentWrapper}>
              <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Text style={styles.header}>Popular Q&As</Text>}
                renderItem={({ item }) => (
                  <View style={styles.questionContainer}>
                    <Text style={styles.text}>{item.question}</Text>
                  </View>
                )}
                ListEmptyComponent={<Empty />}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CustomTabView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginTop: 16,
  },
  tabContainer: {
    flexGrow: 1,
    paddingHorizontal: 8
  },
  tab: {
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 100,
    borderWidth: 1,
    marginHorizontal: TAB_HEADER_MARGIN,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  contentWrapper: {
    width,
    padding: 16,
  },
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  questionContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
