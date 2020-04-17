import React, {useState} from 'react'
import {Text,View,FlatList} from 'react-native'
import {SearchBar,ActivityIndicator} from '@ant-design/react-native'
import {PerformanceWapper} from './style'
import PeformanceDateItem from '../components/PeformanceDateItem'
import Nosuch from '../components/Nosuch'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';

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

    //const mdata = ["per1","per2","per3"]
    
    const [performanceData,setPerformanceData]=useState(null)
    const [searchInput, setSearchInput] = useState('')
    const [searchData,setSearchData]=useState([])



    const {data, loading ,error,refetch} = useQuery(PERFORMANCELIST,
        {onCompleted:({PERFORMANCELIST})=>{setPerformanceData(data)}},
      )



    renderData=()=>{
       if(loading){
            return (<View style={{marginLeft:'40%',marginRight:'40%',width:100,height:100,backgroundColor:'white'}}>
                       <ActivityIndicator toast text='Loading' color='white'  size='large'/>
                   </View>)
           }

        if(error){
              return <Text>some error happened</Text>
        }
    
         if(!searchInput){
              return <FlatList data={performanceData?performanceData.performanceMany:[]} keyExtractor={item => item._id} renderItem={({item})=><PeformanceDateItem item={item}/>}/>
         }else{
               //console.log("search")
                if(searchInput && searchData.length<1){
                      //return <View > <Text style={{fontSize:20,fontWeight:'bold'}}>No Such Artists</Text></View>
                       return <Nosuch/>
                }else{
                    if(searchInput && searchData.length>0){
                      //console.log(searchData)
                      return <FlatList data={searchData}  keyExtractor={item => item._id} renderItem={({item})=><PeformanceDateItem item={item}/>}/>
                }
          }
        }
      }

    const handleSearchInput =(input)=>{
     // console.log(input)
      setSearchInput(input)
      const result = performanceData.performanceMany.filter(
        ({artist})=>artist.name.includes(input)
      )
      //console.log(result)
       setSearchData(result)
  
    }
      
      //console.log(performanceData)

    return (
     <View>
       <SearchBar cancelText='Cancel' onChange={handleSearchInput} placeholder='Please Entry Artist Name'/> 
    
        <PerformanceWapper>  
            {
               renderData()
            }
        </PerformanceWapper>

      </View>
    )
}

Performance.navigationOptions={
  title: 'PERFORMANCE',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}