import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StatusBar, SafeAreaView } from 'react-native';
import useAxios from 'axios-hooks'
import axios from 'axios';
import ListItem1 from '../components/ListItem1Component'
import { githubUserSearchUrl } from '../constants/baseUrl'
import styles from '../styles/UserListScreenStyles'

function UserList({ route, navigation }) {

  const {keyword} = route.params;
  const keywordSearch = keyword === '' ? "genie" : keyword;
  const [{ data, loading, error }, refetch] = useAxios(
    githubUserSearchUrl + keywordSearch
  )

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!</Text>


  const onItemPress = (id) => navigation.navigate('UserDetails', { userUrl: data.items.map((item) => item.id === id)})

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
          data={data.items}
          renderItem={({item, index}) => (
            <ListItem1
              item={item}
              index={index}
              onItemPress={onItemPress} />
          )}
          keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default UserList;
