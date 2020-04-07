import React from 'react';
import {View,Text,FlatList,} from 'react-native'
import {Flex,SearchBar} from '@ant-design/react-native';
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';
import {useState,useEffect} from 'react'
import ArtistListItem from '../components/ArtistListItem'

const ARTISTS = gql`{
  artistMany{
     _id
     name
     image 
     facebook
     twitter
     instagram       
 }
 }`
 
export default Artists = (props)=>{
  const [artistData,setArtistdata] = useState({})
  const [searchInput, setSearchInput] = useState('')
  const [searchData,setSearchData]=useState([])
  const {navigation} = props   
  const {data, loading ,error} = useQuery(ARTISTS,{
    onCompleted:({ARTISTS})=>{ setArtistdata(data)}
   }
  )
  
  
  const RenderData = ()=>{
    if(error){
      return <Text style={{color:'white'}}>Error</Text>
    }

    if(loading){
      return <Text style={{color:'white'}}>Loading....</Text>
    }

    if(!searchInput){
        return <FlatList data={artistData.artistMany}          
                           renderItem={
                             ({item})=><ArtistListItem item={item} navigation={navigation}/>
                            }
                            keyExtractor={item => item._id}

                            >
              </FlatList> 
      }else{
      
          if(searchInput && searchData.length<1){
             return  <Text style={{color:'white'}}>No Such Artists</Text>
          }else{
            if(searchInput && searchData.length>0){
              return <FlatList data={searchData}          
                               renderItem={
                                   ({item})=><ArtistListItem item={item} navigation={navigation}/>
                                  }
                                  keyExtractor={item => item._id}

                      >
                      </FlatList> 
            }
          }
      }
}

  const handleSearchInput =(input)=>{
    setSearchInput(input)

    const result = artistData.artistMany.filter(
      ({name})=>name.includes(input)
    )
     setSearchData(result)

  }



  return (
    <View style={{backgroundColor:'black', height:'100%' }}>
    <Flex direction='column' justify='center' align='stretch'>
          
          <SearchBar cancelText='Cancel' onChange={handleSearchInput} placeholder='Please Entry Artist Name'/>
          
          {
            RenderData()
          }
    </Flex>
    </View>
   )

}

Artists.navigationOptions={
  title: 'ARTISTS',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}

