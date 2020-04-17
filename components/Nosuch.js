import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default Nosuch =()=>{
return (
    <View style={styles.wapper}>
        <Text style={styles.worningText}>No such Artist</Text>
        <Text style={styles.worningText}>Please try other Artists</Text>
    </View>
)
}

const styles = StyleSheet.create({
    wapper:{
        width:'60%',
        height:120,
        backgroundColor:'white',
        textAlign:'center',
        paddingTop:'5%',
        marginLeft:'20%',
        marginRight:'20%',
    },

    worningText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'10%'
        
    }
})