import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, TextInput, FlatList} from 'react-native';
import React, { useState }  from 'react';
import MemberCard from '../components/MemberCard';
import {secondaryColor} from '../config/Config';
import Icon from 'react-native-vector-icons/FontAwesome' ;


const membersArr =[
    {
        name:"Mohamed",
        status:"Safe",
        source: require("../../images/PostImg/profil10.jpg"),
        id:"1a"
    },
    {
        name:"Youssef",
        status:"Safe",
        source: require("../../images/PostImg/profil7.jpg"),
        id:"1b"
    },
    {
        name:"Max",
        status:"lost",
        source: require("../../images/PostImg/profil3.jpg"),
        id:"1c"
    },
    {
        name:"Saad",
        status:"Safe",
        source: require("../../images/PostImg/profil1.jpg"),
        id:"2bA"
    },
    {
        name:"Lamiae",
        status:"Safe",
        source: require("../../images/PostImg/profil5.jpg"),
        id:"3AA"
    },
    {
        name:"Khadija",
        status:"lost",
        source: require("../../images/PostImg/profil2.jpg"),
        id:"12bc"
    },
    {
        name:"Vector",
        status:"Safe",
        source: require("../../images/PostImg/profil6.jpg"),
        id:"12abc"
    },

]





export default function Members() {

    // recieving user text input and stay the changes  up to date 
    const [input, setInput] = useState("")
    console.log(input);
    // filtering the data based on the user input 
    const result = membersArr.filter((member)=> member.name.toLowerCase().includes(input.toLowerCase() ))
    console.log(result);
        // rendering the iems 
    const renderItems=({item})=>{return <MemberCard source={'../../images/member.jpg'} Name={item.name} Status={item.status} Source={item.source}/>}

  return (
        <SafeAreaView style={{flex:1,}}>
            <View style={{flex:1, justifyContent:"space-between",alignItems:"center"}}>
        
        {/* search bar */}
            <View style={styles.searchBar}>
                <Icon name='search' size={24} color="gray"></Icon>
                <TextInput
                placeholder='search here'
                value={input} 
                onChangeText={(e)=>{setInput(e)}}
                style={{width:300,}}
                />
            </View>


            <View style={styles.member_container}>

                <FlatList 
                    contentContainerStyle={styles.flatList}
                    data={result}
                    renderItem={renderItems}
                    keyExtractor={(item)=>item.id}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent:"space-between"}}
                    ListEmptyComponent={<Text style={{width:"100%", textAlign:"center"}}>No members found</Text>}
                />

                <TouchableOpacity  style={{width:"100%",height:90, alignItems:"center",paddingTop:10, backgroundColor:secondaryColor}}>
                        <Text style={{fontSize:"34", fontWeight:"bold", color:"white",justifyContent:"center"}}>Add</Text>
                </TouchableOpacity>

            </View>

            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    member_container:{
        height:740,
        width:414,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,

    },
    flatList:{
        width:414,
        justifyContent:"center",
    },
    searchBar:{
        flexDirection:"row",
        width:350,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderWidth:1,
        borderRadius:30,
        marginTop:20,
        padding:8
    }
})
