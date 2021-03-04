import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  ActivityIndicator,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {
  colors,
  singlePatti,
  single,
  doublePatti,
  tripplePatti,
  jodi,
  baseUrl,
} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const TimeBazaar = (props) => {
  const {gameType, matchData, gameStatus} = props.route.params;
  const [biddingNumber, setbiddingNumber] = useState('Select Bidding Number');
  const [date, setDate] = useState('');
  const [popModal, setModal] = useState(false);
  const [amount, setAmount] = useState(null);
  const [data, setData] = useState([]);
  const [bidArray, setBidArray] = useState([]);
  const [showIndicator, setIndicator] = useState(false);
  let dataArray = [];
  // console.log({gameType});

  switch (gameType) {
    case 'single':
      dataArray = single;
      break;
    case 'jodi':
      dataArray = jodi;
      break;
    case 'single-patti':
      dataArray = singlePatti;
      break;
    case 'double-patti':
      dataArray = doublePatti;
      break;
    case 'tripple-patti':
      dataArray = tripplePatti;
      break;

    default:
      break;
  }

  useEffect(() => {
    const year = new Date().getFullYear();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    setDate(`${day}-${month + 1}-${year}`);
  }, []);

  const addToData = () => {
    if (biddingNumber === 'Select Bidding Number' || !amount) {
      alert('All fields are required');
      return;
    }
    let newData = [
      {
        digit: biddingNumber,
        amount,
      },
    ];
    setBidArray((bidArray) => [
      ...bidArray,
      [parseInt(biddingNumber), parseInt(amount)],
    ]);
    setData((data) => [...data, ...newData]);
  };

  const onCategorySelected = (item) => {
    setbiddingNumber(item);
    setModal(false);
  };

  const playGame = async () => {
    try {
      if (biddingNumber === 'Select Bidding Number' || !amount) {
        alert('All fields are required');
        return;
      }
      setIndicator(true);
      const value = await AsyncStorage.getItem('@user_token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
      const response = await axios.post(`${baseUrl}playGame`, {
        game_id: matchData.id,
        game_type: gameStatus,
        game: gameType,
        bet_detail: bidArray,
      });
      console.log(response.data);
      // if(response.data.status)
      alert(response.data.msg);
      setIndicator(false);
    } catch (error) {
      console.log(error);
      setIndicator(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Time Bazaar'}
        showText={true}
        smallTitle={gameType}
      />
      <ScrollView style={{flex: 1, paddingHorizontal: 5}}>
        <View
          style={[
            styles.box,
            {backgroundColor: colors.primary, borderRadius: 20},
          ]}>
          <Text style={styles.boxText}>{date}</Text>
        </View>
        <TouchableOpacity
          style={styles.borderDiv}
          onPress={() => setModal(true)}>
          <Text style={[styles.boxText, {marginLeft: 10}]}>
            {biddingNumber}
          </Text>
          <AntDesign
            name={'caretdown'}
            size={22}
            color={'#000'}
            style={{paddingLeft: 15}}
          />
        </TouchableOpacity>

        <View
          style={[
            styles.borderDiv,
            {height: 50, padding: null, paddingHorizontal: 10},
          ]}>
          <TextInput
            placeholder={'Amount'}
            style={{
              width: '100%',
              fontFamily: 'AveriaSansLibre-Regular',
              fontSize: 16,
            }}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
        <TouchableOpacity
          style={[styles.box, {borderRadius: 20}]}
          onPress={() => addToData()}>
          <Text style={styles.boxText}>Add</Text>
        </TouchableOpacity>
        {data.length > 0 && (
          <View
            style={[
              styles.headerRow,
              {borderBottomWidth: 1, borderBottomColor: '#000'},
            ]}>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Digit</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Amount</Text>
            </View>
          </View>
        )}
        {data.map((item, index) => (
          <View
            style={[
              styles.headerRow,
              {backgroundColor: colors.primary, marginVertical: 5},
            ]}
            key={index}>
            <View style={[styles.nobox, {backgroundColor: 'transparent'}]}>
              <Text style={[styles.noboxText, {fontSize: 18}]}>
                {item.digit}
              </Text>
            </View>
            <View style={[styles.nobox, {backgroundColor: 'transparent'}]}>
              <Text style={[styles.noboxText, {fontSize: 18}]}>
                ₹ {item.amount}
              </Text>
            </View>
          </View>
        ))}
        {data.length > 0 && (
          <TouchableOpacity
            onPress={() => playGame()}
            style={[
              styles.box,
              {
                backgroundColor: colors.primary,
                borderRadius: 20,
                marginTop: 50,
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
        )}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={popModal}
        onRequestClose={() => {}}>
        <View style={[styles.centeredView, {}]}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '100%',
                position: 'absolute',
                top: -10,
                right: -10,
              }}>
              <View>
                <Ionicons
                  name={'ios-close-circle'}
                  color={'red'}
                  style={{fontSize: 30, paddingLeft: 15}}
                />
              </View>
            </TouchableOpacity>
            <View style={{padding: 5}}>
              <Text style={styles.header}>{gameType.toUpperCase()}</Text>
              <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {dataArray.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => onCategorySelected(item)}
                      key={index}
                      style={{
                        padding: 2,
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.primary,
                        margin: 3,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'AveriaSansLibre-Regular',
                          fontSize: 14,
                          padding: 5,
                        }}
                        key={index}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F8673A',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
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
  borderDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  nobox: {
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noboxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
  },
  header: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default TimeBazaar;
