import React from 'react'
import {View} from 'react-native'
import {  Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import {Avatar,Title,IconWapper} from './style'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
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
                                    {checkFaceBookIcon(item,'#3B5998', wp('5%'))}
                                    {checkTwIcon(item,'#5BC0DE', wp('5%'))}
                                    {checkInsIcon(item,'#458eff', wp('5%'))}
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