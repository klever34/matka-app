import React, {useState} from 'react';
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

const OTPCode = (props) => {
  const [showIndicator, setIndicator] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const {mobile_no} = props.route.params;
  const [code, setCode] = useState(null);

  const verifyOTP = async () => {
    if (!code) {
      alert('Please enter the code');
      return;
    }

    try {
      setOpacity(0.2);
      setIndicator(true);
      const response = await axios.post(`${baseUrl}verifyOtp`, {
        mobile_no,
        otp: code,
      });
      console.log(response.data);
      if (response.data.status) {
        props.navigation.push('CreateProfile', {
          mobile_no: mobile_no,
        });
      } else {
        alert(response.data.msg);
      }
      setOpacity(1);
      setIndicator(false);
    } catch (error) {
      console.log(error);
      setOpacity(1);
      setIndicator(false);
    }
  };

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
        <Text style={[styles.appName, {marginVertical: 15, fontSize: 18}]}>
          Enter your OTP here
        </Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder={'Enter OTP'}
            style={{
              width: '100%',
              marginHorizontal: 10,
              fontFamily: 'AveriaSansLibre-Regular',
              fontSize: 16,
            }}
            onChangeText={(text) => setCode(text)}
            keyboardType="number-pad"
          />
        </View>
        <TouchableOpacity
          style={[styles.btn, {opacity: opacity}]}
          onPress={() => verifyOTP()}>
          <Text style={[styles.appName, {fontSize: 18}]}>Verify Me</Text>
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

export default OTPCode;
