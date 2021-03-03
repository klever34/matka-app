import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TimeBazaar = (props) => {
  const {gameType} = props.route.params;
  const [biddingNumber, setbiddingNumber] = useState('Select Bidding Number');
  const [date, setDate] = useState('');
  const [popModal, setModal] = useState(false);
  let dataArray = [];
  console.log({gameType});

  const single = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const jodi = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
  ];
  const singlePatti = [
    128,
    137,
    146,
    236,
    245,
    290,
    380,
    470,
    489,
    560,
    579,
    678,
    129,
    138,
    147,
    156,
    237,
    246,
    345,
    390,
    480,
    570,
    589,
    679,
    120,
    139,
    148,
    157,
    238,
    247,
    256,
    346,
    490,
    580,
    670,
    689,
    130,
    149,
    158,
    167,
    239,
    248,
    257,
    347,
    356,
    590,
    680,
    789,
    140,
    159,
    168,
    230,
    249,
    258,
    267,
    348,
    357,
    456,
    690,
    780,
    123,
    150,
    169,
    178,
    240,
    259,
    268,
    349,
    358,
    367,
    457,
    790,
    124,
    160,
    278,
    179,
    250,
    269,
    340,
    359,
    368,
    458,
    467,
    890,
    125,
    134,
    170,
    189,
    260,
    279,
    350,
    369,
    468,
    378,
    459,
    567,
    126,
    135,
    180,
    234,
    270,
    289,
    360,
    379,
    450,
    469,
    478,
    568,
    127,
    136,
    145,
    190,
    235,
    280,
    370,
    389,
    460,
    479,
    569,
    578,
  ];
  const doublePatti = [
    100,
    119,
    155,
    227,
    335,
    344,
    399,
    588,
    669,
    110,
    200,
    228,
    255,
    366,
    499,
    660,
    688,
    778,
    166,
    229,
    300,
    337,
    355,
    445,
    599,
    779,
    788,
    112,
    220,
    266,
    338,
    400,
    446,
    455,
    699,
    770,
    113,
    122,
    177,
    339,
    366,
    447,
    500,
    799,
    889,
    600,
    114,
    277,
    330,
    448,
    466,
    556,
    880,
    899,
    115,
    133,
    188,
    223,
    377,
    449,
    557,
    566,
    700,
    116,
    224,
    233,
    288,
    440,
    477,
    558,
    800,
    990,
    117,
    144,
    199,
    225,
    388,
    559,
    577,
    667,
    900,
    118,
    226,
    244,
    299,
    334,
    488,
    550,
    668,
    677,
  ];
  const tripplePatti = ['000', 111, 222, 333, 444, 555, 666, 777, 888, 999];

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

  const [data, setData] = useState([
    {
      digit: 4,
      amount: 45,
    },
  ]);

  useEffect(() => {
    const year = new Date().getFullYear();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    setDate(`${day}-${month + 1}-${year}`);
  }, []);

  const addToData = () => {
    let testData = [
      {
        digit: 21,
        amount: 450,
      },
    ];
    setData((data) => [...data, ...testData]);
  };

  const onCategorySelected = (item) => {
    setbiddingNumber(item);
    setModal(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Time Bazaar'}
        showText={true}
        smallTitle={'single patti'}
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
          />
        </View>
        <TouchableOpacity
          style={[styles.box, {borderRadius: 20}]}
          onPress={() => addToData()}>
          <Text style={styles.boxText}>Add</Text>
        </TouchableOpacity>
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
          <View
            style={[
              styles.box,
              {
                backgroundColor: colors.primary,
                borderRadius: 20,
                marginTop: 50,
              },
            ]}>
            <Text style={styles.boxText}>Submit</Text>
          </View>
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
