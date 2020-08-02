import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddContact from './src/screens/addContact';
import HomeScreen from './src/screens/homeScreen';
import Profile from './src/screens/profile';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Home',
            headerStyle: {
              backgroundColor: '#00bfff',
            },
            headerTintColor: '#EBF2FA',
            headerRight: () => (
              <TouchableOpacity
                style={styles.plusTouchable}
                onPress={() => navigation.navigate('AddContact')}>
                <Text style={styles.txtPlus}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={() => ({
            title: 'Add Contact',
            headerStyle: {
              backgroundColor: '#00bfff',
            },
            headerTintColor: '#EBF2FA',
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={() => ({
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#00bfff',
            },
            headerTintColor: '#EBF2FA',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  plusTouchable: {
    marginRight: 20,
  },
  txtPlus: {
    fontSize: 35,
    color: 'white',
  },
});
