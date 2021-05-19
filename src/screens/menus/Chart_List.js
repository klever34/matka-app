import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet,TouchableHighlight } from 'react-native'
import BackHeader from '../../components/BackHeader'
import { colors, baseUrl } from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const Chart_List = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetchallgame()
        // return () => {

        // }
    }, [])

    const fetchallgame = async () => {
        try {
            const value = await AsyncStorage.getItem('@user_token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
            const response = await axios.get(
                `${baseUrl}chartList`,
            );
            console.log(response.data.data);
            setdata(response.data.data)
            // setLoading(false);
        } catch (error) {
            console.log(error);
            //setView(true);
        }
    }

    const renderallgame = () => {
       return data.map((item) => {
            return (
                <View key={item.id} style={styles.box}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:300}}>
                            <Text>Open Time: {item.open_time}</Text>
                            <Text>Close Time: {item.close_time}</Text>
                        </View>
                    </View>
                    <TouchableHighlight underlayColor = {'#f5ce93'} 
                        onPress={()=>props.navigation.navigate('chartdt',{
                            gmid:item.id,
                            gmname:item.name
                        })} 
                        style={{justifyContent:'center'}}>
                        <AntDesign name={`rightcircle`} size={25} />
                    </TouchableHighlight>
                </View>
            )
        })
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackHeader
                navigation={props.navigation}
                title={'Games List'}
                showText={false}
                smallTitle={'Select Your Game'}
            />
            {renderallgame()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.primary,
        marginTop: 2,
        padding: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Chart_List


