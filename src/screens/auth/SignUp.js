import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import React, { useState } from 'react';
import { primaryColor } from "../../config/Config";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SignUp({navigation}) {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    function handleChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    }

    return (
        <View style={s.container}>
            <Image source={require("../../../images/logo/logo3.png")} style={{ width: '100%', height: 150,  }} />
            <Text style={s.title}>Sign up</Text>
            <View style={s.inputView}>
                <TextInput 
                    style={s.input} 
                    placeholder='First name' 
                    value={username} 
                    onChangeText={(value) => setUsername(value)} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                />
                <TextInput 
                    style={s.input} 
                    placeholder='Last name' 
                    value={lastname} 
                    onChangeText={setLastname} 
                    autoCorrect={false}
                    autoCapitalize='none' 
                />
                <TouchableOpacity onPress={() => setShow(true)}>
                    <TextInput
                        style={s.input}
                        placeholder='Date of Birth'
                        value={date.toDateString()}
                        editable={false}
                    />
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="default"
                        onChange={handleChange}
                    />
                )}
            </View>
            <View style={{flexDirection:'row', marginTop:30,gap:15,}}>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={s.btnreturn} >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25, }}>Return</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp2')} style={s.btnsingup} >
                <Text style={{ color:primaryColor, textAlign: 'center', fontSize: 25, }}>Next</Text>
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
        paddingVertical: 35,
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
