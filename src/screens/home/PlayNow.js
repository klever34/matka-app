import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {colors} from '../../constants/index';

const PlayNow = (props) => {
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              backgroundColor: 'red',
              padding: 20,
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.header}>Time Bazaar Open Games</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'single',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/single-die.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Single</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'jodi',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Jodi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'single-patti',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/single-patti.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Single Patti</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'double-patti',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/double-patti.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Double Patti</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'yellow',
              padding: 20,
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.header}>Time Bazaar Closed Games</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'single',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/single-die.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Single</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'single-patti',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Single Patti</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'double-patti',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/double-patti.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Double Patti</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                props.navigation.push('TimeBazaar', {
                  gameType: 'tripple-patti',
                })
              }>
              <View style={styles.iconBox}>
                <Image
                  source={require('../../assets/images/tripple-patti.png')}
                  style={{height: 70, width: 50, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.smallText}>Tripple Patti</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  smallText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'AveriaSansLibre-Regular',
  },
  header: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default PlayNow;
