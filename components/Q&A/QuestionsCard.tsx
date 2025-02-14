import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Question } from "@/types/Profile";
import { formatDuration } from "@/utils/time";
import FastImage from "react-native-fast-image";

type QuestionsCardProps = {
  item: Question;
};
const QuestionsCard = ({ item }: QuestionsCardProps) => {
  return (
    <View style={styles.questionContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{item.question}</Text>
        <Text style={styles.duration}>
          {formatDuration(item.answers[0].duration)}
        </Text>
      </View>
      <FastImage
        source={{ uri: item.respondent_profiles[0].thumbnail }}
        style={styles.respondent}
      />
    </View>
  );
};

export default QuestionsCard;

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: "#202d87",
    padding: 24,
    flexDirection: "row",
    borderRadius: 24,
    marginBottom: 14,
  },
  respondent: { height: 132, width: 70,
    borderRadius: 8
 },
 duration: {
    color: "#FFFFFFCC",
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
 },
 text: {
  color: "white",
  fontSize: 16,
  fontWeight: "500",
  lineHeight: 24,
  flex: 1,
},
});
