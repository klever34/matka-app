import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Transactions = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Transactions'}
        showText={false}
        smallTitle={""}
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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 1, 2, 4, 5, 6].map((item, index) => (
          <View style={styles.headerRow} key={index}>
            <View style={[styles.box, {backgroundColor: 'transparent'}]}>
              <Text style={[styles.boxText, {fontSize: 16}]}>12/05/2021</Text>
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
