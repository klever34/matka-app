import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import { colors } from '../constants';

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.img} />
      <Text style={styles.appName}>Matka App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
  appName: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 48,
    marginTop: -30
  },
});

export default SplashScreen;
