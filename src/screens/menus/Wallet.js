import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Transactions = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Wallet'}
        showText={false}
        smallTitle={""}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerRow}>
          <Text style={[styles.boxText, {fontSize: 26, textAlign: 'center'}]}>
            Your Current Balance is{'\n'}₹500.00
          </Text>
        </View>
        <View style={{marginVertical: 30}}>
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
            screenshot and send it to the whatsapp number: +91-0123456789
          </Text>
        </View>
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
