import *  as React from "react";
import {View, Text, StyleSheet,Image, FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import { naturalColor, primaryColor } from "../config/Config";

import moment from 'moment'


import { Entypo } from '@expo/vector-icons';

// CREATE DATA FOR NOTIFICATION
 const notificationData = [

    {
        id:1,
        userImage: require('../../images/PostImg/profil2.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },
    {
        id:2,
        userImage: require('../../images/PostImg/profil1.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },
    {
        id:3,
        userImage: require('../../images/PostImg/profil5.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },
    {
        id:4,
        userImage: require('../../images/PostImg/profil3.jpg'),
        notifContentText:'Mohammed Stili react to your psot: salam 3afakom chkon chaf had siyid ....',
        timestamp: new Date(),
    },
    {
        id:5,
        userImage: require('../../images/PostImg/profil9.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf yaha mskin da3 lina  ...."',
        timestamp: new Date(),
    },
    {
        id:6,
        userImage: require('../../images/PostImg/profil6.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },
    {
        id:7,
        userImage: require('../../images/PostImg/profil4.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },
    {
        id:8,
        userImage: require('../../images/PostImg/profil7.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },
    {
        id:9,
        userImage: require('../../images/PostImg/profil1.jpg'),
        notifContentText:'Mohammed Stili react to your psot: "salam 3afakom chkon chaf had siyid ...."',
        timestamp: new Date(),
    },

]

export default function NoatificationsPage() {

    const OnNotification = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.notifBox}>

                    <Image source={item.userImage} style={styles.userAvatra}/>
                <View style={styles.textBox}>
                    <TouchableOpacity>
                        <Text style={styles.notifMessage} >{item.notifContentText}</Text>
                        <Text style={styles.notifTimer}>{moment(item.timestamp).fromNow()}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.notifSetteing}>
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={16} color={primaryColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )

    return(
        <SafeAreaView>
        <FlatList 
            data = {notificationData}
            renderItem={OnNotification}
        />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        flex:1,
        backgroundColor:'white',
        gap:18
    },
    notifBox: {
        padding:10,
        flexDirection:'row',
        gap:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:naturalColor
    },
    userAvatra: {
        width: 60,
        height:60,
        borderRadius:30
    },
    textBox: {
        flex:1,
        padding:8,
    },
    notifMessage: {
        fontSize:14,
    },
    notifSetteing: {
        alignSelf:'flex-start',
        right:6,
    },
    notifTimer: {
        top:10,
        color:primaryColor
    }
})