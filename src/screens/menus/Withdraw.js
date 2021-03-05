import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Withdraw = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackHeader
        navigation={props.navigation}
        title={'Withdraw'}
        showText={false}
        smallTitle={''}
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.redBox} onPress={() => setIndex(0)}>
            <Image
              source={require('../../assets/images/g-pay.png')}
              style={{height: 50, width: 60, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.redBox} onPress={() => setIndex(1)}>
            <Image
              source={require('../../assets/images/paytm.png')}
              style={{height: 50, width: 60, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.redBox} onPress={() => setIndex(2)}>
            <FontAwesome
              name={'bank'}
              size={28}
              color={'#000'}
              style={{paddingLeft: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.redBox} onPress={() => setIndex(3)}>
            <Image
              source={require('../../assets/images/img.png')}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        {index === 0 && (
          <View style={[styles.box, {marginVertical: 30}]}>
            <View style={styles.box}>
              <TextInput
                placeholder={'Enter the Amount'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <View style={styles.box}>
              <TextInput
                placeholder={'Gpay Id'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.redBox,
                {
                  width: '50%',
                  alignSelf: 'center',
                  borderRadius: 50,
                  backgroundColor: colors.primary,
                },
              ]}>
              <Text style={styles.boxText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {index === 1 && (
          <View style={[styles.box, {marginVertical: 30}]}>
            <View style={styles.box}>
              <TextInput
                placeholder={'Enter the Amount'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <View style={styles.box}>
              <TextInput
                placeholder={'Paytm Number'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.redBox,
                {
                  width: '50%',
                  alignSelf: 'center',
                  borderRadius: 50,
                  backgroundColor: colors.primary,
                },
              ]}>
              <Text style={styles.boxText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {index === 2 && (
          <View style={[styles.box, {marginVertical: 30}]}>
            <View style={styles.box}>
              <TextInput
                placeholder={'Enter the Amount'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <View style={styles.box}>
              <TextInput
                placeholder={'Bank Account Number'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <View style={styles.box}>
              <TextInput
                placeholder={'IFSE Code'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <View style={styles.box}>
              <TextInput
                placeholder={'Account Holder Name'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.redBox,
                {
                  width: '50%',
                  alignSelf: 'center',
                  borderRadius: 50,
                  backgroundColor: colors.primary,
                },
              ]}>
              <Text style={styles.boxText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {index === 3 && (
          <View style={[styles.box, {marginVertical: 30}]}>
            <View style={styles.box}>
              <TextInput
                placeholder={'Enter the Amount'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <View style={styles.box}>
              <TextInput
                placeholder={'PhonePe Id'}
                style={{
                  width: '100%',
                  fontFamily: 'AveriaSansLibre-Regular',
                  fontSize: 16,
                }}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.redBox,
                {
                  width: '50%',
                  alignSelf: 'center',
                  borderRadius: 50,
                  backgroundColor: colors.primary,
                },
              ]}>
              <Text style={styles.boxText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  boxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 20,
  },
  headerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  redBox: {
    backgroundColor: '#F8673A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
  },
  redBoxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 18,
  },
});

export default Withdraw;
