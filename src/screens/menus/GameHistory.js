import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {colors, baseUrl} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const GameHistory = (props) => {
  const [balance, setBalance] = useState('');
  const [showView, setView] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function getHistory() {
      try {
        const value = await AsyncStorage.getItem('@user_token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
        const response = await axios.get(
          `${baseUrl}showHistory?page=${pageNumber}`,
        );
        console.log(response.data);
        if (pageNumber <= 1) {
          setHistory(response.data.data.data);
        } else if (pageNumber > 1) {
          setHistory((history) => [...history, ...response.data.data.data]);
        } else {
        }
        setView(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setView(true);
      }
    }
    getHistory();
  }, [pageNumber]);

  const handleMoreData = () => {
    setPageNumber(pageNumber + 1);
    setLoading(true);
  };

  const renderHistory = ({item}) => {
    return (
      <View style={[styles.headerRow, {marginVertical: 3, elevation: 5}]}>
        <View style={styles.nobox}>
          <Text style={styles.noboxText}>{item.game_name}</Text>
        </View>
        <View style={styles.nobox}>
          <Text style={styles.noboxText}>{item.game_type}</Text>
        </View>
        <View style={styles.nobox}>
          <Text style={styles.noboxText}>
            {item.digits}
          </Text>
        </View>
        <View style={styles.nobox}>
          <Text style={styles.noboxText}>{item.total_amount}</Text>
        </View>
      </View>
    );
  };
  if (showView) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <BackHeader
          navigation={props.navigation}
          title={'Game History'}
          showText={false}
          smallTitle={''}
        />
        <View style={{flex: 1}}>
          <View
            style={[styles.headerRow, {borderWidth: 1, borderColor: '#000'}]}>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Game_Name</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Game_Type</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Bid Number</Text>
            </View>
            <View style={styles.nobox}>
              <Text style={styles.noboxText}>Total Amount</Text>
            </View>
          </View>
          <FlatList
            style={{flex: 1}}
            data={history}
            renderItem={renderHistory}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleMoreData}
            onEndReachedThreshold={0.1}
          />
          {isLoading && (
            <ActivityIndicator size="large" color={colors.primary} />
          )}
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{fontFamily: 'AveriaSansLibre-Regular'}}>Loading...</Text>
      </View>
    );
  }
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
    backgroundColor: colors.primary,
  },
  nobox: {
    padding: 5,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noboxText: {
    fontFamily: 'AveriaSansLibre-Regular',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default GameHistory;
