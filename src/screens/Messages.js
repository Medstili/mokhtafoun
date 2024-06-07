import  React,{useState} from "react";
import {View, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';
import MessagesCard from "../components/MessagesCard";

const messageData =[
    {
        sender:"max",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil1.jpg"),
    },
    {
        sender:"victor",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil2.jpg"),
    },
    {
        sender:"mia",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil3.jpg"),
    },
    {
        sender:"malik",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil4.jpg"),
    },
    {
        sender:"gustavu",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil5.jpg"),
    },
    {
        sender:"busta",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil6.jpg"),
    },
    {
        sender:"sam",
        msg:"ajgchsclnkdc kdhcvskjbhcbsvjcsjs khdcvsjhcbs ds hsvcs csdkchvs j",
        imgSource:require("../../images/PostImg/profil7.jpg"),
    },

]

export default function MessagePage({navigation}) {

    const [input, setInput]= useState("");
    const result = messageData.filter((msg)=> msg.sender.toLowerCase().includes(input.toLowerCase()))
    // console.log(result);
    const renderItems=({item})=>{
        return <MessagesCard 
        SenderImage={item.imgSource}
        Name={item.sender}
        Message={item.msg} 
        Timer={item} 
        OnPress={()=>{navigation.navigate("Chat", {userName:item.sender,userImg:item.imgSource,navigate:navigation})}}
        item={item}
        />}

    return(
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                   <Icon name="search" size={24} color={"gray"} />
                   <TextInput 
                   placeholder="Search..."
                   value={input}
                   keyExtractor={(item)=>{item.sender}}
                   onChangeText={(e)=>{setInput(e)}}
                   style={{width:300}}/>
                   </View>
                   <TouchableOpacity>
                        <Ionicons name="filter" size={24}/>
                   </TouchableOpacity>
                </View>
                <View style={styles.messages}>
                    <FlatList
                    data={result}
                    keyExtractor={(item)=>{item.sender}}
                    renderItem={renderItems}
                    contentContainerStyle={styles.msgList}
                    />
                </View>
            </View>

    )
}

    const styles=StyleSheet.create({
        container:{
            flex:1,
            alignItems:"center"
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
        messages:{
            flex:1,
            width:414,
        },
        msgList:{
            width:414,
        }
    })  