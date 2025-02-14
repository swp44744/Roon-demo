import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useExperts } from "@/hooks/useExperts";
import { SafeAreaView } from "react-native-safe-area-context";
import ExpertCard from "@/components/Experts/ExpertCard";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header/Header";
import SearchExpert from "@/components/Experts/SearchExpert";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
  ZoomOutEasyDown,
} from "react-native-reanimated";
import ExpertsLoadingShimmer from "@/components/ShimmerPlaceholder/Experts/ExpertsLoadingShimmer";
import { Empty } from "@/components/Empty";

export default () => {
  const { experts, handleEndReached, isFetchingNextPage, isLoading } =
    useExperts({ specialty: "" });
  const height = useSharedValue(0);

  const toggleSearch = () => {
    const isVisible = height.value > 0;
    height.value = withTiming(isVisible ? 0 : 70, { duration: 500 });
  };

  const handleScrollBegin = () => {
    const isVisible = height.value > 0;
    if (isVisible) {
      height.value = withTiming(0, { duration: 500 });
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: "hidden",
  }));

  console.log("----> ", isLoading);

  return (
    <LinearGradient
      colors={["#000259", "#050578"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
        <SafeAreaView>
          <Header
            title={"Experts"}
            action={"search-outline"}
            onPress={toggleSearch}
          />
          <Animated.View style={[animatedStyle]}>
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
            showsVerticalScrollIndicator={false}
            onScrollBeginDrag={handleScrollBegin}
            ListEmptyComponent={
              isLoading ? <ExpertsLoadingShimmer /> : <Empty />
            }
          />
        </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 20,
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
