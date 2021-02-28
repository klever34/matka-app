import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TimeBazaar = (props) => {
  const [data, setData] = useState([
    {
      digit: 4,
      amount: 45,
    },
  ]);

  const addToData = () => {
    let testData = [
      {
        digit: 21,
        amount: 450,
      },
    ];
    setData((data) => [...data, ...testData]);
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
          <Text style={styles.boxText}>27-02-2021</Text>
        </View>
        <View style={styles.borderDiv}>
          <Text style={styles.boxText}>Select Bidding Number</Text>
          <AntDesign
            name={'caretdown'}
            size={22}
            color={'#000'}
            onPress={() => props.navigation.goBack()}
            style={{paddingLeft: 15}}
          />
        </View>
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
});

export default TimeBazaar;
