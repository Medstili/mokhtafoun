import { StyleSheet, Text, View , ImageBackground, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { complementary,  primaryColor, naturalColor} from '../config/Config';
import {FontAwesome } from 'react-native-vector-icons' ;


import { LongPressGestureHandler,State } from 'react-native-gesture-handler';
import Modal  from 'react-native-modal';

export default function MemberCard(props) {
    const {Source, Name, Status, onLongPress}=props
    const [modalVisible, setModalVisible] =useState(false);
    const [modalPosition, setModalPosition] = useState({x:0, y:0});
    const handleLongPress=(event)=>{
        const {absoluteX, absoluteY}=event.nativeEvent;
        setModalPosition({x:absoluteX, y:absoluteY});
        setModalVisible(true);
    }
  return (
    <LongPressGestureHandler 
    onHandlerStateChange={({nativeEvent})=>{if(nativeEvent.state === State.ACTIVE){handleLongPress({nativeEvent})}}}minDurationMs={500}>
        <View style={{justifyContent:"center",alignItems:"center"}}>

            <TouchableOpacity style={styles.member} onLongPress={onLongPress}>

                <View  style={styles.member_img_conainer}>
                    <ImageBackground style={styles.member_img} source={Source}></ImageBackground>
                </View>

                <View style={styles.member_status_container}>
                    <View>
                    <Text >
                        <Text>Name : </Text>
                        <Text style={styles.memberName}>{Name}</Text>
                    </Text>

                    <Text>
                        <Text>Status : </Text>
                        <Text style={styles.memberStatus}>{Status}</Text>
                    </Text>
                    </View>
                </View>

                <Modal
                        animationIn="bounce"
                        animationOut="bounceOut"
                        transparent={true}
                        isVisible={modalVisible}
                        onBackdropPress={()=> setModalVisible(false)}
                        backdropOpacity={0.3}
                        style={{justifyContent:"flex-start",margin:0}}
                        >
                            <View style={[styles.modalContent,{top:modalPosition.y, left:modalPosition.x}]}>
                            <TouchableOpacity><Text>update</Text></TouchableOpacity>
                            <TouchableOpacity><Text>remove</Text></TouchableOpacity>
                            </View>
                </Modal>

            </TouchableOpacity>
        </View>
                  
    </LongPressGestureHandler>
  )
}

const styles = StyleSheet.create({

    member:{
        width:"48%",
        height:250,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:primaryColor,
        borderRadius:10,
        marginTop:10,
        padding:10,

       
    },
    member_img_conainer:{
        width:170,
        height:180,
        borderRadius:10,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowRadius:8,
        shadowOpacity:0.6,
        shadowColor:"gray",
    },
    member_img:{
        width:"100%",
        height:"100%",
        resizeMode: "cover",

    },
    member_status_container:{
        width:"100%",
        alignItems:"center",
    },
    memberName:{
        fontWeight:"bold"
    },
    memberStatus:{
        color:complementary
    },
    modalContent:{
        backgroundColor:naturalColor,
        borderRadius:20,
        padding:20,
        elevation:5,
        position:"absolute",
    },
})