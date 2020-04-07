import React from 'react'
import {Text,View,FlatList} from 'react-native'
import {SearchBar} from '@ant-design/react-native'
import {PerformanceWapper} from './style'
import PeformanceDateItem from '../components/PeformanceDateItem'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';
import {useState,useEffect} from 'react'

const PERFORMANCELIST = gql`{
performanceMany{
    _id
    datetime
    stage{
      _id
      name
    }
    artist{
      _id
      name
    }
  }
 }`

export default Performance =()=>{

    const mdata = ["per1","per2","per3"]
    
    const [performanceData,setPerformanceData]=useState(null)
    const [searchInput, setSearchInput] = useState('')
    const [searchData,setSearchData]=useState([])



    const {data, loading ,error,refetch} = useQuery(PERFORMANCELIST,
        {onCompleted:({PERFORMANCELIST})=>{setPerformanceData(data)}},
      )



    const renderData=()=>{
      if(loading){
        return <Text>loading</Text>
    }

    if(error){
        return <Text>some error happened</Text>
    }

    // if(data){
    //   return <FlatList data={performanceData?performanceData.performanceMany:[]} renderItem={({item})=><PeformanceDateItem item={item}/>}/>
    // }

    if(!searchInput){
      return <FlatList data={performanceData?performanceData.performanceMany:[]} keyExtractor={item => item._id} renderItem={({item})=><PeformanceDateItem item={item}/>}/>
    }else{
      if(searchInput && searchData.length<1){
          return  <Text style={{color:'black'}}>No Such Artists</Text>

      }else{
        if(searchInput && searchData.length>0){
          console.log(searchData)
          return <FlatList data={searchData}  keyExtractor={item => item._id} renderItem={({item})=><PeformanceDateItem item={item}/>}/>
        }
      }
    }
    }

    const handleSearchInput =(input)=>{
      setSearchInput(input)
  
      const result = performanceData.performanceMany.filter(
        ({artist})=>artist.name.includes(input)
      )
       setSearchData(result)
  
    }
      
      //console.log(performanceData)

    return (

        <PerformanceWapper>
            <SearchBar cancelText='Cancel' onChange={handleSearchInput} placeholder='Please Entry Artist Name'/> 
            {
//              <FlatList data={performanceData?performanceData.performanceMany:[]} renderItem={({item})=><PeformanceDateItem item={item}/>}/>
               renderData()
            }
        </PerformanceWapper>
    )
}