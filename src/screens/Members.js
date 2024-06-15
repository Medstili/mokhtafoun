import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, TextInput, FlatList} from 'react-native';
import React, { useState }  from 'react';
import MemberCard from '../components/MemberCard';
import {naturalColor,  secondaryColor} from '../config/Config';
import {FontAwesome } from 'react-native-vector-icons' ;
import { GestureHandlerRootView} from 'react-native-gesture-handler';


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
        source: require("../../images/PostImg/profil8.jpg"),
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
    const renderItems=({item})=>{return <MemberCard  Name={item.name} Status={item.status} Source={item.source}/>}

  return (
        <SafeAreaView style={{flex:1,}}>
            <GestureHandlerRootView>

            <View style={{flex:1, justifyContent:"space-between",alignItems:"center"}}>
                {/* search bar */}
                <View style={styles.topBar}>

                        <View style={styles.searchBarContainer}>

                            <FontAwesome name='search' size={24} color="gray"/>

                            <TextInput
                            placeholder='search here'
                            value={input} 
                            onChangeText={(e)=>{setInput(e)}}
                            style={{width:200,}}
                            />
                        </View>
               
                         <TouchableOpacity  style={{
                            width:"15%",
                            height:30, 
                            alignItems:"center",
                            justifyContent:"center", 
                            backgroundColor:secondaryColor,
                            borderRadius:20
                        }}> 
                                <Text style={{
                                    fontSize:20, 
                                    fontWeight:"bold", 
                                    color:"white",
                                    justifyContent:"center"

                                }}>Add</Text>
                        </TouchableOpacity>

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

                
                </View>
            </View>

            </GestureHandlerRootView>
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
    topBar:{
        width:"100%",
        height:"8%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    searchBarContainer:{
        flexDirection:"row",
        width:250,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderWidth:1,
        borderRadius:30,
        padding:8
    },

    button:{
        flexDirection:"row",
        backgroundColor:secondaryColor,
        justifyContent:"center",
        alignItems:"center"
    }
})
