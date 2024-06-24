import { View,Text, Image, TouchableOpacity , ScrollView} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import {naturalColor, secondaryColor, complementary, primaryColor} from '../config/Config'
import{MaterialCommunityIcons} from 'react-native-vector-icons'



export default  MemberProfile = ({route}) => {
  const member = route.params
  return (
    <View style={ styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <View style={styles.memberInfo}>
          <View style={styles.imgContainer}>
          <Image style={styles.backgroundImg} source={member.source}/>
          </View>
          <View style={styles.infoContainer}>
                <View style={styles.info}><Text style={styles.infoTetx}>Name : {member.name}</Text></View>
                <View style={styles.info}><Text style={styles.infoTetx}>location : {member.location}</Text></View>
                <View style={styles.info}><Text style={styles.infoTetx}>Age : {member.age}</Text></View>
                <TouchableOpacity style={styles.lost_btn_container}>
                  <MaterialCommunityIcons name="find-replace" size={24} color={"white"}/>
                  <Text style={styles.lost_btn}>lost</Text></TouchableOpacity>

          </View>
        </View>
    
        <View style={styles.memberDetailsText}>
          <Text style={{fontSize:20, fontWeight:"bold", textTransform:"uppercase"}}>Details</Text>
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity style={{width:95,flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
          <MaterialCommunityIcons name='update' size={24} color={complementary}/>
            <Text style={[styles.button, styles.updtae]}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:105,flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
            <MaterialCommunityIcons name='account-remove' size={24} color={secondaryColor}/>
            <Text style={[styles.button, styles.remove]}>Remove</Text>
          </TouchableOpacity>
        </View>

        <View style={{height:"55%",width:"90%"}}>
            <ScrollView contentContainerStyle={styles.details_info_container}>

            <View style={styles.details}>
              <Text style={styles.detail_label}>Height :</Text> 
              <Text style={styles.detail_value}>{member.description.height}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>weight :</Text> 
              <Text style={styles.detail_value}>{member.description.weight}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>skin color :</Text> 
              <Text style={styles.detail_value}>{member.description.skinColor}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>eye color :</Text> 
              <Text style={styles.detail_value}>{member.description.eyeColor}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>hair type :</Text> 
              <Text style={styles.detail_value}>{member.description.hairType}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>hair color :</Text> 
              <Text style={styles.detail_value}>{member.description.hairColor}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>physical health :</Text> 
              <Text style={styles.detail_value}>{member.description.physical_health}</Text>
              </View>

            <View style={styles.details}>
              <Text style={styles.detail_label}>mental health :</Text> 
              <Text style={styles.detail_value}>{member.description.mental_health}</Text>
              </View>
              
              </ScrollView>
        </View>

      </ScrollView>
    </View>
  )
}
const styles= StyleSheet.create({
  
  container:{
    flex:1,
    backgroundColor:"white",
    paddingBottom:30,
    // backgroundColor:"plum"
  },
  scrollView:{
    flexGrow:1,
    alignItems:"center",
    justifyContent:"space-between",
    // backgroundColor:"blue",
  },
  memberInfo:{
    width:"100%",
    height:"30%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingVertical:10,
  },
  imgContainer:{
    width:"45%",
    height:"100%",
    borderRadius:20,
    overflow:"hidden"
  },
  backgroundImg:{
    width:"100%",
    height:"100%"
  },
  infoContainer:{
    width:"45%",
    height:"100%",
    justifyContent:"space-evenly",
    alignItems:"center",

  },
  info:{
    width:"100%",
    backgroundColor:naturalColor,
    padding:10,
    borderRadius:10,
  },
  infoTetx:{
    fontSize:15,
    fontWeight:"bold",
    textTransform:"capitalize",
    
  },
  memberDetailsText:{
    justifyContent:"center",
    alignItems:"center",
    padding:5,
  },
  details:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    padding:10,
    backgroundColor:naturalColor,
  },
  details_info_container:{
    gap:20,
  },
  button_container:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    padding:5,
    width:"70%",
  },
  button:{
    fontSize:20,
    textTransform:"capitalize", 
    fontWeight:"bold",
  },
  remove:{
    color:secondaryColor,
  },
  updtae:{
    color:complementary,
  },
  detail_label:{
    fontWeight:"bold",
    fontSize:18,
    textTransform:"capitalize"
  }, 
  detail_value:{
    fontSize:17,
    color:primaryColor,
    fontWeight:"bold",
    textTransform:"capitalize",
  },
  lost_btn_container:{
    padding:8,
    backgroundColor:secondaryColor,
    alignItems:"center",
    borderRadius:10,
    flexDirection:"row",
  },
  lost_btn:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
  }

})

