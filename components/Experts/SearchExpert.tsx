import { View, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import { useDebounce } from "use-debounce";
import { useExperts } from "@/hooks/useExperts";

const SearchExpert = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const handleInputChange = (text: string) => {
    setSearchTerm(text);
  };

  const { refetch } = useExperts({
    specialty: debouncedSearchTerm || "",
  });

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      refetch();
    }
  }, [debouncedSearchTerm, refetch]);

  return (
    <Animated.View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Expert"
        placeholderTextColor="#fff"
        autoCorrect={false}
        autoCapitalize="none"
        value={searchTerm}
        onChangeText={handleInputChange}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#6495ED",
    paddingHorizontal: 15,
    color: "white",
    fontSize: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});

export default SearchExpert;
