import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {IntroductionWapper,Descirption,DescirptionStack,Divider,Date} from './style'
import { ScrollView } from 'react-native-gesture-handler';

const DescirptionItem = ({number,title})=>{
    return(
        <View style={styles.DescirptionItemWapper}>
          <Text style={styles.itemNumberText}>{number}</Text>
          <Text style={styles.itemTitleText}>{title}</Text>
        </View>
    )
}

export default Introduction =()=>{
    return (
        <ScrollView style={{backgroundColor:'pink'}}>
            <IntroductionWapper>
                <Text style={styles.title}>Music Festival</Text>
                <Descirption>
                    <Text style={styles.descirptionText}>Best Music Festival is coming to Barrie</Text>
                    <Text style={styles.descirptionText}>Famous Artists come from all over the world </Text>
                    <Divider/>
                    <DescirptionStack>
                         <DescirptionItem number='200+' title='MUSICIANS'/>
                         <DescirptionItem number='1000+' title='AUDIENCE'/>
                    </DescirptionStack>
                    <DescirptionStack>
                        <DescirptionItem number='20+' title='MEIDAS'/>
                        <DescirptionItem number='24H' title='STAGES'/>
                    </DescirptionStack>
                    <Divider/>
                </Descirption>

                <Date>
                    <Text style={styles.title}>DATE</Text>
                    <Text style={styles.dateText}>2020 07 18</Text>
                    <Text style={styles.dateText}>2020 07 19</Text>
                </Date>



            </IntroductionWapper>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    title:{
      fontSize:30,
      textAlign:"center",
      color:"black",
      marginTop:'4%',
      fontWeight:'bold',
    },

    descirptionText:{
        marginTop:'5%',
        marginBottom:'5%',
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
    },
    DescirptionItemWapper:{
        marginTop:'5%',
        paddingBottom:'10%',
        height:'70%',
        width:'35%',
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center',
        backgroundColor:'white',
        borderRadius:5,
    },
    itemNumberText:{
        fontSize:25,
        color:"#F97EEF",
        textAlign:'center',
        fontWeight:'bold'
    },
    itemTitleText:{
        fontSize:20,
        color:"black",
        textAlign:'center',
        fontWeight:'bold'
    },
    dateText:{
        fontSize:20,
        color:"#F97EEF",
        textAlign:'center',
        fontWeight:'bold'
    }
})
