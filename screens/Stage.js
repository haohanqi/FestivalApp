import React, {Component} from 'react';
import {View, Button, Text,ScrollView} from 'react-native'
import StageItem from '../components/StageItem'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';
import {useState,useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler';

const STAGES = gql`{
  stageMany{
    name
    _id
  }
 }`

 

export default Stage = (props)=>{
    const {navigation} =props
    
    const [stage,setStage]=useState(null)
    
    const {data, loading ,error} = useQuery(STAGES,{
      onCompleted:({STAGES})=>{setStage(data)}
     }
  )

    console.log(stage?stage.stageMany:"none")
    
    
    

    function handleHomePress(){
      navigation.navigate('performance')
  }

  function handleLinkPress(){
    navigation.navigate('artists')
  }


return (
  <View>

    <FlatList data={stage?stage.stageMany:[]}   keyExtractor={item => item._id} renderItem={({item})=><StageItem navigation={navigation} name={item.name} stageId={item._id}/>}/>
      
  </View>
)

}
// {
//   stage ? stage.stageMany.map(({name,_id})=>{return <StageItem key={_id} navigation={navigation} name={name} stageId={_id}/>}): <Text>none</Text>
// }