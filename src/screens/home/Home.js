import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuModal from '../../components/MenuModal';

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);

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

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header popModal={popModal} />
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
            <RT>8754219865</RT>
          </Text>
        </View>
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.cardHeader}>TIME BAZAAR</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.smallText, {fontSize: 10}]}>
                Open Time: 12:55pm
              </Text>
              <Text style={[styles.smallText, {fontSize: 10}]}>
                Close Time: 2:55pm
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={[styles.smallText, {color: '#000'}]}>87</Text>
                <Text
                  style={[
                    styles.smallText,
                    {color: '#000', fontSize: 22, fontFamily: 'Roboto-Bold'},
                  ]}>
                  157
                </Text>
                <Text style={[styles.smallText, {color: '#000'}]}>987</Text>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.push('PlayNow')}>
                <Text
                  style={[
                    styles.smallText,
                    {color: '#000', fontSize: 18, marginRight: 0},
                  ]}>
                  Play Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <MenuModal
        popModal={showModal}
        exitModal={exitModal}
        nav={props.navigation}
      />
    </View>
  );
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
