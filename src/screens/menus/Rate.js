import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import BackHeader from '../../components/BackHeader'
const Rate = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <BackHeader
                navigation={props.navigation}
                title={'Rate'}
                showText={false}
                smallTitle={''}
            />
            <View style={styles.ratearea}>
                <Text style={{
                    textAlign:'center', 
                    fontWeight:"bold",
                    fontSize:20,
                    marginBottom:10 
                }}>Game Rate</Text>
                <Text style={styles.listtext}>1. Single : 10 - 95</Text>
                <Text style={styles.listtext}>2. Jodi : 10 - 950</Text>
                <Text style={styles.listtext}>3. Single Patti : 10 - 1250</Text>
                <Text style={styles.listtext}>4. Double Patti : 10 - 2300</Text>
                <Text style={styles.listtext}>5. Triple Patti : 10 - 6000</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ratearea:{
        elevation:2,
        padding:5,
        margin:5,
    },
    listtext:{
        textAlign:'left', 
        fontSize:18,
        marginLeft:5,
        fontWeight:'bold',
        color:'grey'
    }
});

export default Rate