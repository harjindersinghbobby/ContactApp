import * as React from 'react';
import firstNameIcon from '../images/firstName.png';
import LastNameIcon from '../images/firstName.png';
import emailIcon from '../images/email.png';
import callIcon from '../images/call.png';
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
} from 'react-native';

const AddContact = (props) => {
  let firstNamePlaceHolder =
    props.route.params === undefined ? 'First Name' : props.route.params.fName;
  let lastNamePlaceHolder =
    props.route.params === undefined ? 'Last Name' : props.route.params.lName;
  let numberPlaceHolder =
    props.route.params === undefined ? 'Number' : props.route.params.num;
  let emailPlaceHolder =
    props.route.params === undefined ? 'Email' : props.route.params.emailId;
  let updateContactId =
    props.route.params === undefined ? '' : props.route.params.id;
  const [firstNameValue, firstName] = React.useState('');
  const [firstNameErrorValue, firstNameError] = React.useState(false);
  const [lastNameValue, lastName] = React.useState('');
  const [numberValue, number] = React.useState('');
  const [numberErrorValue, numberError] = React.useState(false);

  const [emailValue, email] = React.useState('');
  const [emailErrorValue, emailError] = React.useState(false);

  const regexOnlyCharacters = /^[a-zA-Z ]+$/;
  const regexEmail = /^(([^<>()#[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;
  const regexOnlyNumber = /^[0-9]+$/;
  const onChangeText = (txt, fieldName) => {
    if (
      (regexOnlyCharacters.test(txt) && fieldName === 'firstName') ||
      (txt === '' && fieldName === 'firstName')
    ) {
      firstName(txt);
    } else if (
      (regexOnlyCharacters.test(txt) && fieldName === 'lastName') ||
      (txt === '' && fieldName === 'lastName')
    ) {
      lastName(txt);
    } else if (
      (regexOnlyNumber.test(txt) &&
        fieldName === 'number' &&
        txt.length < 16) ||
      (fieldName === 'number' && txt === '')
    ) {
      number(txt);
    } else if (fieldName === 'email' || (txt === '' && fieldName === 'email')) {
      email(txt);
    }
  };

  const onFocus = () => {
    // if u want to  change any background color or botom color u can do here when focus
  };

  const saveContact = () => {
    let Error = false;
    // validations
    if (firstNameValue === '') {
      Error = true;
      firstNameError(true);
    } else {
      firstNameError(false);
    }

    // Last Name is non Mandotory so their No validations Apply

    if (numberValue === '') {
      Error = true;
      numberError(true);
    } else {
      numberError(false);
    }

    if (emailValue === '' || !regexEmail.test(emailValue)) {
      Error = true;
      emailError(true);
    } else {
      emailError(false);
    }

    if (Error === false) {
      {
        props.route.params === undefined
          ? Save(firstNameValue, lastNameValue, numberValue, emailValue)
          : Update(
              updateContactId,
              firstNameValue,
              lastNameValue,
              numberValue,
              emailValue,
            );
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.commonView}>
          <Image source={firstNameIcon} style={{width: 25, height: 25}}></Image>
          <Text style={styles.commonTxt}>First Name</Text>
        </View>

        <TextInput
          onFocus={() => onFocus('firstName')}
          placeholder={firstNamePlaceHolder}
          style={styles.txtInput}
          onChangeText={(text) => onChangeText(text, 'firstName')}
          value={firstNameValue}
        />
        {firstNameErrorValue === true ? (
          <Text style={styles.errorMsg}>Please Enter First Name</Text>
        ) : null}
      </View>
      <View>
        <View style={styles.commonView}>
          <Image source={LastNameIcon} style={{width: 25, height: 25}}></Image>
          <Text style={styles.commonTxt}>Last Name</Text>
        </View>

        <TextInput
          onFocus={() => onFocus('lastName')}
          placeholder={lastNamePlaceHolder}
          style={styles.txtInput}
          onChangeText={(text) => onChangeText(text, 'lastName')}
          value={lastNameValue}
        />
      </View>
      <View>
        <View style={styles.commonView}>
          <Image source={callIcon} style={{width: 25, height: 25}}></Image>
          <Text style={styles.commonTxt}>Number</Text>
        </View>

        <TextInput
          onFocus={() => onFocus('number')}
          placeholder={numberPlaceHolder}
          style={styles.txtInput}
          onChangeText={(text) => onChangeText(text, 'number')}
          value={numberValue}
        />
        {numberErrorValue === true ? (
          <Text style={styles.errorMsg}>Please Enter Number</Text>
        ) : null}
      </View>
      <View>
        <View style={styles.commonView}>
          <Image source={emailIcon} style={{width: 25, height: 25}}></Image>
          <Text style={styles.commonTxt}>Email</Text>
        </View>

        <TextInput
          onFocus={() => onFocus('email')}
          placeholder={emailPlaceHolder}
          style={styles.txtInput}
          onChangeText={(text) => onChangeText(text, 'email')}
          value={emailValue}
        />
        {emailErrorValue === true ? (
          <Text style={styles.errorMsg}>Please Enter Valid Email Id</Text>
        ) : null}
      </View>

      <View style={styles.viewSavebtn}>
        <TouchableOpacity onPress={() => saveContact()} style={styles.btn}>
          <Text style={styles.saveTxt}>
            {props.route.params === undefined ? 'Save' : 'Update'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  commonView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonTxt: {
    marginLeft: 5,
    fontFamily: 'Arial',
    color: 'grey',
  },
  txtInput: {
    fontFamily: 'Arial',
    marginLeft: 27,
    height: 35,

    borderColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: 'orange',
    fontSize: 12,
  },

  errorMsg: {
    color: 'red',
    marginLeft: 27,
  },
  viewSavebtn: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignContent: 'center',

    height: 40,
    backgroundColor: '#00bfff',
    width: 150,
  },
  saveTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
  },
});
