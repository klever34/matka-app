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

const CreateProfile = (props) => {
  const [showIndicator, setIndicator] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [code, setCode] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const {mobile_no} = props.route.params;

  const createProfile = async () => {
    if (!username || !password) {
      alert('All fields are required');
      return;
    }

    try {
      setOpacity(0.2);
      setIndicator(true);
      const response = await axios.put(`${baseUrl}UpdateUsernamePassword`, {
        mobile_no,
        username,
        password,
      });
      console.log(response.data);
      if (response.data.status) {
        props.navigation.push('Login');
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
          Create Profile
        </Text>
        <View style={styles.inputBox}>
          <Feather
            name={'user'}
            size={18}
            color={'#000'}
            style={{marginHorizontal: 10}}
          />
          <TextInput
            placeholder={'Enter Username'}
            style={{
              width: '100%',
              marginHorizontal: 10,
              fontFamily: 'AveriaSansLibre-Regular',
            }}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputBox}>
          <Feather
            name={'key'}
            size={18}
            color={'#000'}
            style={{marginHorizontal: 10}}
          />
          <TextInput
            placeholder={'Enter Password'}
            style={{
              width: '100%',
              marginHorizontal: 10,
              fontFamily: 'AveriaSansLibre-Regular',
            }}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={[styles.btn, {opacity: opacity}]}
          onPress={() => createProfile()}>
          <Text style={[styles.appName, {fontSize: 18}]}>Register</Text>
          {showIndicator && (
            <ActivityIndicator
              size={'small'}
              color={'#000'}
              style={{paddingLeft: 10}}
            />
          )}
        </TouchableOpacity>
        <Text
          style={[styles.appName, {fontSize: 24, marginTop: 30}]}
          onPress={() => props.navigation.push('ForgotPassword')}>
          Forgot Password?
        </Text>
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

export default CreateProfile;
