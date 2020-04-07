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


export const StageItemWapper = styled.View`
width:100%;
height:370px;
padding-left:2%;
flex-direction:column;
justify-content:space-around;
align-content:flex-start;
background-color:pink;
border-radius:10px;
shadowColor: #000;
shadowOffset: {
	width: 0,
	height: 5,
};
shadowOpacity: 0.34;
shadowRadius: 6.27;
elevation: 10;
`

export const StageTitle= styled.Text`
font-size:30px;
margin-top:5%;
margin-bottom:7%;
margin-left:2%;
font-weight:bold;
`

export const PerformanceItemWapper = styled.View`
flex-direction:column;
justify-content:space-around;
align-content:center;
margin-left:10px;
margin-right:10px;
padding-left:10px;
height:225px;
width:180px;
background-color:white;
border-radius:10px;
`

export const PerformanceDateItemWapper=styled.View`
flex-direction:column;
justify-content:flex-start;
align-content:center;
width:100%;
padding:3% 3%;
border-radius:10px;
background-color:white;
shadowColor: #000;
shadowOffset: {
	width: 0,
	height: 5,
};
shadowOpacity: 0.34;
shadowRadius: 6.27;
elevation: 10;
`

