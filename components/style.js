import styled from 'styled-components'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const Avatar = styled.Image`
        width: ${wp('12%')};
        height: ${wp('12%')};
        resizeMode: cover;
        border-radius:${wp('12%')};
        margin: 5% auto;
`

export const Title = styled.Text`
font-weight:bold;
color:white;
margin-top:5%;
margin-bottom:5%;
font-size:${wp('3.5%')}
`

export const IconWapper = styled.View`
flex:1;
width:100%;
flex-direction:row;
justify-content:space-around;
align-content:center;
margin-bottom:5%;
`


export const Description = styled.Text`
color:white;
`