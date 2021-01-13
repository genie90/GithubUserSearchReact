import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements'
import styles from './styles/Search1Styles'

const Search1 = ({doSearch}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <Input
        style={styles.searchInput}
        placeholder="Search by username!"
        onChangeText={text => setKeyword(text)}
        defaultValue={keyword}
      />
      <Button
        icon={<Icon name='search' color='#ffffff' />}
        buttonStyle={styles.searchButton}
        onPress={doSearch.bind(this, keyword)}
        title='SEARCH NOW' />
    </View>
  );
}

export default Search1;
