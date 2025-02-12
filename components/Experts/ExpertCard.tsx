import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native'
import React, { Fragment } from 'react'
import { Expert } from '@/types/Experts'
import FastImage from 'react-native-fast-image'
import { router } from 'expo-router'

type ExpertCardProps = {
    item: Expert
}

const ExpertCard = ({ item }: ExpertCardProps) => {
    const { width } = Dimensions.get("window");
    const imageWidth = (width - 48) / 2;
  
    const navigateToProfile = () => {
        router.navigate("profile")
    }
    return (
      <View style={[styles.cardContainer, { width: imageWidth }]}>
        <Pressable onPress={navigateToProfile}>
        <FastImage
          source={{ uri: item.thumbnail }}
          style={[styles.image, { width: imageWidth }]}
        />
        <View style={styles.overlay}>
          <Text style={styles.speciality}>{item.specialty.name.toLocaleUpperCase()}</Text>
          <Text style={styles.fullname} numberOfLines={2}>
            {item.full_name}
          </Text>
        </View>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 16,
      borderRadius: 12,
      overflow: "hidden",
    },
    image: {
      height: 256,
      borderRadius: 12,
    },
    overlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 12,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    speciality: {
      color: "#fff",
      fontSize: 12,
      fontWeight: "600",
      letterSpacing: 1
    },
    fullname: {
      color: "#fff",
      fontSize: 16,
      marginTop: 4,
      fontWeight: '400'
    },
  });
  
  export default ExpertCard;