import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './screens/SearchScreen'
import UserListScreen from './screens/UserListScreen'

import styles from './styles/AppStyles'

const store = ConfigureStore();

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator style={styles.container} initialRouteName="SearchScreen">
          <Stack.Screen style={styles.container} name="SearchScreen" component={SearchScreen} options={{title: 'SearchScreen', headerShown: false}}/>
          <Stack.Screen style={styles.container} name="UserListScreen" component={UserListScreen} options={{title: 'User List Result'}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}
