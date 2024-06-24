import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import { primaryColor } from "../../config/Config";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegisterPage2({navigation}) {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [configpassword, setconfigpassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    function handleChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    }

    return (
        <View style={s.container}>
            <Image source={require("../../../images/logo/logo3.png")} style={{ width: '100%', height: 150, marginTop:20,  }} />
            <Text style={s.title}>Sign up</Text>
            <View style={s.inputView}>
                <TextInput 
                    style={s.input} 
                    placeholder='Email' 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                    keyboardType="email-address"
                />
                <TextInput 
                    style={s.input} 
                    placeholder='Phone number' 
                    value={phoneNumber} 
                    onChangeText={setPhoneNumber} 
                    autoCorrect={false}  
                    autoCapitalize='none'
                    keyboardType="phone-pad"
                />
                <TextInput 
                    style={s.input} 
                    placeholder='City' 
                    value={city} 
                    onChangeText={setCity} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                />
                <TextInput 
                    style={s.input} 
                    placeholder='Password' 
                    secureTextEntry 
                    value={password} 
                    onChangeText={setPassword} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                />
                <TextInput 
                    style={s.input} 
                    placeholder='Confirm Password' 
                    secureTextEntry 
                    value={configpassword} 
                    onChangeText={setconfigpassword}  
                    autoCorrect={false} 
                    autoCapitalize='none' 
                />
            </View>
            <View style={{flexDirection:'row', marginTop:30,gap:15,}}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={s.btnreturn} >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25, }}>Return</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BottomNavigation')} style={s.btnsingup} >
                <Text style={{ color:primaryColor, textAlign: 'center', fontSize: 25, }}>Sign up</Text>
            </TouchableOpacity>
            </View>
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
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 15,
        color: primaryColor,
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
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: 7
    },
    btnreturn: {
        backgroundColor:primaryColor ,
        width: 100,
        height: 35,
        borderRadius: 15,
        margin:12,
      },

      btnsingup:{
        width: 100,
        height: 35,
        borderRadius: 15,
        margin:12,
        color: primaryColor,
        borderWidth:1,
        borderColor:primaryColor,
      }
});
