import React from 'react';
import { View, StyleSheet, TouchableOpacity,FlatList, TextInput} from 'react-native'
import { primaryColor, } from '../config/Config'
import { Feather } from '@expo/vector-icons';
import PostCard from '../components/postCard';

import {FontAwesome , Ionicons}from 'react-native-vector-icons';


DataPosts = [
  {
    id: 1,
    name: "Rachid test ",
    ProfileImg: require("../../images/PostImg/profil2.jpg"),
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil1.jpg"),
    date:"01/01/22"
  },
  {
    id: 2,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil5.jpg"),
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil3.jpg"),
    date:"01/01/22"
  },
  {
    id: 3,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil9.jpg"),
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil3.jpg"),
    date:"01/01/22"
  },
  {
    id: 4,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil1.jpg"),
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil6.jpg"),
    date:"01/01/22"
  },
  {
    id: 5,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil2.jpg"),
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil9.jpg"),
    date:"01/01/22"
  },
  {
    id: 6,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil7.jpg"),
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil10.jpg"),
    date:"01/01/22"
  },
]

const  PostFeed = ({navigation}) => {
const renderItems=({item})=>{
    return <PostCard 
    Poster={item.name}
    Description={item.text}
    Date={item.date}
    ProfileSource={item.ProfileImg}
    PostSource={item.addedImage}
    />
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                   <FontAwesome name="search" size={24} color={"gray"} />
                   <TextInput 
                   placeholder="Search..."
                  //  value={}
                   style={{width:300}}/>
                   </View>
                   <TouchableOpacity>
                        <Ionicons name="filter" size={24}/>
                   </TouchableOpacity>
                </View>
      <FlatList 
      contentContainerStyle={styles.posts}
      data={DataPosts}
      renderItem={renderItems}
      keyExtractor={(item)=>{item.id}}
      />

      <TouchableOpacity style={styles.AddPostbtn} onPress={() => navigation.navigate('AddPost')} >
            <View>
              <Feather name="plus" size={30} color="white" />
            </View>
      </TouchableOpacity>
      
    </View> 
  )
}
export default PostFeed

const styles = StyleSheet.create({

  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  searchBarContainer:{
    width:414,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    height:60,
    paddingHorizontal:10
},
searchBar:{
    flexDirection:"row",
    width:340,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-evenly",
    borderWidth:1,
    borderRadius:30,
    padding:8
},
  AddPostbtn: {
    backgroundColor: primaryColor,
    width:60,
    height:60,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:30,
    position:'absolute',
    zIndex:10,
    bottom:20,
    right:15
  },
  posts:{
    width:414,
    flexDirection:"column",
  },

})