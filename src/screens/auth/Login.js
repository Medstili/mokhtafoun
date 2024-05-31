import { Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Login</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("PostFeed")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}
