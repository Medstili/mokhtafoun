import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ForgotPassword({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>ForgotPassword</Text>
      <TouchableOpacity onPress={()=>navigation.push()}>
        <Text>Next</Text>
        </TouchableOpacity>
    </View>
  )
}
