import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

const GameHistory = (props) => {
  const [balance, setBalance] = useState('');

  useEffect(() => {}, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Game History'}
        showText={false}
        smallTitle={''}
      />
      <ScrollView style={{flex: 1}}>
        <View style={[styles.headerRow, {borderWidth: 1, borderColor: '#000'}]}>
          <View style={styles.nobox}>
            <Text style={styles.noboxText}>Game_Name</Text>
          </View>
          <View style={styles.nobox}>
            <Text style={styles.noboxText}>Game_Type</Text>
          </View>
          <View style={styles.nobox}>
            <Text style={styles.noboxText}>Bid Number</Text>
          </View>
          <View style={styles.nobox}>
            <Text style={styles.noboxText}>Total Amount</Text>
          </View>
        </View>
        {[0, 0, 0, 0, 0].map((item, index) => (
          <View
            key={index}
            style={[styles.headerRow, {marginVertical: 3, elevation: 5}]}>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Time Bazaar</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Open</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>12, 45, 78</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>80</Text>
            </View>
          </View>
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: colors.primary,
  },
  nobox: {
    padding: 5,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noboxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default GameHistory;
