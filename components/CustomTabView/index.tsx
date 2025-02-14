import { Question } from "@/types/Profile";
import { Tab } from "@/types/TabView";
import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import { Empty } from "../Empty";
import QuestionsCard from "../Q&A/QuestionsCard";
import QuestionsHeader from "../Q&A/QuestionsHeader";
import TabItem from "./TabItem";

const { width } = Dimensions.get("window");

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
    const totalWidth = tabs
      .slice(0, tabIndex)
      .reduce((acc, tab) => acc + (tabWidths.current[tab.id] || 0), 0);

    // Get the width of the currently selected tab
    const tabWidth = tabWidths.current[tabs[tabIndex].id] || 0;

    // Calculate the scroll offset to center the selected tab as much as possible
    // This ensures that when moving from left to right, the selected tab remains in the center of the header
    const offset = Math.max(0, totalWidth - width / 2 + tabWidth / 2);

    // Scroll the tab bar to the calculated offset, ensuring a smooth animation
    tabRef.current.scrollToOffset({ offset, animated: true });
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setSelectedIndex(newIndex);
    scrollHeaderToTab(newIndex);
  };

  const handleOnLayout = (id: string, width: number) => {
    tabWidths.current[id] = width;
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
            <TabItem
              item={item}
              index={index}
              selectedIndex={selectedIndex}
              handleTabPress={handleTabPress}
              onLayout={handleOnLayout}
            />
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
        {tabs.map((tab, index) => {
          const questions = content[tab.id] || [];
          const isVisible = index === selectedIndex;
          return (
            <View
              key={tab.id}
              style={[
                styles.contentWrapper,
                // { position: isVisible ? 'relative' : 'absolute', opacity: isVisible ? 1 : 0 }
              ]}
            >
              <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<QuestionsHeader />}
                renderItem={({ item }) => <QuestionsCard item={item} />}
                ListEmptyComponent={<Empty />}
                contentContainerStyle={styles.listContainer}
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
    paddingHorizontal: 8,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    flex: 1,
  },
  contentWrapper: {
    width,
    padding: 16,
    flex: 1,
  },
  listContainer: {
    flexGrow: 1
  }
});
