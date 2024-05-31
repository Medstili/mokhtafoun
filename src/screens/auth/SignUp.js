import { Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

export default function SignUp({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Sign Up</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>Next</Text>
        </TouchableOpacity>
    </View>
  )
}
