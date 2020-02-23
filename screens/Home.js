import React, { Component } from 'react';
import {View,Button,Text} from 'react-native'


export default Home =(props)=>{
    const {navigation} =props
   
    function handleLinkPress(){
       navigation.navigate('link')
    }

    function handleSettingPress(){
      navigation.navigate('setting')

    }

return (
  <View>
     
      <Text>Home page</Text>
      <Button onPress={handleSettingPress} title="Go to Setting"></Button>
      <Button onPress={handleLinkPress} title="Go to link"></Button>
  </View>
)
  
};




