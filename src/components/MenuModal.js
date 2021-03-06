import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants';
const height = Dimensions.get('window').height;
import {AuthContext} from '../../context';
import AsyncStorage from '@react-native-community/async-storage';

const MenuModal = ({exitModal, popModal, nav}) => {
  const {signOut} = React.useContext(AuthContext);
  const [name, setName] = useState('');
  const closeModal = (item) => {
    exitModal(item);
  };

  const logOut = () => {
    signOut();
  };

  useEffect(() => {
    async function getUser() {
      let value = await AsyncStorage.getItem('@username');
      setName(value);
    }
    getUser();
  }, []);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={popModal}
        onRequestClose={() => {}}>
        <View style={[styles.centeredView, {}]}>
          <View style={styles.headerModal}>
            <Entypo
              name={'cross'}
              size={28}
              color={'#000'}
              onPress={() => closeModal(true)}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <SimpleLineIcons name={'user'} size={82} color={'#000'} />
              <Text style={styles.header}>{name}</Text>
            </View>
            <AntDesign
              name={'logout'}
              size={22}
              color={'#000'}
              onPress={() => {
                closeModal(true);
                logOut();
              }}
            />
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                closeModal(true);
                nav.push('Profile');
              }}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={'user-circle'} size={42} color={'#000'} />
              </View>
              <Text style={styles.smallText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                closeModal(true);
                nav.push('Transactions');
              }}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={'file-alt'} size={42} color={'#000'} />
              </View>
              <Text style={styles.smallText}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={'lock'} size={42} color={'#000'} />
              </View>
              <Text style={styles.smallText}>Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                closeModal(true);
                nav.push('Withdraw');
              }}>
              <View style={styles.iconBox}>
                <FontAwesome5
                  name={'money-bill-alt'}
                  size={38}
                  color={'#000'}
                />
              </View>
              <Text style={styles.smallText}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={'info-circle'} size={42} color={'#000'} />
              </View>
              <Text style={styles.smallText}>How to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                closeModal(true);
                nav.push('Agent');
              }}>
              <View style={styles.iconBox}>
                <MaterialIcons name={'support-agent'} size={42} color={'#000'} />
              </View>
              <Text style={styles.smallText}>Be an Agent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={'share-alt'} size={42} color={'#000'} />
              </View>
              <Text style={styles.smallText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 24,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'AveriaSansLibre-Regular',
  },
  submitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6b75c3',
    margin: 20,
    borderRadius: 6,
    width: '40%',
  },
  box: {flexDirection: 'row', alignItems: 'center', margin: 20},
  boxContainer: {
    marginTop: height - 600,
    alignSelf: 'center',
  },
  headerModal: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingBottom: 30,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    height: 200,
    paddingHorizontal: 10,
    paddingTop: 10,
    elevation: 5,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 5,
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});

export default MenuModal;
