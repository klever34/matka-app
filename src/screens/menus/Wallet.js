import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Linking,
  Alert
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const Transactions = (props) => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    async function getUser() {
      let bal = await AsyncStorage.getItem('@wallet_bal');
      setBalance(bal);
    }
    getUser();
  }, []);

  const sendAdmoney = () => {
    Linking.openURL('whatsapp://send?text=hello&phone=+917747866454')
    .then((data)=>{
      console.log("Whatsapp Opened")
    }).catch(()=>{
      Alert.alert("Install Whatsapp")
    })
  }

  const sendWMoney = () => {
    Linking.openURL('whatsapp://send?text=Hi&phone=+917747866454')
    .then((data)=>{
      console.log("Whatsapp Opened")
    }).catch(()=>{
      Alert.alert("Install Whatsapp")
    })
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Wallet'}
        showText={false}
        smallTitle={''}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerRow}>
          <Text style={[styles.boxText, {fontSize: 26, textAlign: 'center'}]}>
            Your Current Balance is{'\n'}₹{balance}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => sendAdmoney()}
            style={{
              backgroundColor: '#28E524',
              padding: 10,
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{color: '#fff', fontFamily: 'AveriaSansLibre-Regular'}}>
              Add Money
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => sendWMoney()}
            style={{
              backgroundColor: '#E53C24',
              padding: 10,
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{color: '#fff', fontFamily: 'AveriaSansLibre-Regular'}}>
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{marginVertical: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image
              source={require('../../assets/images/g-pay.png')}
              style={{height: 50, width: 60, resizeMode: 'contain'}}
            />
            <View style={styles.orangeBox}>
              <Text style={styles.orangeBoxText}>workingjkagsdj@oksbu</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image
              source={require('../../assets/images/paytm.png')}
              style={{height: 50, width: 60, resizeMode: 'contain'}}
            />
            <View style={styles.orangeBox}>
              <Text style={styles.orangeBoxText}>workingjkagsdj@oksbu</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <FontAwesome
              name={'bank'}
              size={28}
              color={'#000'}
              onPress={() => props.navigation.goBack()}
              style={{paddingLeft: 15}}
            />
            <View style={{width: '70%'}}>
              <View
                style={[styles.orangeBox, {width: '100%', marginBottom: 5}]}>
                <Text style={styles.orangeBoxText}>
                  Acc. No.:5445616313164948
                </Text>
              </View>
              <View
                style={[styles.orangeBox, {width: '100%', marginBottom: 5}]}>
                <Text style={styles.orangeBoxText}>IFSC Code: sbin020909</Text>
              </View>
              <View style={[styles.orangeBox, {width: '100%'}]}>
                <Text style={styles.orangeBoxText}>Name: Akhil Srivastava</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image
              source={require('../../assets/images/img.png')}
              style={{height: 50, width: 60, resizeMode: 'contain'}}
            />
            <View style={styles.orangeBox}>
              <Text style={styles.orangeBoxText}>workingjkagsdj@oksbu</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.headerRow, {borderRadius: null, marginVertical: 20}]}>
          <Text style={[styles.boxText, {fontSize: 26, textAlign: 'left'}]}>
            Pay the money in whatever mode you want to send. and take the
            screenshot and send it with your username to the whatsapp number: 7747866454
          </Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F8673A',
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 20,
  },
  headerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  orangeBox: {
    backgroundColor: '#FADAAB',
    padding: 15,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeBoxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 18,
  },
});

export default Transactions;
