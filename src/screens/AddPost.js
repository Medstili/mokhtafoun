import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import { naturalColor, primaryColor, secondaryColor } from '../config/Config'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const AddPost = ({navigation}) => {


  return (
    <View style={styles.container}>
      
      <View style={styles.PostCancel}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={35} color="black" style={{marginLeft:10}}/>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.PostBtn}> Post </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <Image source={require("../../images/PostImg/profil3.jpg")} style={styles.profileImage}/>
        <Text style={styles.userName}>Hi, Rachid Ajboun</Text>
      </View>

      <TextInput placeholder='Whats in your mind ?' style={styles.InputBox}/>

      <View style={styles.addImgBox}>
        <TouchableOpacity style={styles.AddImage}>
          <MaterialIcons name="photo-camera" size={32} color={primaryColor} />
        </TouchableOpacity>
      
          <Image source={require("../../images/PostImg/profil4.jpg")} style={styles.ImageADD}/>
          <Image source={require("../../images/PostImg/profil1.jpg")} style={styles.ImageADD}/>
          <Image source={require("../../images/PostImg/profil5.jpg")} style={styles.ImageADD}/>
          <Image source={require("../../images/PostImg/profil4.jpg")} style={styles.ImageADD}/>

      </View>

      <View style={styles.FooterBtn}>
        <Entypo name="location" size={24} color={primaryColor} />
        <MaterialCommunityIcons name="file-gif-box" size={25} color={primaryColor} />
        <Entypo name="images" size={24} color={primaryColor} />
      </View>

    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
  container: {
    height:100,
    marginTop:80,
    backgroundColor:naturalColor,
    padding:8
  },
  PostCancel: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  PostBtn: {
    backgroundColor:primaryColor,
    padding:8,
    borderRadius:20,
    color:'white',
    fontSize:18,
    fontWeight:'500',
    marginRight:10,
  },
  profile: {
    flexDirection:'row',
    alignItems:'center',
    gap:14,
    padding:14,
    marginTop:20,
  },
  profileImage: {
    width:60,
    height:60,
    borderRadius:30,
  },
  userName: {
    fontSize:14,
    fontWeight:'500'
  },
  InputBox: {
    fontSize:20,
    
  },
  addImgBox: {
    flexDirection:'row',
    alignItems:'center',
    gap:15
  },
  AddImage: {
    top:350,
    marginLeft:20,
    borderColor: secondaryColor,
    borderWidth:1,
    width:80,
    height:80,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  ImageADD: {
    width:80,
    height:80,
    top:350,
    borderRadius:10,
  },
  FooterBtn: {
    width:200,
    flexDirection:'row-reverse',
    alignItems:'flex-end',
    top:400,
    justifyContent:'space-around'
  }

})