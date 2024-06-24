import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, email, setEmail } from "react-native";
import React, { useState } from 'react';
import { primaryColor } from "../../config/Config";

export default function ForgotPassword({navigation}) {

    return (
        <View style={s.container}>
            <Image source={require("../../../images/logo/logo3.png")} style={{ width: '100%', height: 100, marginTop:20,  }} />
            <Text style={s.title}>Forgot Password</Text>
            <View style={s.inputView}>
                <TextInput 
                    style={s.input} 
                    placeholder='Enter Your Email' 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                    keyboardType="email-address"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ConfigPassword')} style={s.btnsingup} >
                <Text style={{ color:'#ffffff', textAlign: 'center', fontSize: 25, }}>Send Code</Text>
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
        borderRadius: 7,
    },

      btnsingup:{
        width: 160,
        height: 35,
        borderRadius: 15,
        margin:12,
        color: '#ffffff',
        borderWidth:1,
        borderColor:primaryColor,
        backgroundColor: primaryColor,
      }
});
