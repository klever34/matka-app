import React from 'react'
import { View, Text,StyleSheet, ScrollView } from 'react-native'
import BackHeader from '../../components/BackHeader'

const HowtPlay = (props) => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <BackHeader
            navigation={props.navigation}
            title={'How to Play'}
            showText={false}
            smallTitle={''}
        />
        <View style={styles.areahow}>
            <Text style={{fontSize:25, fontWeight:'bold',}}>Deposit/Withdrawal</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>1. Withdrawal and  deposit min 500rs.</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>2. send screenshot in whatsapp after deposit.</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>3. Point will be added within 15 minutes of deposit.</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>4. Withdrawal request time 11.30am to 3.00pm</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>5. Request process may takes upto 30 minutes and money will be transferred to account-phonepe-paytm-google pay-whichever is registered by you with us.</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>6. deposit time 10.00am to 11.00pm.</Text>
        </View>
        <View style={styles.areahow}>
            <Text style={{fontSize:25, fontWeight:'bold',}}>जमा / निकासी</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>1. निकासी और जमा 500 मिनट।.</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>2. जमा करने के बाद व्हाट्सएप में स्क्रीनशॉट भेजें।.</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>3. डिपॉजिट जमा होने के 15 मिनट के भीतर जुड़ जाएगा।</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>4. वापसी का समय 11.30 बजे से अपराह्न 3.00 बजे तक</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>5. अनुरोध प्रक्रिया में 30 मिनट तक का समय लग सकता है और धनराशि खाते-फोनपे-पेटीएम-गूगल पे-व्हाट्सएप पर स्थानांतरित कर दी जाएगी जो आपके द्वारा हमारे साथ पंजीकृत है।</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.listitem}>6. समय प्रातः 10.00 बजे से 11.00 बजे तक।.</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    areahow:{
        borderWidth:2,
        padding:7,
        marginVertical:5
    },
    listitem:{
        fontSize:18,
        fontFamily:'Roboto-Light',
        marginLeft:5
    }
});

export default HowtPlay
