import { ProfileResponse } from "@/types/Profile";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import ExpandableText from "../Common/ExpanableText";
import ProfileHeader from "./ProfileHeader";

const { width, height } = Dimensions.get("window");


const ProfileHeaderSection = ({ data }: { data: ProfileResponse }) => {
    return (
      <View>
        {/* Profile Image & Header */}
        <View style={styles.size}>
          <FastImage 
            source={{ uri: data.thumbnail }} 
            style={[styles.imageContainer, styles.size]} 
          />
          <ProfileHeader />
          <LinearGradient colors={["transparent", "#050578"]} style={styles.gradient} />
        </View>
  
        {/* Profile Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{data.full_name}</Text>
            <Text style={styles.speciality}>{data.specialty?.name}</Text>
          </View>
          <ExpandableText text={data.bio || "No bio available"} style={styles.bio} />
        </View>
      </View>
    );
  };

  export default ProfileHeaderSection

  const styles = StyleSheet.create({
    size: {
      width,
      height: height * 0.4,
    },
    imageContainer: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    gradient: {
      width,
      height: 210,
      position: "absolute",
      bottom: 0,
    },
    detailsContainer: {
      marginTop: 16,
      gap: 24,
      paddingHorizontal: 16,
    },
    textWrapper: {
      gap: 8,
    },
    title: {
      fontSize: 36,
      fontWeight: "600",
      lineHeight: 48,
      color: "white",
    },
    speciality: {
      fontSize: 20,
      fontWeight: "500",
      lineHeight: 28,
      color: "white",
    },
    bio: {
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 24,
      color: "white",
    },
  });
  