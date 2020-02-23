import React, {Component} from 'react';
import {View, Button, Text} from 'react-native'

export default Setting = (props)=>{
    const {navigation} =props
    function handleHomePress(){
        navigation.navigate('home')
    }

    function handleLinkPress(){
      navigation.navigate('artists')
    }

return (
  <View>
      <Text>Setting</Text>
      <Button onPress={handleHomePress} title="Go to Home"></Button>
      <Button onPress={handleLinkPress} title="Go to artists"></Button>
  </View>
)

}
