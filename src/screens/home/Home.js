import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuModal from '../../components/MenuModal';
import axios from 'axios';
import {baseUrl, colors} from '../../constants/index';
import AsyncStorage from '@react-native-community/async-storage';

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [matches, setMatches] = useState([]);
  const [showView, setView] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
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
        console.log(response.data.data);
        await AsyncStorage.setItem('@username', response.data.data.username);
        await AsyncStorage.setItem('@mobile_no', response.data.data.mobile_no);
        await AsyncStorage.setItem('@user_id', `${response.data.data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

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

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.toUpperCase().split(' ');
    let [hours, minutes] = time.split(':');
    var today = new Date();
    var currentTime =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let [a, b] = currentTime.split(':');
    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    if (parseInt(a) < parseInt(hours)) {
      return 'closed';
    } else {
      return 'open';
    }
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
            {convertTime12to24(item.close_time) === 'closed' ? (
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
          {convertTime12to24(item.close_time) === 'closed' && (
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                props.navigation.push('PlayNow', {
                  matchId: item.id,
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

  if (showView) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header popModal={popModal} nav={props.navigation} />
        <ScrollView style={{flex: 1, paddingHorizontal: 5}}>
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>
              Welcome to Matka Games. Let's Play Matka Online
            </Text>
          </View>
          <View style={styles.headerBox}>
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
          </View>
          <FlatList
            style={{flex: 1}}
            data={matches}
            renderItem={renderMatches}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleMoreData}
            onEndReachedThreshold={0}
          />
          {isLoading && (
            <ActivityIndicator size="large" color={colors.primary} />
          )}
        </ScrollView>
        <MenuModal
          popModal={showModal}
          exitModal={exitModal}
          nav={props.navigation}
        />
      </View>
    );
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
