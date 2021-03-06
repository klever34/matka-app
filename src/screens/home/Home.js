import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Linking,
  Alert
} from 'react-native';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuModal from '../../components/MenuModal';
import axios from 'axios';
import {baseUrl, colors} from '../../constants/index';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [matches, setMatches] = useState([]);
  const [showView, setView] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
 // const [shobal, setshowbal] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getMatches() {
      try {
        const value = await AsyncStorage.getItem('@user_token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
        const response = await axios.get(
          `${baseUrl}allMatch?page=${pageNumber}`,
        );
        console.log(response.data.data.data);
        if (pageNumber <= 1) {
          setMatches(response.data.data.data);
        } else if (pageNumber > 1) {
          setMatches((matches) => [...matches, ...response.data.data.data]);
        } else {
        }
        setView(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setView(true);
      }
    }
    getMatches();
  }, [pageNumber]);

  useEffect(() => {
    async function getUser() {
      try {
        const value = await AsyncStorage.getItem('@user_token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
        const response = await axios.get(`${baseUrl}user`);
        console.log('user details');
        console.log(response.data.data[0]);
        await AsyncStorage.setItem('@username', response.data.data[0].username);
        await AsyncStorage.setItem(
          '@mobile_no',
          response.data.data[0].mobile_no,
        );
        await AsyncStorage.setItem('@user_id', `${response.data.data[0].id}`);
        await AsyncStorage.setItem(
          '@wallet_bal',
          `${response.data.data[0].amount}`,
        );
        await AsyncStorage.setItem('@user-agent', response.data.data[0].agent);
        await AsyncStorage.setItem('@tranx-number', response.data.data[0].nooftransactions);
      } catch (error) {
        console.log(error.response);
      }
    }
    getUser();
  }, []);


  const sendAdmoney = () => {
    Linking.openURL('whatsapp://send?text=hello&phone=+917880256459')
    .then((data)=>{
      console.log("Whatsapp Opened")
    }).catch(()=>{
      Alert.alert("Install Whatsapp")
    })
  }

  const sendWMoney = () => {
    Linking.openURL('whatsapp://send?text=hello&phone=+917880256459')
    .then((data)=>{
      console.log("Whatsapp Opened")
    }).catch(()=>{
      Alert.alert("Install Whatsapp")
    })
  }


  const RT = (props) => (
    <Text
      style={{
        fontFamily: 'AveriaSansLibre-Regular',
        color: 'red',
        fontSize: 18,
      }}>
      {props.children}
    </Text>
  );

  const exitModal = (mode) => {
    setShowModal(false);
  };

  const popModal = (mode) => {
    setShowModal(true);
  };

  const convertTime12to24 = (time) => {
    let answer = ''
    if (moment().isAfter(moment(time.toUpperCase(), 'h:mma'))) {
      answer = 'closed';
    } else {
      answer = 'open';
    }
    return answer;

    // console.log({time12h});
    // const [time, modifier] = time12h.toUpperCase().split(' ');
    // let [hours, minutes] = time.split(':');
    // var today = new Date();
    // var currentTime =
    //   today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    // let [a, b] = currentTime.split(':');
    // if (hours === '12') {
    //   hours = '00';
    // }

    // if (modifier === 'PM') {
    //   hours = parseInt(hours, 10) + 12;
    // }
    // let answer = ''
    // console.log('current time ', a);
    // console.log('converted hour to 24', hours);
    // if (parseInt(a) <= parseInt(hours)) {
    //   answer = 'closed';
    // } else {
    //   answer = 'open';
    // }
    // console.log({answer});
    // return answer
  };

  const showRandomNum = (open_time) => {
    let answer = ''
    if (moment().isBefore(moment(open_time.toUpperCase(), 'h:mma'))) {
      answer = 'first_rand';
    } else {
      answer = 'second_rand';
    }
    return answer;
  };

  const renderMatches = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardHeader}>{item.name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.smallText, {fontSize: 10}]}>
            Open Time: {item.open_time.toUpperCase()}
          </Text>
          <Text style={[styles.smallText, {fontSize: 10}]}>
            Close Time: {item.close_time.toUpperCase()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            {showRandomNum(item.open_time) === 'first_rand' ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={[styles.smallText, {color: '#000'}]}>
                  {item.random_no_1}
                </Text>
                <Text
                  style={[
                    styles.smallText,
                    {
                      color: '#000',
                      fontSize: 22,
                      fontFamily: 'Roboto-Bold',
                    },
                  ]}>
                  {item.random_no_2}
                </Text>
                <Text style={[styles.smallText, {color: '#000'}]}>
                  {item.random_no_3}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={[styles.smallText, {color: '#000'}]}>
                  {item.random_no_4}
                </Text>
                <Text
                  style={[
                    styles.smallText,
                    {
                      color: '#000',
                      fontSize: 22,
                      fontFamily: 'Roboto-Bold',
                    },
                  ]}>
                  {item.random_no_5}
                </Text>
                <Text style={[styles.smallText, {color: '#000'}]}>
                  {item.random_no_6}
                </Text>
              </View>
            )}
          </View>
          {convertTime12to24(item.close_time) === 'open' && (
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                props.navigation.push('PlayNow', {
                  matchId: item.id,
                  matchName: item.name,
                })
              }>
              <Text
                style={[
                  styles.smallText,
                  {color: '#000', fontSize: 18, marginRight: 0},
                ]}>
                Play Now
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const handleMoreData = () => {
    setPageNumber(pageNumber + 1);
    setLoading(true);
  };

  const refreshPage = async () => {
    setView(false);
    try {
      const value = await AsyncStorage.getItem('@user_token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
      const response = await axios.get(`${baseUrl}allMatch?page=1`);
      console.log(response.data.data.data);
      setMatches(response.data.data.data);
      setView(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (showView) {
    if (matches.length > 0) {
      return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Header
            popModal={popModal}
            nav={props.navigation}
            refreshPage={refreshPage}
          />
          <View style={{flex: 1, paddingHorizontal: 5}}>
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>
                Welcome to Matka Games. Let's Play Matka Online
              </Text>
            </View>
            {/* <View style={styles.headerBox}>
              <MaterialCommunityIcons
                name={'whatsapp'}
                size={30}
                color={'#000'}
                style={{alignSelf: 'center'}}
              />
              <Text style={styles.headerText}>
                WhatsApp Number of Our Admin{'\n'}
                <RT>7747866454</RT>
              </Text>
            </View> */}
            <View style={styles.headerBox}>
              <Text style={[styles.headerText, {color: '#000', fontSize: 22}]}>
                Points Add/Withdraw
              </Text>
              <Text style={[styles.headerText, {color: 'red'}]}>+91-7880256459</Text>
              <Text style={[styles.headerText, {color: '#000'}]}>
                For Points Add or Withdraw Contact to Admin
                Click here to get redirected to WhatsApp
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
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
                    style={{
                      color: '#fff',
                      fontFamily: 'AveriaSansLibre-Regular',
                    }}>
                    Add Points
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
                    style={{
                      color: '#fff',
                      fontFamily: 'AveriaSansLibre-Regular',
                    }}>
                    Withdraw
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                style={{flex: 1}}
                data={matches}
                renderItem={renderMatches}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleMoreData}
                onEndReachedThreshold={0.1}
              />
            </View>
            {isLoading && (
              <ActivityIndicator size="large" color={colors.primary} />
            )}
          </View>
          <MenuModal
            popModal={showModal}
            exitModal={exitModal}
            nav={props.navigation}
          />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Header
            popModal={popModal}
            nav={props.navigation}
            refreshPage={refreshPage}
          />
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>
              Welcome to Matka Games. Let's Play Matka Online
            </Text>
          </View>
          <View style={styles.headerBox}>
            <Text style={[styles.headerText, {color: '#000', fontSize: 22}]}>
              Add/Withdraw Money
            </Text>
            <Text style={[styles.headerText, {color: '#000'}]}>
              Click here to get redirected to WhatsApp
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.push('Wallet')}
                style={{
                  backgroundColor: '#28E524',
                  padding: 10,
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'AveriaSansLibre-Regular',
                  }}>
                  Add Money
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.push('Withdraw')}
                style={{
                  backgroundColor: '#E53C24',
                  padding: 10,
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'AveriaSansLibre-Regular',
                  }}>
                  Withdraw
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: '#fff',
            }}>
            <Text style={{fontFamily: 'AveriaSansLibre-Regular', fontSize: 24}}>
              No Data Found...
            </Text>
          </View>
          <MenuModal
            popModal={showModal}
            exitModal={exitModal}
            nav={props.navigation}
          />
        </View>
      );
    }
  } else {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{fontFamily: 'AveriaSansLibre-Regular'}}>Loading...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerBox: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 5,
  },
  headerText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 5,
    color: '#6C6464',
  },
  card: {
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#3E8914',
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 10,
    padding: 10,
  },
  cardHeader: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: 'red',
  },
  smallText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666262',
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#F89C13',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Home;
