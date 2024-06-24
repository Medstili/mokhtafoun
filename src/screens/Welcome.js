import { View, Text,StyleSheet, Image, TouchableOpacity, } from "react-native";
import React from 'react';
import {primaryColor, secondaryColor,naturalColor, complementatry, alertColor, succesColor} from "../config/Config"

export default function WelcomPagePage ({navigation}) {
    return (
        <View style={s.container}>
      <Image source={require("../../images/logo/logo3.png")} style={s.topImage}/> 
      <Text style={s.title}>MOUKHTAFOUN is your application that helps you find your missing person</Text>
      <View style={{flexDirection:'row', marginTop:30,}}>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}  style={s.btnlogin}>
        <Text style={{color:'#fff', textAlign:'center', fontSize:25,}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}  style={s.btnregister} >
        <Text style={{color:primaryColor, textAlign:'center', fontSize:25,}}>Sign up</Text>
      </TouchableOpacity>
      </View>
    </View>
    )
}

const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topImage: {
      width: '80%',
      height: 100,
    },
    title:{
      fontSize: 18,
      textAlign: 'center',
      color: primaryColor,
      fontWeight: 'bold',
      marginTop: 3,
      textTransform:'lowercase',
      marginLeft: 20,
      marginRight: 20,
    },

  btnlogin: {
    backgroundColor:primaryColor ,
    width: 100,
    height: 35,
    borderRadius: 15,
    margin:12,
  },
  btnregister:{
    backgroundColor:'#fffff',
    width: 100,
    height: 35,
    borderRadius: 15,
    margin:12,
    color: primaryColor,
    borderWidth:1,
    borderColor:primaryColor,
  }
  }
  )