import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import { Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import {Avatar,Title,Description,IconWapper} from './style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {checkFaceBookIcon,checkInsIcon,checkTwIcon,checkImage}from '../utils/checkData'
export default  ArtistListItem = ({item, navigation}) => {    

return(

    <View>
        <WingBlank size='lg'>
              
            <Flex style={{backgroundColor:'#181818'}} direction='row' align='center' justify='start'>
            
                <Flex.Item flex={1}> 
                    {checkImage(item, Avatar)}   
                </Flex.Item > 
              
                <Flex.Item flex={4}> 
                    <WingBlank size='lg'>
                     <Flex direction='column' align='start'>
                
                         <Flex.Item flex={2}>
                                <Title>{item.name}</Title>
                         </Flex.Item>
                
                        <Flex.Item flex={1}>
                                <IconWapper>       
                                    {checkFaceBookIcon(item,'#3B5998')}{checkTwIcon(item,'#5BC0DE')}{checkInsIcon(item,'#458eff')}
                                </IconWapper> 
                        </Flex.Item>

                    </Flex>
                    </WingBlank>
                </Flex.Item>

                <Flex.Item flex={1}>
                      <AntDesign name='right' size={wp('5%')} color='white' onPress={()=>{navigation.navigate('artistDetail',{id:`${item._id}`})}}/>
                </Flex.Item>
               
            </Flex>
        </WingBlank>
        <WhiteSpace/>
    </View>
)
    
   
}
//<Avatar source={{uri:`${item.image}`}}/>