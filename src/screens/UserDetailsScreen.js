import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import useAxios from "axios-hooks";

import Header1 from "../components/Header1Component";
import styles from "../styles/UserDetailsScreenStyles";
function UserDetails({ route, navigation }) {
  const { userUrl } = route.params;

  const [{ data, loading, error }, refetch] = useAxios(userUrl);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <Header1 />
      <View style={styles.circleImageContainer}>
        <Image style={styles.circleImage} source={{ uri: data.avatar_url }} />
      </View>
    </SafeAreaView>
  );
}

export default UserDetails;
