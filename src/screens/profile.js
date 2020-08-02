import * as React from 'react';
import cameraIcon from '../images/camera.png';
import vedioCallIcon from '../images/vedio.png';
import whatsappIcon from '../images/whatsapp.png';
import emailIcon from '../images/email.png';
import callIcon from '../images/call.png';
import EditIcon from '../images/edit.png';
import {useState, useEffect} from 'react';
import {Save, Update} from '../database/db';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';

const Profile = (props) => {
  let firstName =
    props.route.params === undefined ? 'First Name' : props.route.params.fName;
  let lastName =
    props.route.params === undefined ? 'Last Name' : props.route.params.lName;
  let number =
    props.route.params === undefined ? 'Number' : props.route.params.num;
  let email =
    props.route.params === undefined ? 'Email' : props.route.params.emailId;
  let updateContactId =
    props.route.params === undefined ? '' : props.route.params.id;

  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <View style={styles.topContainer}>
            <View style={styles.viewImg}>
              <TouchableOpacity style={styles.touchImg}>
                <Image source={cameraIcon} style={styles.img}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.viewfullName}>
              <Text style={styles.fullnameTxt}>
                {firstName + ' ' + lastName}
              </Text>
              <Text style={styles.numTxt}>{number}</Text>
            </View>
            <View>
              <View style={styles.viewIconImages}>
                <Image source={callIcon} style={styles.imgCallMsgVedio} />

                <Image source={emailIcon} style={styles.imgCallMsgVedio} />
                <Image source={vedioCallIcon} style={styles.imgCallMsgVedio} />
              </View>
            </View>
          </View>

          <View style={styles.contactDetailContainer}>
            <View style={styles.commonViewWhatsapp}>
              <View style={styles.commonViewflexStart}>
                <Text style={styles.whatsappCommonTxt}>
                  {' '}
                  Message {'   ' + number}
                </Text>
              </View>
              <View style={styles.commonViewflexEnd}>
                <Image
                  onPress={() =>
                    Linking.openURL(
                      `whatsapp://send?text=hello&phone=${number}`,
                    )
                  }
                  source={whatsappIcon}
                  style={styles.whatsappImage}
                />
              </View>
            </View>
            <View style={styles.commonViewWhatsapp}>
              <View style={styles.commonViewflexStart}>
                <Text style={styles.whatsappCommonTxt}>
                  {' '}
                  Voice Call {'  ' + number}
                </Text>
              </View>
              <View style={styles.commonViewflexEnd}>
                <Image source={whatsappIcon} style={styles.whatsappImage} />
              </View>
            </View>
            <View style={styles.commonViewWhatsapp}>
              <View style={styles.commonViewflexStart}>
                <Text style={styles.whatsappCommonTxt}>
                  {' '}
                  Vedio Call {'  ' + number}
                </Text>
              </View>
              <View style={styles.commonViewflexEnd}>
                <Image source={whatsappIcon} style={styles.whatsappImage} />
              </View>
            </View>
          </View>
          <View style={styles.editView}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('AddContact', {
                  id: updateContactId,
                  fName: firstName,
                  lName: lastName,
                  num: number,
                  emailId: email,
                })
              }>
              <Image source={EditIcon} style={styles.imgEditIcon} />
              <Text style={styles.editTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  topContainer: {
    backgroundColor: 'white',
    padding: 5,
  },

  contactDetailContainer: {
    backgroundColor: 'white',
    marginTop: 30,
  },
  viewImg: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  touchImg: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  img: {
    height: 40,
    width: 40,
  },

  viewfullName: {
    alignItems: 'center',
    width: '100%',
  },
  fullnameTxt: {
    fontFamily: 'Arial',
    fontSize: 20,
  },
  numTxt: {
    fontFamily: 'Arial',
    fontSize: 12,
  },
  whatsappCommonTxt: {
    fontFamily: 'Arial',
    fontSize: 12,
  },

  imgCallMsgVedio: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
  viewIconImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  commonViewWhatsapp: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flexDirection: 'row',
  },
  commonViewflexStart: {
    justifyContent: 'flex-start',
    width: '80%',
  },
  commonViewflexEnd: {
    alignItems: 'flex-end',

    width: '20%',
  },
  whatsappImage: {
    width: 30,
    height: 30,
  },
  editView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
  },
  imgEditIcon: {
    height: 25,
    width: 25,
  },
  editTxt: {
    fontFamily: 'Arial',
    fontSize: 16,
  },
});
