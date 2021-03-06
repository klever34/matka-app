import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [balance, setBalance] = useState('');
  const [tranx, setTranx] = useState('');

  useEffect(() => {
    async function getUser() {
      let username = await AsyncStorage.getItem('@username');
      let usermobile = await AsyncStorage.getItem('@mobile_no');
      let bal = await AsyncStorage.getItem('@wallet_bal');
      let trans = await AsyncStorage.getItem('@tranx-number');
      setName(username);
      setMobile(usermobile);
      setBalance(bal);
      setTranx(trans);
    }
    getUser();
  }, []);
  
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Profile'}
        showText={true}
        smallTitle={'Welcome to the profile'}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.box}>
          <Text style={styles.boxText}>USERNAME: @{name}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>MOBILE NUMBER: {mobile}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>TOTAL BALANCE: {balance}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>WITHDRAWS MADE: {tranx}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
  },
  boxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 24,
  },
});

export default Profile;
