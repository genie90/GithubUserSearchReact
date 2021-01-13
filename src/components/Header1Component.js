import React, { useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { x } from 'react-native-elements'
import styles from './styles/Header1Styles'

const Header1 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.centerIcon}
        source={require('../../res/github.png')}
      />
    </View>
  );
}

export default Header1;
