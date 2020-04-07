import styled from 'styled-components'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const IntroductionWapper = styled.View`
width:100%;
height:500px;
flex-direction:column;
justify-content:flex-start;
align-content:center;
`

export const Descirption = styled.View`
width: 100%;
flex-direction:column;
justify-content:space-around;
align-content:center;
`

export const DescirptionStack = styled.View`
width:100%;
height:30%;
flex-direction:row;
justify-content:space-around;
align-content:center;
`

export const Divider = styled.View`
width:90%;
border-color:black;
height:2px;
background-color:black;
margin:0 5%;
`
export const Date = styled.View`
width:100%;
height:30%;
flex-direction:column;
justify-content:space-around;
align-content:center;
`

export const ContactWapper = styled.View`
width:100%;
flex-direction:column;
justify-content:space-around;
align-content:center;
` 