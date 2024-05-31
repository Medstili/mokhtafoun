import React from "react";
import { StyleSheet, Text, View , ImageBackground, TouchableOpacity, ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome' ; 
import {  secondaryColor, naturalColor } from "../config/Config";




export default function ProfilePage({navigation}) {
  
  return (
    <SafeAreaView style={styles.global_container}>

    {/* container */}
    <ScrollView contentContainerStyle={styles.page_container}>

    {/* user card */}
    <View style={styles.user_card}>
    {/*  user info */}
    <View style={styles.user_info}>

    {/* img container */}
      <View style={[styles.user_img_container]}>
    <ImageBackground source={require('../../images/profile.jpg')} style={styles.user_img}></ImageBackground>
      </View>

    {/* user info */}
      <View style={styles.user_detail_container}>
        <View  style={styles.user_detail}>
          <Icon name="user-circle" size={20}></Icon>
          <Text style={styles.user_detail_text} > mohamed stili</Text></View>
        <View  style={styles.user_detail}>
          <Icon name="phone" size={20}></Icon>
          <Text style={styles.user_detail_text} > 07 ** ** ** **</Text>
          </View>
        <View  style={styles.user_detail}>
        <Icon name="map-pin" size={20}></Icon>
          <Text style={styles.user_detail_text} > tanger </Text>
          </View>

        <View style={[styles.user_detail,]}>
        <Icon name="envelope" size={20} paddingRight={10}></Icon>
        <ScrollView horizontal >
        <Text style={[styles.user_detail_text,styles.user_detail_email]}  >mohamedstili@gmail.com</Text>
        </ScrollView>
        </View>
      </View>

      </View>
      {/* user_id */}
      <View style={styles.id_edit_bar}>
     <View style={styles.user_id}>
      <Text style={{fontSize:15}}> Your ID : </Text>
      <Text style={{color:secondaryColor, fontSize:15, textDecorationLine:"underline"}}>#AB233BH</Text>
      </View>
      <View style={styles.edit_profil}> 
        <TouchableOpacity>
        <Text style={{textDecorationLine:"underline", fontSize:20}}>Edit Profil</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>

    {/* family members */}
    <View style={styles.family_members_container}>

    <View style={styles.family_members} >
      <View  style={styles.member}>
        <ImageBackground style={styles.member_img} source={require('../../images/member.jpg')}></ImageBackground>
      </View>

      <View  style={styles.member}>
        <ImageBackground  style={styles.member_img}source={require('../../images/member.jpg')}></ImageBackground>
      </View>

      <View  style={styles.member}>
        <ImageBackground  style={styles.member_img}source={require('../../images/member.jpg')}></ImageBackground>
      </View>

      </View>

      <View style={styles.see_more}>
        <TouchableOpacity onPress={()=>{navigation.push("Members")}}>          
          <Text style={{textDecorationLine:"underline"}} > see more <Icon name="chevron-right"></Icon></Text>
        </TouchableOpacity>
      </View>

    </View>

    </ScrollView>

     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  global_container:{
    flex:1,
    backgroundColor:naturalColor
  },  
  page_container:{
    flexGrow:1,
    alignItems:'center',
  },
  user_card:{
    height:300,
    padding:10,
    justifyContent:"space-around",
  },
  user_info:{
  flexDirection:"row",
  justifyContent:"space-around",
  width:"100%",
  height:"80%",
  },
  user_img_container: {
    width: "45%",
    height: "100%",
    borderRadius:"20%",
    overflow: "hidden", 
    backgroundColor:naturalColor,
  },
  user_img:{
    width:"100%",
    height:"100%",
    resizeMode: "cover",
    borderRadius:"20%"

  },
  user_detail_container:{
    width:"50%",
    height:"100%",
    flexDirection:"column",
    justifyContent :"space-around",
    padding: 10,
  },
  user_detail:{
    width:"100%",
    padding:5,
    height:"20%",
    backgroundColor:naturalColor,
    borderRadius: '10%',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  scrollView: {
    height:"100%",
    flexDirection: "row",
  },
  user_detail_email:{
    textTransform:"none"
  },
  user_detail_text:{
    fontSize:20,
    textTransform:"capitalize",
    textAlign:"center",
  },
  id_edit_bar:{
    justifyContent:"space-between",
    alignContent:"center",
    flexDirection:"row",
    paddingHorizontal:5,
    paddingRight:40,
    marginTop:10,
  },
  edit_profil:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"10%",
    padding:10,
  },
  user_id:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:10,
  },
  family_members_container:{
    width:"95%",
    height:150,
    marginTop:10,
    shadowColor:"black",
    shadowOffset:{
      width:0,
      height:0
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
    borderRadius:10,
    backgroundColor:"white",
    justifyContent:"center",
    alignContent:"center"
  },
  family_members:{
    width:"100%",
    height:"85%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignContent:"center",
    flexWrap:"wrap",
  },
  member:{
  width:100,
  height:100,
  marginBottom:10,
  backgroundColor:naturalColor,
  overflow:"hidden",
  borderRadius:"60%",
  borderWidth:'1px',
  borderColor:"#006400",
  },
  member_img:{
    width:"100%",
    height:"100%",
  },
  see_more:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  
});