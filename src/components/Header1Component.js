import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import styles from "./styles/Header1Styles";

const Header1 = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.centerIcon}
        source={require("../../res/github.png")}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header1;
