import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {PerformanceItemWapper} from './style'

export default PerformanceItem = ({navigation,imageSrc,name,date,artistId})=>{
    const dateFormat = new Date (date).toLocaleString()
    const [dates,times] = dateFormat.split(", ")
   // console.log(artistId)

    return (
        <PerformanceItemWapper>
            <Text  style={styles.name}>{name}</Text>
            <Text style={{fontWeight:'bold'}}>Start Time</Text>
          <View style={styles.dateWapper}>  
            <Text style={styles.date}>{dates}</Text>
            <Text style={styles.date}>{times}</Text>
          </View> 
            <TouchableOpacity  style={styles.checkButton} onPress={()=>{navigation.navigate('artistDetail',{id:artistId})}}>
                <Text style={styles.buttonText}>CHECK</Text>
            </TouchableOpacity>        
        </PerformanceItemWapper>
    )
}

const styles = StyleSheet.create({
    dateWapper:{
       flexDirection:'column',
       justifyContent:'center',
       alignContent:'center',
       borderColor:'#F86E6E',
       borderWidth:1,
       width:'85%',
       height:'20%',  
       marginLeft:'6%',     
    },
    name:{
        fontSize:16,
        fontWeight:'bold',
    },
    date:{
        color:"#F86E6E",
        fontWeight:'bold',
        width:'100%',
        textAlign:'center',
        marginBottom:'2%',
    },
    checkButton:{
        height:24,
        width:"30%",
        backgroundColor:'#F86E6E',
        borderRadius:5,
    },
    buttonText:{
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:24,
        fontSize:10,
    }

})