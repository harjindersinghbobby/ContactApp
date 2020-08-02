import * as React from 'react';

// screens

import {Text, View, FlatList, StyleSheet} from 'react-native';
import {DATA} from '../database/db';
import {useState} from 'react';
const HomeScreen = (props) => {
  const [] = useState([]);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => renderItem(item, props)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
function renderItem(item, props) {
  var randomColorCode =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
  let firstNameFirstCharacter = item.firstName;
  return (
    <View style={styles.renderItemMainView}>
      <View
        style={[
          styles.firstNameCharacterView,
          {backgroundColor: randomColorCode},
        ]}>
        <Text style={styles.firstCharTxt}>
          {firstNameFirstCharacter.charAt(0).toUpperCase()}{' '}
        </Text>
      </View>

      <View style={styles.fullnameView}>
        <Text
          onPress={() =>
            props.navigation.navigate('Profile', {
              id: item.id,
              fName: item.firstName,
              lName: item.lastName,
              num: item.no,
              emailId: item.email,
            })
          }
          style={styles.fullNameTxt}>
          {item.firstName + ' ' + item.lastName}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderItemMainView: {
    padding: 10,
    paddingTop: 5,
    margin: 10,
    marginTop: 3,
    flexDirection: 'row',
  },
  firstNameCharacterView: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 30,
    width: 30,
    borderRadius: 30,
  },

  fullnameView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
    height: 30,
    width: 200,
    borderWidth: 0.5,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
  },
  fullNameTxt: {
    color: '#000',
  },
  firstCharTxt: {
    color: 'white',
  },
});
