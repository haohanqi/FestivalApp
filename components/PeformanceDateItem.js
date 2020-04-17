import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {WingBlank,WhiteSpace} from '@ant-design/react-native'
import {PerformanceDateItemWapper,Avatar} from './style'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';

const PERFORMANCE = gql`
query performanceMany($filter:FilterFindManyPerformanceInput){
   performanceMany(filter: $filter) {
    datetime
    stage{
      name
    }
  }
 }`

export default PerformanceDateItem =({item})=>{
    const {artist,stage} = item
   // const mdata=["stage1","stage2","stage3"]

    const {data, loading ,error,refetch} = useQuery(PERFORMANCE,
        {variables:{filter:{artistId:artist._id}}}) 

    //console.log(data?data.performanceMany:'none')

    const renderData=()=>{
        if(loading){
            return  
        }

        if(error){
            return <Text>some error happened</Text>
        }

        if(data){
            return data.performanceMany.map((item,index)=>{ return <ArtistPerformance key={index} item={item}/>})
        }
    }

    return (
        <WingBlank>
        <WhiteSpace/>
        <PerformanceDateItemWapper>
          <View style={styles.atristWapper}>
            <Avatar style={{marginLeft:0,marginTop:0,marginRight:20}} source={{uri:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>
            <Text style={styles.artistName} flex={2}>{artist.name}</Text>
          </View>
          <Text style={{fontWeight:'bold',fontSize:19}}>Performance Schedul</Text>
          <WhiteSpace/>
           {
               //data?data.performanceMany.map((item,index)=>{ return <ArtistPerformance key={index} item={item}/>}):[]
               renderData()
           }
        </PerformanceDateItemWapper>
        <WhiteSpace/>
        </WingBlank>
    )
}

const ArtistPerformance = ({item})=>{
    const {name}=item.stage
    const {datetime} =item
    const dateFormat = new Date (datetime).toLocaleString()
    const [dates,times] = dateFormat.split(", ")
    return (
        <WingBlank>
        <WhiteSpace/>
        <View style={styles.artistPerformanceWapper}>
           <Text  style={{color:'black',fontWeight:'bold',fontSize:16,marginVertical:'2%'}}>{name}</Text>
           <Text  style={styles.artistPerformanceText}>Date: {dates}</Text>
           <Text  style={styles.artistPerformanceText}>Time: {times}</Text>        
        </View>
        <WhiteSpace/>
        </WingBlank>
    )
}

const styles = StyleSheet.create({
    atristWapper:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
    },
    artistName:{
        fontSize:15,
        fontWeight:'bold',
        marginTop:'3.5%',
        textAlign:'center',
    },
    artistPerformanceWapper:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'center',
        width:'80%',
        backgroundColor:'pink',
        paddingLeft:'5%',
        borderRadius:5
    },
    artistPerformanceText:{
        width:'100%',
        fontWeight:'bold',
        marginTop:'2%',
        marginBottom:'2%',
        color:'white',
    }

    

})