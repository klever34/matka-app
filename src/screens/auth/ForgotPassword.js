import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import { colors, baseUrl } from '../../constants/index';
import axios from 'axios';

const ForgotPassword = (props) => {
  const [showOtp, setOtp] = useState(false);
  const [reset, setreset] = useState(false)
  const [mob_num, setmob_num] = useState("")
  const [Otp, setsendOtp] = useState(null)
  const [pass, setpass] = useState("")
  const [cpass, setcpass] = useState("")
  const [showIndicator, setIndicator] = useState(false);

  const sentOtp = async() => {
    setIndicator(true)
    setOtp(true)
    try {
      const response = await axios.post(`${baseUrl}forgetPassword`,{
        mobile_no:mob_num
      });
      if(response.data.status){
        setOtp(true)
      }else{
        Alert.alert(response.data.msg,"Some problem occur!")
      }
      setIndicator(false)
    } catch (error) {
      console.log(error)
      setIndicator(false)
    }   
  }

  const VerifyOtpHere = async() => {
    setIndicator(true)
    try {
      const response = await axios.post(`${baseUrl}verifyForgetPassword`,{
        mobile_no:mob_num,
        otp:Otp
      })
      if(response.data.status){
        setreset(true)
      }else{
        Alert.alert(response.data.msg,"Some problem occur!")
      }
      setIndicator(false)
    } catch (error) {
      console.log(error)
      setIndicator(false)
    }
  }

  const SetPassword = async() => {
    setIndicator(true)
    try {
      const response = await axios.post(`${baseUrl}updatePassword`,{
        mobile_no:mob_num,
        new_password:pass,
        cnf_password:cpass
      })
      if(response.data.status){
        Alert.alert("Passwords Updated Successfully")
        setTimeout(()=>{
          props.navigation.push('Login')
        },2000)
      }else{
        Alert.alert(response.data.msg,"Some problem occur!")
      }
      setIndicator(false)
    } catch (error) {
      console.log(error)
      setIndicator(false)
    }
  }

  if (reset && showOtp) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          padding: 20,
          justifyContent: 'center',
          paddingTop: 70,
        }}>
        <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
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
          <Text style={[styles.appName, { marginVertical: 15, fontSize: 18 }]}>
            Reset Your Password
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              placeholder={'Enter Your New Password'}
              style={{
                width: '100%',
                marginHorizontal: 10,
                fontFamily: 'AveriaSansLibre-Regular',
                fontSize: 16,
              }}
              onChangeText={setpass}
              value={pass}
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              placeholder={'Confirm Your Password'}
              style={{
                width: '100%',
                marginHorizontal: 10,
                fontFamily: 'AveriaSansLibre-Regular',
                fontSize: 16,
              }}
              secureTextEntry={true}
              onChangeText={setcpass}
              value={cpass}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => { SetPassword() }}>
            <Text style={[styles.appName, { fontSize: 18 }]}>Submit</Text>
            {showIndicator && (
            <ActivityIndicator
              size={'small'}
              color={'#000'}
              style={{paddingLeft: 10}}
            />)}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  } else if (showOtp) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          padding: 20,
          justifyContent: 'center',
          paddingTop: 70,
        }}>
        <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
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
          <Text style={[styles.appName, { marginVertical: 15, fontSize: 18 }]}>
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
              onChangeText={(text)=>setsendOtp(text)}
              value={Otp}
              keyboardType={"number-pad"}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {VerifyOtpHere()}}>
            <Text style={[styles.appName, { fontSize: 18 }]}>Verify Me</Text>
            {showIndicator && (
            <ActivityIndicator
              size={'small'}
              color={'#000'}
              style={{paddingLeft: 10}}
            />)}
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          padding: 20,
          justifyContent: 'center',
          paddingTop: 70,
        }}>
        <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
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
          <Text style={[styles.appName, { marginVertical: 15 }]}>
            Enter your WhatsApp number to reset password
        </Text>
          <View style={styles.inputBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/country.png')}
                style={{ height: 20, width: 30 }}
              />
              <Text
                style={[styles.appName, { fontSize: 16, paddingHorizontal: 7 }]}>
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
              keyboardType="number-pad"
              onChangeText={setmob_num}
              value={mob_num}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => sentOtp()}>
            <Text style={[styles.appName, { fontSize: 18 }]}>Send OTP</Text>
            {showIndicator && (
            <ActivityIndicator
              size={'small'}
              color={'#000'}
              style={{paddingLeft: 10}}
            />)}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

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

export default ForgotPassword;
