import { StyleSheet, Text, View , ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { complementary,  primaryColor,} from '../config/Config';




export default function MemberCard(props) {
    const {Source, Name, Status, }=props
  return (
<TouchableOpacity style={styles.member}>

    <View  style={styles.member_img_conainer}>
         <ImageBackground style={styles.member_img} source={Source}></ImageBackground>
    </View>

    <View style={styles.member_status_container}>
        <View>
        <Text >
            <Text>Name : </Text>
            <Text style={styles.memberName}>{Name}</Text>
        </Text>

        <Text>
            <Text>Status : </Text>
            <Text style={styles.memberStatus}>{Status}</Text>
        </Text>
        </View>
    </View>

</TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    member:{
        width:"48%",
        height:250,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:primaryColor,
        borderRadius:10,
        marginTop:10,
        padding:10,

       
    },
    member_img_conainer:{
        width:170,
        height:180,
        borderRadius:10,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowRadius:8,
        shadowOpacity:0.6,
        shadowColor:"gray",
    },
    member_img:{
        width:"100%",
        height:"100%",
        resizeMode: "cover",

    },
    member_status_container:{
        width:"100%",
        alignItems:"center",
    },
    memberName:{
        fontWeight:"bold"
    },
    memberStatus:{
        color:complementary
    },


})