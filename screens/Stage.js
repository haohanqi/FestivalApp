import React, {useState} from 'react';
import {View,FlatList} from 'react-native'
import {ActivityIndicator} from '@ant-design/react-native';
import StageItem from '../components/StageItem'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';


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

    //console.log(stage?stage.stageMany:"none")
    
const renderData = ()=>{

    if(error){

    }

    if(loading){
      return <View style={{marginTop:200, marginLeft:'40%',marginRight:'40%',width:100,height:100,backgroundColor:'white'}}>
                <ActivityIndicator toast text='Loading' color='white'  size='large'/>
            </View>
    }

    if(data){
      return <FlatList data={stage?stage.stageMany:[]}   keyExtractor={item => item._id} renderItem={({item})=><StageItem navigation={navigation} name={item.name} stageId={item._id}/>}/>
    }

}

return (
  <View>

    {
      renderData()
    }
      
  </View>
)

}

Stage.navigationOptions={
  title: 'STAGES',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}
// {
//   stage ? stage.stageMany.map(({name,_id})=>{return <StageItem key={_id} navigation={navigation} name={name} stageId={_id}/>}): <Text>none</Text>
// }