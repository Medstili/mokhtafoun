import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import { primaryColor } from "../../config/Config";

export default function NewPassword({navigation}) {
    const [password, setPassword] = useState('');
    const [configpassword, setconfigpassword] = useState('');

    return (
        <View style={s.container}>
            <Image source={require("../../../images/logo/logo3.png")} style={{ width: '100%', height: 90, marginTop:20,  }} />
            <Text style={s.title}>New Password</Text>
            <View style={s.inputView}>
                <TextInput 
                    style={s.input} 
                    placeholder='New Password' 
                    secureTextEntry 
                    value={password} 
                    onChangeText={setPassword} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                />
                <TextInput 
                    style={s.input} 
                    placeholder='Confirm the new Password' 
                    secureTextEntry 
                    value={configpassword} 
                    onChangeText={setconfigpassword}  
                    autoCorrect={false} 
                    autoCapitalize='none' 
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('BottomNavigation')} style={s.btnsingup} >
                <Text style={{ color:'#ffffff', textAlign: 'center', fontSize: 25, }}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
        flex:1,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: 55,
        color: "gray",
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5,
        paddingTop: 30,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: 7
    },
    btnreturn: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: 7,
      },

      btnsingup:{
        width: 100,
        height: 35,
        borderRadius: 15,
        margin:12,
        color: '#ffffff',
        borderWidth:1,
        borderColor:primaryColor,
        backgroundColor: primaryColor,
      }
});
