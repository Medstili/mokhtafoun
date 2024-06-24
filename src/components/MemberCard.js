import { StyleSheet, Text, View , ImageBackground, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { complementary, secondaryColor} from '../config/Config';
import {MaterialCommunityIcons} from 'react-native-vector-icons'


import { LongPressGestureHandler,State } from 'react-native-gesture-handler';
import Modal  from 'react-native-modal';


export default function MemberCard(props) {
    const {Name, Status, Source, onPress}=props
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

            <TouchableOpacity style={styles.member} onPress={onPress} >

                <View  style={styles.member_img_conainer}>
                    <ImageBackground style={styles.member_img} source={Source}></ImageBackground>
                </View>

                <View style={styles.member_status_container}>
                    <View>
                    <View style={{flexDirection:"row"}}>
                        <Text>Name : </Text>
                        <Text style={styles.memberName}>{Name}</Text>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Text>Status : </Text>
                        <Text style={styles.memberStatus}>{Status}</Text>
                    </View>
                    </View>
                </View>

                <Modal
                        animationIn="bounce"
                        animationOut="bounce"
                        isVisible={modalVisible}
                        onBackdropPress={()=> setModalVisible(false)}
                        backdropOpacity={0}
                        >
                            <View style={[styles.modalContent,{top:modalPosition.y, left:modalPosition.x}]}>

                            <TouchableOpacity>

                                <View style={{ flexDirection:"row",justifyContent:"space-between", width:"75%"}}>
                                <MaterialCommunityIcons name="update" size={24} color={secondaryColor}/>
                                <Text style={{fontSize:20,}}>Update</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={{ flexDirection:"row",justifyContent:"space-between",width:"75%"}}>
                                <MaterialCommunityIcons name="account-remove" size={24} color={secondaryColor}/>
                                <Text style={{fontSize:20,}}>Remove</Text>
                                </View>
                            
                            </TouchableOpacity>

                            </View>
                </Modal>

            </TouchableOpacity>
        </View>
                  
    </LongPressGestureHandler>
  )
}

const styles = StyleSheet.create({

    member:{
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:10,
        marginTop:10,
        padding:5,
        gap:10
       
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
        width:"40%",
        height:"10%",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:20,
        padding:5,
        elevation:5,
        position:"absolute",
    },
})