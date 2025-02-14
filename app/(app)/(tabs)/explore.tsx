import Container from "@/components/Common/Container";
import { StyleSheet, Text } from "react-native";

export default () => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>Coming soon..</Text>
      </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
