import { View, Text, StyleSheet, TextInput, username, setUsername, password, setPassword, TouchableOpacity, Switch, Pressable, Image } from "react-native";
import React, { useState } from 'react';
import {primaryColor,  succesColor} from "../../config/Config";
export default function Login({navigation}) {
    const [click, setClick] = useState(false)
    return (
        <View style={s.container}>
            <Image source={require("../../../images/logo/logo.png")} style={{ width: '40%', height: 120, marginTop:45, }} />
            <Text style={s.title}>Login</Text>
            <View style={s.inputView}>
                <TextInput style={s.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={s.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                    autoCapitalize='none' />
            </View>
            <View style={s.rememberView}>
                <View style={s.switch}>
                    <Switch
                        thumbColor={click ? succesColor : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setClick}
                        value={click} trackColor={{ true:primaryColor , false: "gray" }} />
                    <Text style={s.rememberText}>Remember Me</Text>
                </View>
                <View>
                    <Pressable onPress={() => navigation.navigate('Forgot Password')}>
                        <Text style={s.forgetText}>Forgot Password?</Text>
                    </Pressable>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={s.btnlogin} >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25, }}>Login</Text>
            </TouchableOpacity>
            <Text style={s.optionsText}>OR LOGIN WITH</Text>
            <View style={s.media}>
                <TouchableOpacity onPress={() => navigation.navigate('WebViewScreen', { url: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AS5LTAQwB7Ye2IGvozQvLDgi6DN-MN0mL1Zm3vxFEH9hobERY_ctOav-ApZUF4UJSKbbI8bC-cPZ_A&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S252208640%3A1717494359361185&ddm=0' })} style={{ width: 15, height: 50, }}>
                    <Image source={require("../../../images/icons/google.png")} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WebViewScreen', { url: 'https://www.facebook.com'})} style={{ width: 15, height: 50, }}>
                    <Image source={require("../../../images/icons/facebook.png")} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WebViewScreen', { url: 'https://www.instagram.com/accounts/login/?hl=en'})} style={{ width: 15, height: 50, }}>
                    <Image source={require("../../../images/icons/instagram.png")} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
            <View style={s.singre}>
            <Text style={s.footerText}>Don't Have Account?</Text><TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={s.signup}>  Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const s = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent:'center',
        flex:1,
    },
    topImage: {
        width: '100%',
        height: 800,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 25,
        color: "#004C99"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#004C99",
        borderWidth: 1,
        borderRadius: 7
    },
    btnlogin: {
        backgroundColor: "#004C99",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
        width: 100,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    rememberText: {
        fontSize: 13,
    },
    forgetText: {
        fontSize: 11,
        color: "#004C99",
    },
    topImage: {
        width: 30,
        height: 30,
        margin: 7,
        alignItems: 'center',
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6,
        marginTop: 15,
    },
    media: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        marginRight:16,
    },
    footerText : {
        textAlign: "center",
        color : "gray",
      },
    signup : {
        color : primaryColor,
        fontSize : 13
    },
    singre: {
        flexDirection:'row',
    }
})