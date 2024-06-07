import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Entypo } from '@expo/vector-icons';
import {primaryColor} from "../config/Config"


export default function MessagesCard(porps) {

    const {Message, SenderImage, Name, Timer, OnPress}=porps
  return (
    <TouchableOpacity style={styles.container} onPress={OnPress}>
        <View style={styles.userImgConmtainer}>
            <Image style={styles.userImg} source={SenderImage}/>
        </View>
        <View style={styles.msgContainer}>
            <Text style={{fontWeight:"bold"}}>{Name}</Text>
            <Text style={styles.msg}>{Message}</Text>
            <Text style={styles.timer}> {moment(Timer.timesTamp).fromNow()} </Text>
        </View>
        <TouchableOpacity style={{height:"100%", width:40,alignItems:"center"}}>
            <Entypo name='dots-three-horizontal' color={primaryColor} size={20}/>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        widrth:414,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"white",
        borderBottomWidth:0.5,
        borderColor:"#bbbdb",
        paddingLeft:20,
        paddingRight:10

    },
    userImgConmtainer:{
        width:60,
        height:60,
        borderRadius:"50%",
        backgroundColor:"grey",
        overflow:"hidden",
    },
    userImg:{
        width:"100%",
        height:"100%",
        resizeMode: "cover",
    },
    msgContainer:{
        width:250,
        justifyContent:"center",
        alignItems:"flex-start",
    },
    msg:{
        fontSize:15,
    },
    timer:{
        color:primaryColor,
        fontSize:10,
    },


})