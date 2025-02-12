import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Shimmer from '..';

const { width } = Dimensions.get("window");
const imageWidth = (width - 48) / 2; 

const ROWS = 3; 
const COLUMNS = 2; 
const TOTAL_ITEMS = ROWS * COLUMNS; 

const ExpertsLoadingShimmer = () => (
  <ScrollView contentContainerStyle={styles.container}>
    {[...Array(TOTAL_ITEMS)].map((_, index) => (
      <View key={index} style={styles.cardWrapper}>
        <Shimmer style={[styles.cardContainer, { width: imageWidth }]} shimmerColors={["#000259", "#0818A8"]} />
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "space-between",
    paddingTop: 16,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  cardContainer: {
    borderRadius: 12,
    overflow: "hidden",
    height: 256,
  },
});

export default ExpertsLoadingShimmer;
