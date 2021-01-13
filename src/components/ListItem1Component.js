import React from 'react';
import { ListItem, Avatar } from 'react-native-elements'

const ListItem1 = ({item, index, onItemPress}) => {
  console.log(item.login);
  return (
        <ListItem
          onPress={onItemPress.bind(this, item.id)}
          style={{width: '100%'}}
          key={index}
          bottomDivider >
            <Avatar source={{uri: item.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{item.login}</ListItem.Title>
              <ListItem.Subtitle>{item.html_url}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
  );
}

export default ListItem1;
