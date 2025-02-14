import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useExperts } from "@/hooks/useExperts";
import ExpertCard from "@/components/Experts/ExpertCard";
import Header from "@/components/Header/Header";
import SearchExpert from "@/components/Experts/SearchExpert";
import ExpertsLoadingShimmer from "@/components/ShimmerPlaceholder/Experts/ExpertsLoadingShimmer";
import { Empty } from "@/components/Empty";
import Container from "@/components/Common/Container";

export default function ExpertsScreen() {
  const { experts, handleEndReached, isFetchingNextPage, isLoading } =
    useExperts({ specialty: "" });

  const searchHeight = useSharedValue(0);

  const toggleSearchVisibility = () => {
    searchHeight.value = withTiming(searchHeight.value > 0 ? 0 : 70, {
      duration: 500,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: searchHeight.value,
    overflow: "hidden",
  }));

  return (
    <Container>
      <Header title="Experts" onPress={toggleSearchVisibility} />
      <Animated.View style={animatedStyle}>
        <SearchExpert />
      </Animated.View>

      <FlatList
        data={experts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpertCard item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.content}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="small" /> : null
        }
        ListEmptyComponent={isLoading ? <ExpertsLoadingShimmer /> : <Empty />}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={toggleSearchVisibility}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 70,
  },
  column: {
    justifyContent: "space-between",
  },
});
