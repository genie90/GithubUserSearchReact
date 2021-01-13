import React, { useState } from 'react';
import { View } from 'react-native';
import Header1 from '../components/Header1Component'
import Search1 from '../components/Search1Component'

import styles from '../styles/SearchScreenStyles'

const Search = ({navigation}) => {
  const dosearch = (keyword) => navigation.navigate('UserListScreen', { keyword: keyword });

  return (
    <View style={styles.container}>
      <Header1 />
      <Search1 doSearch={dosearch}/>
    </View>
  );
}


export default Search;
