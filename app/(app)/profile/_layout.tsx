import CustomTabView from "@/components/CustomTabView";
import NoProfileData from "@/components/Profile/NoProfileData";
import ProfileHeaderSection from "@/components/Profile/ProfileImage";
import ProfileLoading from "@/components/Profile/ProfileLoading";
import { useProfile } from "@/hooks/useProfile";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, FlatList } from "react-native";

const Profile = () => {
  const params = useLocalSearchParams();
  const { isLoading, data } = useProfile({
    expertId: params.expertId as string,
  });

  if (isLoading) return <ProfileLoading />

  if (!data) return <NoProfileData />

  return (
    <FlatList
      data={[{ id: "tabs" }]}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<ProfileHeaderSection data={data} />}
      renderItem={() => (
        <CustomTabView tabs={data.tabs} content={data.content} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#050578",
  },
});

export default Profile;
