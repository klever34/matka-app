import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors, baseUrl} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const Agent = (props) => {
  const [amt, setAmt] = useState(null);
  const [username, setUsername] = useState(null);
  const [showIndicator, setIndicator] = useState(false);
  const [status, setStatus] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getAgentStatus() {
      const value = await AsyncStorage.getItem('@user-agent');
      if (value == '0') {
        setStatus(true);
      }
    }
    getAgentStatus();
  }, []);

  const becomeAgent = async() => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem('@user_token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
      const response = await axios.get(`${baseUrl}becomeAgent`);
      console.log(response.data);
      setStatus(false);
      alert(response.data.msg);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const otherPayments = async() => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem('@user_token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
      const response = await axios.post(`${baseUrl}updateBalance`,{
        username,
        amount:amt
      });
      console.log(response.data);
      setStatus(false);
      alert(response.data.msg);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Agent'}
        showText={false}
        smallTitle={''}
      />
      <ScrollView style={{flex: 1}}>
        {isLoading && (
          <ActivityIndicator
            size={'small'}
            color={'#000'}
            style={{margin: 10, alignSelf: 'center'}}
          />
        )}
        {status && (
          <TouchableOpacity
            onPress={() => becomeAgent()}
            style={[
              styles.redBox,
              {
                width: '95%',
                alignSelf: 'center',
                borderRadius: 50,
                backgroundColor: colors.primary,
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 30,
              },
            ]}>
            <Text style={styles.boxText}>Become an Agent</Text>
          </TouchableOpacity>
        )}
        {!status && (
          <View>
            <View
              style={[
                styles.redBox,
                {
                  width: '95%',
                  alignSelf: 'center',
                  borderRadius: 50,
                  backgroundColor: colors.primary,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 30,
                },
              ]}>
              <Text style={styles.boxText}>Points Distribution</Text>
              <Image
                source={require('../../assets/images/share.png')}
                style={{height: 40, width: 40, resizeMode: 'contain'}}
              />
            </View>
            <View style={[{margin: 20}]}>
              <View style={styles.box}>
                <TextInput
                  placeholder={'Username'}
                  style={{
                    width: '100%',
                    fontFamily: 'AveriaSansLibre-Regular',
                    fontSize: 16,
                  }}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={styles.box}>
                <TextInput
                  placeholder={'Points'}
                  style={{
                    width: '100%',
                    fontFamily: 'AveriaSansLibre-Regular',
                    fontSize: 16,
                  }}
                  onChangeText={(text) => setAmt(text)}
                  keyboardType="number-pad"
                />
              </View>
              <TouchableOpacity
                onPress={() => otherPayments()}
                style={[
                  styles.redBox,
                  {
                    width: '100%',
                    alignSelf: 'center',
                    borderRadius: 50,
                    backgroundColor: colors.primary,
                    flexDirection: 'row',
                  },
                ]}>
                <Text style={styles.boxText}>Submit</Text>
                {showIndicator && (
                  <ActivityIndicator
                    size={'small'}
                    color={'#000'}
                    style={{paddingLeft: 10}}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 5,
    borderColor: '#000',
    borderWidth: 1,
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
  redBox: {
    backgroundColor: '#F8673A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
  },
  redBoxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 18,
  },
});

export default Agent;
