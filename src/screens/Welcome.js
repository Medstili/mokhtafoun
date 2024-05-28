import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Welcome({navigation}) {
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text>login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Sign Up")}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})