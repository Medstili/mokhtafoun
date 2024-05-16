import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import User  from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/Feather';
import Message from 'react-native-vector-icons/MaterialIcons';
import List from 'react-native-vector-icons/Ionicons';

import { primaryColor, secondaryColor, naturalColor, complementatry, alertColor, succesColor } from "../config/Config";


export default  NavBar = ()=>{
    const btnPress =()=>{
        console.log("pressed");
      
      }
    return(
    <View style={styles.navBar}>
        {/* list icon */}
        <View>
        <TouchableOpacity onPress={btnPress}>
          <List name="list" style={styles.nav_icons}>
          </List>
          </TouchableOpacity>
        </View>
        {/* message icon */}
        <View>
        <TouchableOpacity onPress={btnPress}>
          <Message name="comment" style={styles.nav_icons} >
          </Message>
          </TouchableOpacity>
        </View>
        {/*  add icon */}
        <View>
        <TouchableOpacity onPress={btnPress}>
          <Icon name="plus-circle" style={styles.nav_icons}>
          </Icon>
          </TouchableOpacity>
        </View>
        {/* notifications icon */}
        <View>
        <TouchableOpacity onPress={btnPress}>
          <Icon name="bell" style={styles.nav_icons}>
          </Icon>
          </TouchableOpacity>
        </View>
        {/* user icon */}
        <View>
        <TouchableOpacity onPress={btnPress}>
          <User name="user" style={styles.nav_icons}>
          </User>
          </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    navBar:{
        justifyContent:"space-around",
        flexDirection:"row",
        paddingTop:10,
        width:"100%",
        height:"10%",
        backgroundColor:primaryColor,
      },
      nav_icons:{
        color:"white",
        fontSize:35,
      }
})