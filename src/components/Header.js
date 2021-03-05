import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants';

const Header = ({popModal, nav, refreshPage}) => {
  return (
    <View style={styles.headerBox}>
      <MaterialCommunityIcons name={'menu'} size={30} color={'#000'} onPress={() => popModal(true)} />
      <View style={styles.leftBox}>
        <MaterialCommunityIcons name={'wallet'} size={30} color={'#000'} onPress={() => nav.push('Wallet')} />
        <Text style={styles.headerText}>0</Text>
        <MaterialCommunityIcons name={'refresh'} size={30} color={'#000'} onPress={() => refreshPage()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    width: '100%',
    paddingVertical: 15
  },
  headerText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 24,
    marginHorizontal: 10
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;
