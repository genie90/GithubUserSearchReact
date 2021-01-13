import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './screens/SearchScreen'

import styles from './styles/AppStyles'

const store = ConfigureStore();

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="SearchScreen">
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{title: 'SearchScreen'}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}
