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

const Profile = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader navigation={props.navigation} title={"Profile"} showText={true} smallTitle={"Welcome to the profile"}/>
      <ScrollView style={{flex: 1}}>
        <View style={styles.box}>
          <Text style={styles.boxText}>USERNAME: @HEYAKHIL</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>MOBILE NUMBER: 090938292</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>TOTAL BALANCE: 9838982</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>WITHDRAWS MADE: 24</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
  },
  boxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 24,
  },
});

export default Profile;
