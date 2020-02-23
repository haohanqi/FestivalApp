import React,{useState}from 'react'
import {Text,ScrollView,StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {gql} from 'apollo-boost';
import { useQuery} from '@apollo/react-hooks';
import {HeaderWapper,BioWapper,DetailWapper,Picture,ArtistTitle,Contact} from './style'
import {IconWapper} from '../components/style'
import {checkFaceBookIcon,checkImage,checkInsIcon,checkTwIcon} from '../utils/checkData'
import { AntDesign } from '@expo/vector-icons';


export default ArtistDetail = ({navigation})=>{
   
   //console.log(navigation.getParam('id','none'))
   const id = navigation.getParam('id','none')
   
   const ArtistInfo = gql`
     query artistById($_id:MongoID!){
        artistById(_id:$_id){
            name
            bio
            website
            email
            image
            facebook
            twitter
            instagram    

        }
     }
   `

    const {data,loading,error}=useQuery(ArtistInfo,{variables:{_id:id}})

    console.log(data)
    
    const renderData = ()=>{
       if(data){
          return (
            <DetailWapper>
                
               <HeaderWapper>
                     {checkImage(data.artistById,Picture)}
                     
                     <ArtistTitle><Text style={style.name}>{data?data.artistById.name:''}</Text></ArtistTitle>
                     
                     <Contact>
                        <Text style={style.contact}>Email: {data.artistById.email?data.artistById.email:'No Email Provided'}</Text>
                     </Contact>
                     
                     <Contact><Text style={style.contact}>Link: {data.artistById.website?data.artistById.website:'No WebSite Provided'}</Text></Contact>
               </HeaderWapper>
          
               <BioWapper>
                   <Text style={style.introduction}>Introduction</Text>
                   <Text style={style.info}>{data.artistById.bio?data.artistById.bio:'No Bio Provided'}</Text>
               </BioWapper>

              <IconWapper>
                  {checkFaceBookIcon(data.artistById,'#3B5998')}
                  {checkInsIcon(data.artistById,'#458eff')}
                  {checkTwIcon(data.artistById,'#5BC0DE')}
              </IconWapper>
            
           </DetailWapper>
          )
          
       }else{
          return <Text>No Data is Avaliable</Text>
       }

    }

        
   return (
      <ScrollView>
         {
            renderData()
         }
      </ScrollView>
     
    )


}


const style = StyleSheet.create({
   name:{
      fontWeight:'bold',
      fontSize: wp('6%'),
   },

   contact:{
      fontWeight:'bold',
      fontSize:wp('3.5%'),
      color:'#1232FF'
   },

   introduction: {
      fontWeight:'bold',
      fontSize: wp('4%'),
      marginBottom:'2%',
   },

   info:{
      fontWeight:'bold',
      fontSize:wp('3.5%'),
      letterSpacing:1.5
   }


   
})
