import React from 'react';
import AppNavigator from './navigator/AppNavigator'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {useEffect} from 'react'
import * as Font from 'expo-font'



const client = new ApolloClient({
  uri:`https://desolate-brushlands-02565.herokuapp.com/graphql`
});



export default function App() {
  
useEffect(()=>{ Font.loadAsync(
  'antoutline',
  require('@ant-design/icons-react-native/fonts/antoutline.ttf')
);})
  
  return (
    <ApolloProvider client={client}>
       <AppNavigator/>
    </ApolloProvider>
  )
};


 
