
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { naturalColor, primaryColor} from '../config/Config'
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';




export default function PostCard(props) {
    const {Description,Poster,Date, ProfileSource, PostSource}=props;
  return (
          <View style={styles.container}>
            <View style={styles.poster_info_container}>
              <View style={styles.poster_info}>
                <View style={styles.poster_img_container}>
                <Image style={styles.posterImg} source={ProfileSource}/>
                </View>
                <View style={styles.nameDate}>
                  <Text style={{textTransform:"capitalize", fontWeight:"bold"}}>
                    {Poster}
                  </Text>
                  <Text style={{color:"grey", marginTop:5}}>{Date}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={20} color={primaryColor}/>
                </TouchableOpacity>
            </View>
            <View style={styles.post_container}>
              <View style={styles.post_description}>
                <Text>{Description}</Text>
              </View>
              <View style={styles.post_img_container}>
                  <Image style={styles.postImg} source={PostSource}/>
              </View>

              <View style={styles.post_Buttons}>
                <TouchableOpacity style={styles.Buttons}>
                  <Text>support</Text>
                  <FontAwesome5 name="handshake" size={24} color={primaryColor} paddingHorizontal={5}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Buttons}>
                  <Text>comment</Text>
                  <FontAwesome name="commenting" size={24} color={primaryColor} paddingHorizontal={5}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Buttons}>
                  <Text>share</Text>
                  <FontAwesome name="share-square" size={24} color={primaryColor} paddingHorizontal={5}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({

  container:{
    borderBottomWidth:4,
    borderBottomColor:naturalColor,
    backgroundColor:"white",
    width:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:10
  },
  poster_info_container:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
  },
  poster_info:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"45%",
  },
  poster_img_container:{
    width:60,
    height:60,
    borderRadius:50,
    backgroundColor:"grey",
    overflow:"hidden",
  },
  posterImg:{
    width:"100%",
    height:"100%",
    resizeMode: "cover"
  },
  post_container:{
    width:"100%",
    alignItems:"center",
    marginTop:20,
  },
  post_description:{
    width:"100%",
    paddingHorizontal:25
  },
  post_img_container:{
    width:"100%",
    marginTop:20
  },
  postImg:{
    width:"100%",
    height:300, 
    resizeMode:"center",
  },
  post_Buttons:{
    width:"100%",
    height:50,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:20,
    paddingBottom:5,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:"#bbbdbb"
  },
  Buttons:{
    alignItems:"center",
    flexDirection:"row-reverse",
  }
})