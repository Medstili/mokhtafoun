import *  as React from "react";
import {View, Text, StyleSheet,Image,} from "react-native";
import { naturalColor, primaryColor, secondaryColor } from "../config/Config";

import { Entypo } from '@expo/vector-icons';



export default function NoatificationsPage() {
    return(
        
        <View style={styles.container}>
            <View style={styles.notifBox}>
                <Image source={require("../../images/PostImg/profil1.jpg")} style={styles.userProfile}/>
                <View style={styles.textBox}>
                    <Text style={styles.notifMessage} >
                        Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."
                    </Text>
                    <Text style={styles.notifTimer}>45min</Text>
                </View>
                <View style={styles.notifSetteing}>
                    <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
            </View>
            <View style={styles.notifBox}>
                <Image source={require("../../images/PostImg/profil7.jpg")} style={styles.userProfile}/>
                <View style={styles.textBox}>
                    <Text style={styles.notifMessage} >
                        Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."
                    </Text>
                    <Text style={styles.notifTimer}>1h</Text>
                </View>
                <View style={styles.notifSetteing}>
                    <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
            </View>

            <View style={styles.notifBox}>
                <Image source={require("../../images/PostImg/profil3.jpg")} style={styles.userProfile}/>
                <View style={styles.textBox}>
                    <Text style={styles.notifMessage} >
                        Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."
                    </Text>
                    <Text style={styles.notifTimer}>8h</Text>
                </View>
                <View style={styles.notifSetteing}>
                    <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
            </View>

            <View style={styles.notifBox}>
                <Image source={require("../../images/PostImg/profil6.jpg")} style={styles.userProfile}/>
                <View style={styles.textBox}>
                    <Text style={styles.notifMessage} >
                        Mohammed Stili react to your psot: "salam 3afakom chkon chaf yaha mskin da3 lina  ...."
                    </Text>
                    <Text style={styles.notifTimer}>22h</Text>
                </View>
                <View style={styles.notifSetteing}>
                    <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
            </View>

            <View style={styles.notifBox}>
                <Image source={require("../../images/PostImg/profil9.jpg")} style={styles.userProfile}/>
                <View style={styles.textBox}>
                    <Text style={styles.notifMessage} >
                        Aicha dwiba react to your psot: "salam 3afakom chkon chaf had siyid ...."
                    </Text>
                    <Text style={styles.notifTimer}>1D</Text>
                </View>
                <View style={styles.notifSetteing}>
                    <Entypo name="dots-three-horizontal" size={20} color={primaryColor} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        gap:10
    },
    notifBox: {
        padding:10,
        flexDirection:'row',
        gap:10,
        alignContent:'center',
        backgroundColor:naturalColor
    },
    userProfile: {
        width:60,
        height:60,
        borderRadius:40,
    },
    textBox: {
        flex:1,
        padding:8,
    },
    notifMessage: {
        fontSize:14,
        bottom:4,
    },
})