import React from "react";
import { StyleSheet, Text, View , Image, TouchableOpacity, ScrollView,SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome' ; 
import {  secondaryColor, naturalColor } from "../config/Config";
import PostCard from "../components/postCard";

 let postData =[
  {
    poster:"mohamed stili",
    description:"description_1",
    date:"22/22/22",
    postSource:require("../../images/PostImg/profil1.jpg"),
    profileSource:require("../../images/PostImg/profil7.jpg"),
    id:"#abcd"
  },
  {
    poster:"mohamed stili",
    description:"description_2",
    date:"22/22/23",
    postSource:require("../../images/PostImg/profil3.jpg"),
    profileSource:require("../../images/PostImg/profil7.jpg"),
    id:"#ab12"

  },
  {
    poster:"mohamed stili",
    description:"description_3",
    date:"22/22/24",
    postSource:require("../../images/PostImg/profil5.jpg"),
    profileSource:require("../../images/PostImg/profil7.jpg"),
    id:"#abc67"

  },
  {
    poster:"mohamed stili",
    description:"description_4",
    date:"22/22/25",
    postSource:require("../../images/PostImg/profil8.jpg"),
    profileSource:require("../../images/PostImg/profil7.jpg"),
    id:"#a12f"
  },
  
 ]

export default function ProfilePage({navigation}) {

  const renderItems=({item})=>{
    return <PostCard 
    Poster={item.poster}
    Description={item.description}
    Date={item.date}
    ProfileSource={item.profileSource}
    PostSource={item.postSource}
    />
  }

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
    <Image source={require('../../images/PostImg/profil7.jpg')} style={styles.user_img}/>
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
        <Image style={styles.member_img} source={require('../../images/PostImg/profil9.jpg')}/>
      </View>

      <View  style={styles.member}>
        <Image  style={styles.member_img}source={require('../../images/PostImg/profil8.jpg')}/>
      </View>

      <View  style={styles.member}>
        <Image  style={styles.member_img}source={require('../../images/PostImg/profil3.jpg')}/>
      </View>

      </View>

      <View style={styles.see_more}>
        <TouchableOpacity onPress={()=>{navigation.push("Members")}}>          
          <Text style={{textDecorationLine:"underline"}} > see more <Icon name="chevron-right"></Icon></Text>
        </TouchableOpacity>
      </View>

    </View>

    <View style={styles.posts}>
     <FlatList
     contentContainerStyle={styles.flatList}
     data={postData}
     keyExtractor={(item)=>{item.id}}
     renderItem={renderItems}
     />
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
  width:'100%',
  height:'80%',
  },
  user_img_container: {
    width: '45%',
    height: '100%',
    borderRadius:20,
    overflow: "hidden", 
    backgroundColor:naturalColor,
  },
  user_img:{
    width:'100%',
    height:'100%',
    resizeMode: "cover",
    borderRadius:20

  },
  user_detail_container:{
    width:'50%',
    height:'100%',
    flexDirection:"column",
    justifyContent :"space-around",
    padding: 10,
  },
  user_detail:{
    width:'100%',
    padding:5,
    height:'20%',
    backgroundColor:naturalColor,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  scrollView: {
    height:'100%',
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
    borderRadius:10,
    padding:10,
  },
  user_id:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:10,
  },
  family_members_container:{
    width:'95%',
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
    width:'100%',
    height:'85%',
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
  borderRadius:60,
  borderWidth:'1px',
  borderColor:"#006400",
  },
  member_img:{
    width:'100%',
    height:'100%',
  },
  see_more:{
    width:'100%',
    justifyContent:"center",
    alignItems:"center",
  },
  posts:{
    width:414,
    marginTop:40,
    flexDirection:"column",
  },
  flatList:{
    width:"100%",
    backgroundColor:"green"
  }
  
});