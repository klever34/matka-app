import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants';

const BackHeader = (props) => {
  return (
    <View style={styles.headerBox}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons
          name={'keyboard-backspace'}
          size={30}
          color={'#000'}
          onPress={() => props.navigation.goBack()}
        />
        <View>
          <Text style={styles.headerText}>{props.title}</Text>
          {props.showText && (
            <Text style={[styles.headerText, {fontSize: 11}]}>
              {props.smallTitle}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.leftBox}>
        <MaterialCommunityIcons
          name={'home'}
          size={30}
          color={'#000'}
          style={{paddingHorizontal: 20}}
          onPress={() => props.navigation.push('Home')}
        />
        <MaterialCommunityIcons
          name={'file-table'}
          size={25}
          color={'#000'}
          onPress={() => props.navigation.push('Transactions')}
        />
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
    paddingVertical: 15,
  },
  headerText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 24,
    marginHorizontal: 10,
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BackHeader;
