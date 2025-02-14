import Container from "@/components/Common/Container";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default () => {
  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Coming soon..</Text>
        <Pressable
          onPress={() => router.navigate("/(app)/(tabs)/experts")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Expert</Text>
        </Pressable>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    padding: 16,
    backgroundColor: "#3736DA",
    marginTop: 16,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "400",
  },
});
