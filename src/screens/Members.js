import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, TextInput, FlatList} from 'react-native';
import React, { useState }  from 'react';
import MemberCard from '../components/MemberCard';
import {secondaryColor} from '../config/Config';
import {FontAwesome } from 'react-native-vector-icons' ;
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const membersArr =[
    {
        name:"Mohamed stili",
        status:"Safe",
        age:24,
        location:"tanger",
        source: require("../../images/PostImg/profil10.jpg"),
        id:"1a",
        description:{
            height:181,
            weight:70,
            eyeColor:"green",
            skinColor:"white",
            physical_health:"healthy",
            mental_health:"healthy",
            hairColor:"brown",
            hairType:"wavy",
        }
    },
    {
        name:"Youssef najah",
        status:"Safe",
        age:15,
        location:"rabat",
        source: require("../../images/PostImg/profil8.jpg"),
        id:"1b",
        description:{
            height:170,
            weight:65,
            eyeColor:"dark brown",
            skinColor:"white",
            physical_health:"healthy",
            mental_health:"healthy",
            hairColor:"blond",
            hairType:"curly",
        }
    },
    {
        name:"Max alexandar",
        status:"lost",
        age:20,
        location:"fes",
        source: require("../../images/PostImg/profil3.jpg"),
        id:"1c",
        description:{
            height:160,
            weight:70,
            eyeColor:"blue",
            skinColor:"white",
            physical_health:"handicape",
            mental_health:"healthy",
            hairColor:"blond",
            hairType:"staright",
        }
    },
    {
        name:"Saad sobhi",
        status:"Safe",
        age:18,
        location:"casablanca",
        source: require("../../images/PostImg/profil1.jpg"),
        id:"2bA",
        description:{
            height:150,
            weight:69,
            eyeColor:"brown",
            skinColor:"brown",
            physical_health:"healthy",
            mental_health:"disabled",
            hairColor:"black",
            hairType:"staright",

        }
    },
    {
        name:"Lamiae chaghouf",
        status:"Safe",
        age:16,
        location:"meknes",
        source: require("../../images/PostImg/profil5.jpg"),
        id:"3AA",
        description:{
            height:165,
            weight:70,
            eyeColor:"black",
            skinColor:"white",
            physical_health:"helathy",
            mental_health:"healthy",
            hairColor:"balck",
            hairType:"wavy",

        }
    },
    {
        name:"Khadija kinan",
        status:"lost",
        age:22,
        location:"tanger",
        source: require("../../images/PostImg/profil2.jpg"),
        id:"12bc",
        description:{
            height:160,
            weight:80,
            eyeColor:"brown",
            skinColor:"brown",
            physical_health:"healthy",
            mental_health:"healthy",
            hairColor:"brown",
            hairType:"curly",
        }
    },
    {
        name:"Vector mari",
        status:"Safe",
        age:25,
        location:"taza",
        source: require("../../images/PostImg/profil6.jpg"),
        id:"12abc",
        description:{
            height:175,
            weight:57,
            eyeColor:"grey",
            skinColor:"white",
            physical_health:"healthy",
            mental_health:"healthy",
            hairColor:"brwown",
            hairType:"straight",

        }
    },

]

export default function Members() {
    
const navigation = useNavigation()
    // recieving user text input and stay the changes  up to date 
    const [input, setInput] = useState("")
    console.log(input);
    // filtering the data based on the user input 
    const result = membersArr.filter((member)=> member.name.toLowerCase().includes(input.toLowerCase() ))
    console.log(result);
    // rendering the iems 
    const renderItems=({item})=>{return <MemberCard  Name={item.name} Status={item.status} Source={item.source} onPress={()=>{navigation.navigate('MemberProfile',{name:item.name, status:item.status,age:item.age,source:item.source, location:item.location,description:item.description})}} />}

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
    },
    flatList:{
        width:414,
        justifyContent:"center",
        padding:15
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
