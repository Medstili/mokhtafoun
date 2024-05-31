import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Button } from 'react-native'
import { naturalColor, primaryColor, secondaryColor, } from '../config/Config'





import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



DataPosts = [
  {
    id: 1,
    name: "Rachid test ",
    ProfileImg: require("../../images/PostImg/profil2.jpg"),
    timestamp: 1569109483926,
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil1.jpg")
  },
  {
    id: 2,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil5.jpg"),
    timestamp: 1569109273726,
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil3.jpg")
  },
  {
    id: 3,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil9.jpg"),
    timestamp: 1569109273726,
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil3.jpg")
  },
  {
    id: 4,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil1.jpg"),
    timestamp: 1569109273726,
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil6.jpg")
  },
  {
    id: 5,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil2.jpg"),
    timestamp: 1569109273726,
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil9.jpg")
  },
  {
    id: 6,
    name: "Teste test",
    ProfileImg: require("../../images/PostImg/profil7.jpg"),
    timestamp: 1569109273726,
    text: "salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al",
    addedImage: require("../../images/PostImg/profil10.jpg")
  },
]

const  PostFeed = ({navigation}) => {

  return (
    <View style={styles.container}>
      
      <ScrollView>
      <View style={styles.main_content}>

          <View style={styles.ContentBox}>

            <View style={styles.PostsBox}>
              <View style={{flexDirection:'row', padding: 15,}}>

                <View style={styles.InfoBox}>
                  <Image source={require("../../images/PostImg/profil7.jpg")} style={{width:50, height:50, borderRadius:30}} />
                </View>

                <View style={{flexDirection:'column'}}>
                  <Text style={{marginLeft:10, fontWeight:'bold'}}> Rachid Ajboun</Text>
                  <Text style={{marginLeft:10, fontSize:12, fontWeight:'bold'}}> 23th May 2024</Text>
                </View>

                {/* *** FOR POST SETTINGS OR IF SOMEONE WANTS TO REPORT A DISRESPECTFUL POST */}
                <View style={{width:190,flexDirection:'row', justifyContent:'flex-end'}}>
                  <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
              </View>

                <View style={styles.textBox_Image}>
                    <Text style={{fontSize:16, width: 365, padding:10}}>
                      salam 3afakom wach kayn li chaf had siyida itasl biya f hda nmra 0600010102.
                    </Text>
                    <Image source={require("../../images/PostImg/profil8.jpg")} style={{width:undefined, height:260, borderRadius:8, marginVertical:10}}/>

                </View>
                    {/* COMMENT AND SHARE ZONE */}
                    <View style={styles.commentBox}>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome5 name="hands-helping" size={20} color={primaryColor} style={{ padding:6,}}/>
                            <Text style={{}}>Support</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome name="commenting" size={20} color={primaryColor} style={{ padding:6,}}/>
                            <Text style={{}}>Comment</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome name="share-square" size={20} color={primaryColor} style={{ padding:6}} />
                            <Text style={{}}>Share</Text>
                        </View>
                    </View>
            </View>

          <View style={styles.PostsBox}>
              <View style={{flexDirection:'row', padding: 15,}}>

                <View style={styles.InfoBox}>
                  <Image source={require("../../images/PostImg/profil2.jpg")} style={{width:50, height:50, borderRadius:30}} />
                </View>

                <View style={{flexDirection:'column'}}>
                  <Text style={{marginLeft:10, fontWeight:'bold'}}> Flan bn flan</Text>
                  <Text style={{marginLeft:10, fontSize:12, fontWeight:'bold'}}> 23th May 2024</Text>
                </View>

                 {/* *** FOR POST SETTINGS OR IF SOMEONE WANTS TO REPORT A DISRESPECTFUL POST */}
                <View style={{width:190,flexDirection:'row', justifyContent:'flex-end'}}>
                  <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
              </View>

                <View style={styles.textBox_Image}>
                    <Text style={{fontSize:16, width: 365, padding:10}}>
                      salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al
                    </Text>
                    <Image source={require("../../images/PostImg/profil9.jpg")} style={{width:undefined, height:260, borderRadius:8, marginVertical:10}}/>

                </View>
                    {/* COMMENT AND SHARE ZONE */}
                    <View style={styles.commentBox}>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome5 name="hands-helping" size={20} color={primaryColor} style={{ padding:6,}}/>
                            <Text style={{}}>Support</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome name="commenting" size={20} color={primaryColor} style={{ padding:6,}}/>
                            <Text style={{}}>Comment</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome name="share-square" size={20} color={primaryColor} style={{ padding:6}} />
                            <Text style={{}}>Share</Text>
                        </View>
                    </View>
            </View>

            <View style={styles.PostsBox}>
              <View style={{flexDirection:'row', padding: 15,}}>

                <View style={styles.InfoBox}>
                  <Image source={require("../../images/PostImg/profil4.jpg")} style={{width:50, height:50, borderRadius:30}} />
                </View>

                <View style={{flexDirection:'column'}}>
                  <Text style={{marginLeft:10, fontWeight:'bold'}}> Flan bn flan</Text>
                  <Text style={{marginLeft:10, fontSize:12, fontWeight:'bold'}}> 23th May 2024</Text>
                </View>

                 {/* *** FOR POST SETTINGS OR IF SOMEONE WANTS TO REPORT A DISRESPECTFUL POST */}
                <View style={{width:190,flexDirection:'row', justifyContent:'flex-end'}}>
                  <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
              </View>

                <View style={styles.textBox_Image}>
                    <Text style={{fontSize:16, width: 365, padding:10}}>
                      salam 3afakom wach kayn li chaf wahd siyida kbira khrjat mn dara..... kant labsa wahd jlaba khadra ochal k7al
                    </Text>
                    <Image source={require("../../images/PostImg/profil1.jpg")} style={{width:undefined, height:260, borderRadius:8, marginVertical:10}}/>

                </View>
                    {/* COMMENT AND SHARE ZONE */}
                    <View style={styles.commentBox}>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome5 name="hands-helping" size={20} color={primaryColor} style={{ padding:6,}}/>
                            <Text style={{}}>Support</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome name="commenting" size={20} color={primaryColor} style={{ padding:6,}}/>
                            <Text style={{}}>Comment</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:2,alignItems:'center'}}>
                            <FontAwesome name="share-square" size={20} color={primaryColor} style={{ padding:6}} />
                            <Text style={{}}>Share</Text>
                        </View>
                    </View>
            </View>

          </View>
        </View>
      {/* SET POSTS AS DATA CONTENT */}
      
      </ScrollView>
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
    backgroundColor:'white',
    gap:10,
  },
  HeaderContent: {
    height:100,
    flexDirection:'row',
    backgroundColor:primaryColor,
    justifyContent:'space-between',
    alignItems:'flex-end',
    padding: 20,
  },
  HeaderTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },
  AddPostbtn: {
    backgroundColor: primaryColor,
    width:60,
    height:60,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:30,
    position:'absolute',
    zIndex:1000,
    bottom:20,
    right:20
  },

  PostsInput: {
    backgroundColor:'white',
    height:70,
    textAlign:'center',
    borderWidth:0.4,
    borderColor:secondaryColor,
  },
  btnInput: {
    flexDirection:'row', 
    justifyContent:'flex-end', 
    gap:20,
    padding:10, 
    backgroundColor:'white'
  },
  ContentBox: {
    width:380,
    marginLeft:5,
    padding:8,
  },
  commentBox: {
    padding:10,
    flexDirection:'row', 
    gap:35,
    justifyContent:'center', 
    borderBottomWidth:0.2,
    borderColor:secondaryColor,
  }

})