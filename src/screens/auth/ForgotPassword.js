import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/index';

const ForgotPassword = (props) => {
  const [showOtp, setOtp] = useState(false);
  if (showOtp) {
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
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.push('Login')}>
            <Text style={[styles.appName, {fontSize: 18}]}>Verify Me</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
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
          Enter your WhatsApp number to reset password
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
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => setOtp(true)}>
          <Text style={[styles.appName, {fontSize: 18}]}>Send OTP</Text>
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

export default ForgotPassword;
