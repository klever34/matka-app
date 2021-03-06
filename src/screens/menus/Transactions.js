import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors, baseUrl} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Transactions = (props) => {
  const [tranxArray, setTranxArray] = useState([]);
  const [showView, setView] = useState(false);

  useEffect(() => {
    async function getTranx() {
      try {
        const value = await AsyncStorage.getItem('@user_token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
        const response = await axios.get(`${baseUrl}showTransactions`);
        console.log(response.data.data.data);
        setTranxArray(response.data.data.data);
        setView(true);
      } catch (error) {
        console.log(error);
        setView(true);
      }
    }
    getTranx();
  }, []);

  if (showView) {
    if (tranxArray.length > 0) {
      return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <BackHeader
            navigation={props.navigation}
            title={'Transactions'}
            showText={false}
            smallTitle={''}
          />
          <ScrollView style={{flex: 1}}>
            <View style={styles.headerRow}>
              <View style={styles.box}>
                <Text style={styles.boxText}>Date</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxText}>Mode</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxText}>Amount</Text>
              </View>
            </View>
            {[0, 1, 2, 3].map((item, index) => (
              <View style={styles.headerRow} key={index}>
                <View style={[styles.box, {backgroundColor: 'transparent'}]}>
                  <Text style={[styles.boxText, {fontSize: 16}]}>
                    12/05/2021
                  </Text>
                </View>
                <View style={[styles.box, {backgroundColor: 'transparent'}]}>
                  <Text style={[styles.boxText, {fontSize: 16}]}>PhonePe</Text>
                </View>
                <View
                  style={[
                    styles.box,
                    {backgroundColor: 'transparent', flexDirection: 'row'},
                  ]}>
                  <FontAwesome
                    name={'rupee'}
                    size={14}
                    color={'#000'}
                    onPress={() => props.navigation.goBack()}
                    style={{padding: 5}}
                  />
                  <Text style={[styles.boxText, {fontSize: 16}]}>254</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <BackHeader
            navigation={props.navigation}
            title={'Transactions'}
            showText={false}
            smallTitle={''}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: '#fff',
            }}>
            <Text style={{fontFamily: 'AveriaSansLibre-Regular'}}>
              No data avaiable at the moment...
            </Text>
          </View>
        </View>
      );
    }
  } else {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <BackHeader
          navigation={props.navigation}
          title={'Transactions'}
          showText={false}
          smallTitle={''}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={{fontFamily: 'AveriaSansLibre-Regular'}}>
            Loading...
          </Text>
        </View>
      </View>
    );
  }
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Transactions;
