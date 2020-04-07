import React from 'react'
import {FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {StageItemWapper,StageTitle} from './style'
import {WingBlank,WhiteSpace} from '@ant-design/react-native'
import PerformanceItem from './PeformanceItem'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';
import {useState,useEffect} from 'react'

const PERFORMANCE = gql`
query performanceMany($filter:FilterFindManyPerformanceInput){
   performanceMany(filter: $filter) {
    _id
    datetime
    artist {
      _id
      image
      name
    }
  }
 }`

export default StageItem =({navigation,name,stageId})=>{
    //console.log(stageId,name)
    
    const [performanceData,setPerformanceData]=useState(null)
    
    const {data, loading ,error,refetch} = useQuery(PERFORMANCE,
        {variables:{filter:{stageId:stageId}}},
        {onCompleted:({PERFORMANCE})=>{setPerformanceData(data)}},
      
          ) 

   // useEffect(()=>{setPerformanceData(data)},[data])
    

    // console.log(performanceData?performanceData:"none")
    
    const mdata = ["performance1","performance2","performance3"]
    
    return (
        <WingBlank>
        <WhiteSpace/>
        <StageItemWapper>
            <StageTitle>{name}</StageTitle>
            <FlatList data={data?data.performanceMany:[]} horizontal={true}  keyExtractor={item => item._id} renderItem={({item})=><PerformanceItem navigation={navigation} name={item.artist.name} artistId={item.artist._id} date={item.datetime} ></PerformanceItem>}/>
            <TouchableOpacity style={styles.detailsButton} onPress={()=>{navigation.navigate('performance')}}>
                <Text style={styles.buttonText}>See More Details</Text>
            </TouchableOpacity>
        </StageItemWapper>
        <WhiteSpace/>
        </WingBlank>

    )
}

const styles = StyleSheet.create({
    detailsButton:{
        width:'50%',
        height:20,
        marginLeft:'2%',
        marginBottom:'5%',
        marginTop:'2%',
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        fontSize:15,
    }
})