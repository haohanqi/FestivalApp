import React from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native'
import {ContactWapper} from './style'
import { AntDesign,MaterialIcons } from '@expo/vector-icons';


const ContactItem =({name,email,phone})=>{
    return (
        <View style={styles.contactItemWapper}>
            <Text style={styles.contactText}>{name}</Text>
           <View style={styles.contactStack}> 
                 <MaterialIcons name='email' size={25}/>
                 <Text style={styles.contactText}>: {email}</Text> 
           </View>
           <View style={styles.contactStack}>
                 <AntDesign name='phone' size={25}/>
                 <Text style={styles.contactText}>: {phone}</Text>
           </View>
        </View>
    )
}

export default Contact =()=>{
    return (
        <ScrollView style={{backgroundColor:'pink'}}>
            <ContactWapper>
                <ContactItem name='Music Festival Contact' email='haohanqiharry@gmail.com' phone='647-829-5577'/>
                <ContactItem name='Georgian Collage' email='haohanqiharry@gmail.com' phone='647-829-5577'/>
                <ContactItem name='Musican Team' email='haohanqiharry@gmail.com' phone='647-829-5577'/>
                <ContactItem name='Media' email='haohanqiharry@gmail.com' phone='647-829-5577'/>
            </ContactWapper>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contactItemWapper:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center',
        width:'90%',
        height:150,
        backgroundColor:'white',
        marginHorizontal:'5%',
        marginTop:'5%',
        marginBottom:'5%',
        paddingLeft:'5%',
        borderRadius:5,
    },

    contactText:{
        fontSize:18,
        fontWeight:'bold',

    },

    contactStack:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
    }


})


