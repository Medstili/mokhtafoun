import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { naturalColor, primaryColor } from '../config/Config'



const Data =[
    {
        title:"settings",
        id:"abcd1234"
    },
    {
        title:"losted People",
        id:"efjh5678"
    },
    {
        title:"profile",
        id:"igkl9012"
    }
]

const Item =({title})=>{
    return(
        <View style={styles.listContainer}>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.Button}>
            <Text>{title}</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default function listPage() {
  return (
    <View style={styles.listContainer}>
      <Text>listPage</Text>
      <FlatList 
        data={Data}
        renderItem={ ({item}) => {<Item title={item.title}/>}}
        keyExtractor={item => item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer:{
        width:250,
        height:"100%",
        backgroundColor:primaryColor,
        flexDirection:"column",
        justifyContent:"space-around",
        alignContent:"flex-start"
    },
    btnContainer:{
        width:100,
        padding:10,
        borderWidth:0.5,
        borderColor:naturalColor,
    },
    Button:{
        color:"white",
        fontSize:20,
    }
})