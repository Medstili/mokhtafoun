import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import { primaryColor } from "../../config/Config";

export default function ConfigPassword({ navigation }) {
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState('');

    const handleInputChange = (input) => {
        const numericInput = input.replace(/[^0-9]/g, '');
        setNumber(numericInput);
    };

    function handleChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    }

    return (
        <View style={s.container}>
            <Image source={require("../../../images/logo/logo.png")} style={{ width: '50%', height: 150, marginTop: 20 }} />
            <Text style={s.title}>Enter the Code</Text>
            <View style={s.inputView}>
                <TextInput
                    style={s.input}
                    value={number}
                    onChangeText={handleInputChange}
                    keyboardType="numeric"
                    placeholder="XXX-XXX"
                />
                <TouchableOpacity onPress={() => navigation.navigate('NewPassword')} style={s.btnsingup}>
                    <Text style={{ color: primaryColor, fontSize: 20 }}>Confirmation</Text>
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
        textAlign:'center',
        alignItems: "center",
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width : '90%',
        paddingHorizontal: 20,
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: 7
    },
    btnsingup: {
        width: '50%',
        height: 35,
        borderRadius: 15,
        margin: 12,
        color: primaryColor,
        borderWidth: 1,
        borderColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    
    }
});
