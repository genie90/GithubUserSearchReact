import React from "react";
import * as Linking from "expo-linking";
import { View } from "react-native";
import { Text, Button, Icon } from "react-native-elements";
import styles from "./styles/DetailsInfoStyles";

const DetailsInfo = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.profession}>{info.bio}</Text>
      <View style={styles.followContainer}>
        <View style={styles.followItem}>
          <Text>Follower</Text>
          <Text style={styles.followText}>{info.followers}</Text>
        </View>
        <View style={styles.followItem}>
          <Text>Following</Text>
          <Text style={styles.followText}>{info.following}</Text>
        </View>
      </View>
      <Button
        icon={<Icon name="home" color="#ffffff" style={{ paddingRight: 10 }} />}
        buttonStyle={styles.buttonStyle}
        onPress={() => Linking.openURL(info.html_url)}
        title="View On GitHub"
      />
    </View>
  );
};

export default DetailsInfo;
