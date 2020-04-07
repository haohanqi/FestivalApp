import styled from 'styled-components'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const DetailWapper = styled.View`
flex-direction:column;
justify-content:center;
align-items:stretch;
height:${hp('95%')};

`

export const HeaderWapper = styled.View`
flex:4;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#FCBFF7;
width:100%;
`

export const BioWapper = styled.View`
flex:4;
flex-direction:column;
margin:0% auto;
width:100%
padding:5% 5%;
`

export const Picture = styled.Image`
margin-top:6%;
width:${wp('30%')};
height:${wp('30%')};
border-radius:${wp('30%')};
resizeMode: cover;
`

export const ArtistTitle = styled.View`
flex:1;
justify-content:center;
align-items:center;
width:90%;
margin:3% auto;
`

export const Contact = styled.View`
flex:1;
justify-content:center;
align-items:center;
width:65%;
background-color:white; 
margin:3% auto;
border-radius:${wp('5%')};
`

export const PerformanceWapper = styled.View`
flex-direction:column;
justify-content:center;
align-content:center;
background-color:#F86E6E;


`