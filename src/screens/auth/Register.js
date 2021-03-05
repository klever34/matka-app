import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import {colors, baseUrl} from '../../constants/index';
import axios from 'axios';

const Register = (props) => {
  const [mobileNumber, setMobileNumber] = useState(null);
  const [showIndicator, setIndicator] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const getOTP = async () => {
    if (!mobileNumber) {
      alert('Please enter a mobile number');
      return;
    }

    try {
      setOpacity(0.2);
      setIndicator(true);
      const response = await axios.post(`${baseUrl}register`, {
        mobile_no: `${mobileNumber}`,
      });
      console.log(response.data);
      if (response.data.status) {
        props.navigation.push('OTPCode', {
          mobile_no: `${mobileNumber}`,
        });
      }
      else{
        alert(response.data.msg)
      }
      setOpacity(1);
      setIndicator(false);
    } catch (error) {
      console.log(error);
      setOpacity(1);
      setIndicator(false);
    }
  };

  const BT = (props) => (
    <Text
      style={{
        fontFamily: 'AveriaSansLibre-Regular',
        color: 'blue',
        fontSize: 18,
      }}>
      {props.children}
    </Text>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        justifyContent: 'center',
        paddingTop: 70,
      }}>
      <ScrollView style={{flex: 1, backgroundColor: colors.primary}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            resizeMode: 'contain',
            height: 60,
            width: 60,
            alignSelf: 'center',
          }}
        />
        <Text style={styles.appName}>Matka App</Text>
        <Text style={[styles.appName, {marginVertical: 15}]}>
          Enter your WhatsApp number
        </Text>
        <View style={styles.inputBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/country.png')}
              style={{height: 20, width: 30}}
            />
            <Text
              style={[styles.appName, {fontSize: 16, paddingHorizontal: 7}]}>
              +91 -
            </Text>
          </View>
          <TextInput
            placeholder={'Mobile Number'}
            style={{
              width: '100%',
              marginHorizontal: 10,
              fontFamily: 'AveriaSansLibre-Regular',
              fontSize: 16,
            }}
            onChangeText={(text) => setMobileNumber(text)}
            keyboardType="number-pad"
          />
        </View>
        <TouchableOpacity
          style={[styles.btn, {opacity: opacity}]}
          onPress={() => getOTP()}>
          <Text style={[styles.appName, {fontSize: 18}]}>Send OTP</Text>
          {showIndicator && (
            <ActivityIndicator
              size={'small'}
              color={'#000'}
              style={{paddingLeft: 10}}
            />
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 14,
    alignSelf: 'center',
    marginVertical: 5,
    textAlign: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginVertical: 15,
    width: '100%',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    width: '100%',
  },
});

export default Register;
