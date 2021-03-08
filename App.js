import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import AsyncStorage from '@react-native-community/async-storage';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import OTPCode from './src/screens/auth/OTPCode';
import Home from './src/screens/home/Home';
import PlayNow from './src/screens/home/PlayNow';
import {AuthContext} from './context';
import Profile from './src/screens/menus/Profile';
import Transactions from './src/screens/menus/Transactions';
import Wallet from './src/screens/menus/Wallet';
import TimeBazaar from './src/screens/home/TimeBazaar';
import Withdraw from './src/screens/menus/Withdraw';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import CreateProfile from './src/screens/auth/CreateProfile';
import Agent from './src/screens/menus/Agent';
import {fcmService} from './src/alerts/FCMService';
import {localNotificationService} from './src/alerts/LocalNotificationService';
import GameHistory from './src/screens/menus/GameHistory';
import Rates from './src/screens/menus/Rate';
import HowtPlay from './src/screens/menus/HowtPlay';
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="OTPCode" component={OTPCode} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <AuthStack.Screen name="CreateProfile" component={CreateProfile} />
  </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="PlayNow" component={PlayNow} />
    <HomeStack.Screen name="Profile" component={Profile} />
    <HomeStack.Screen name="Transactions" component={Transactions} />
    <HomeStack.Screen name="Wallet" component={Wallet} />
    <HomeStack.Screen name="TimeBazaar" component={TimeBazaar} />
    <HomeStack.Screen name="Withdraw" component={Withdraw} />
    <HomeStack.Screen name="Agent" component={Agent} />
    <HomeStack.Screen name="GameHistory" component={GameHistory} />
    <HomeStack.Screen name="rate" component={Rates} />
    <HomeStack.Screen name="howtplay" component={HowtPlay} />
  </HomeStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={HomeStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);
const App = () => {
  const [showSplash, setShowSplash] = React.useState(null);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    fcmService.registerAppWithFCM();
    // fcmService.subscribeToTournament();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    async function onRegister(token) {
      console.log({token});
      // await AsyncStorage.setItem(`@firebase_token`, token);
    }

    function onNotification(notify) {
      const options = {
        soundName: 'default',
        playSound: true,
      };
      localNotificationService.showNotification(
        new Date().getMilliseconds(),
        notify.title,
        notify.body,
        notify,
        options,
      );
    }

    function onOpenNotification(notify) {}

    return () => {
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);

  useEffect(() => {
    async function getSplashStatus() {
      let isSplash = await AsyncStorage.getItem('@splash_done');
      if (isSplash === null) {
        setShowSplash(true);
        setTimeout(() => {
          setShowSplash(false);
        }, 2000);
      } else {
        setShowSplash(false);
      }
    }
    getSplashStatus();
  }, []);

  const authContext = React.useMemo(() => {
    return {
      signIn: async () => {
        try {
          const value = await AsyncStorage.getItem('@user_token');
          if (value !== null) {
            setUserToken(value);
          } else {
            setUserToken(null);
          }
        } catch (e) {}
      },
      signUp: async () => {
        try {
          const value = await AsyncStorage.getItem('@user_token');
          if (value !== null) {
            setUserToken(value);
          } else {
            setUserToken(null);
          }
        } catch (e) {}
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('@user_token');
          setUserToken(null);
        } catch (e) {}
      },
    };
  }, []);

  React.useEffect(() => {
    async function getToken() {
      try {
        const value = await AsyncStorage.getItem('@user_token');

        if (value !== null) {
          setUserToken(value);
        } else {
          setUserToken(null);
        }
      } catch (e) {}
    }
    getToken();
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

export default App;
