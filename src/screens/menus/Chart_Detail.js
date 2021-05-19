import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import BackHeader from '../../components/BackHeader'
import { colors, baseUrl } from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const Chart_Detail = (props) => {
    const [data, setdata] = useState([])
    const { gmid, gmname } = props.route.params;
    useEffect(() => {
        fetchdetail()
        // return () => {

        // }
    }, [])

    const fetchdetail = async () => {
        try {
            const value = await AsyncStorage.getItem('@user_token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
            const response = await axios.get(
                `${baseUrl}chartDetail/${gmid}`,
            );
            console.log(response.data.data.numbers);
            if(response.data.status){
                setdata(response.data.data.numbers)
            }            
            // setLoading(false);
        } catch (error) {
            console.log(error);
            //setView(true);
        }
    }

    const renderallgame = () => {
        if(data.length>0){
            console.log('run')
        return data.map((item,index) => {
            return (
                <View key={index} style={[styles.headerRow, { marginVertical: 3, elevation: 5 }]}>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>{item[0]}</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>{item[1]}</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>
                            {item[2]}
                        </Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>{item[3]}</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>{item[4]}</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>{item[5]}</Text>
                    </View>
                </View>
            )
        })
    }else{
        return(<Text>Sorry No Data Found</Text>)
    }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackHeader
                navigation={props.navigation}
                title={gmname}
                showText={false}
                smallTitle={'Select Your Game'}
            />
            <View style={{ flex: 1 }}>
                <View
                    style={[styles.headerRow, { borderWidth: 1, borderColor: '#000' }]}>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>Mon</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>Tues</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>Wed</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>Thrus</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>Fri</Text>
                    </View>
                    <View style={styles.nobox}>
                        <Text style={styles.noboxText}>Sat</Text>
                    </View>
                </View>
                {renderallgame()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
});

export default Chart_Detail
