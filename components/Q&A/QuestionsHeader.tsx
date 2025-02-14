import { StyleSheet, Text } from 'react-native'
import React from 'react'

const QuestionsHeader = () => <Text style={styles.header}>Popular Q&As</Text>

export default QuestionsHeader

const styles = StyleSheet.create({
    header: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 16,
    },
  
  });