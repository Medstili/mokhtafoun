import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import React,{useState, useEffect, useCallback} from 'react'
import { Actions, Avatar, Bubble, GiftedChat, Send  } from 'react-native-gifted-chat'
import {primaryColor} from '../config/Config'
import {FontAwesome,AntDesign} from 'react-native-vector-icons'
import {launchImageLibrary , launchCamera} from 'react-native-image-picker'

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIstyping] =useState();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          // avatar: 'https://placeimg.com/140/140/any',
        }
      },

    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])
  const openLibraryImage =()=>{
    const options ={
      mediaType :'mixed'
    }
    launchImageLibrary(options,(response)=>{
      if (response.didCancel) {
        console.log("cancled");
      } else if(response.errorMessage){
        console.log("error occured", response.errorMessage);
      } else {
        console.log('Media Uri', response.assets[0].uri);
      }
    })
  }
  const openCamera = ()=>{
    const options ={
      mediaType :'mixed'
    }
    launchCamera(options,(Response)=>{
      if (Response.didCancel) {
        console.log("cancled");
      } else if(Response.errorMessage){
        console.log("error occured", Response.errorMessage);
      } else {
        console.log('Media Uri', Response.assets[0].uri);
      }
    })
  }
  const sendLocation=()=>{console.log('location sent');}
  const sendContact=()=>{console.log('contact sent');}
  // const renderCustomAction = (props) => {
  //   return (
  //     <View style={styles.customActionsContainer}>
  //       <TouchableOpacity onPress={openCamera} style={styles.actionButton}>
  //         <FontAwesome name='camera' size={24} color={primaryColor}/>
  //       </TouchableOpacity>
  //       <TouchableOpacity onPress={openLibraryImage} style={styles.actionButton}>
  //         <FontAwesome name='image' size={24} color={primaryColor}/>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.actionButton}>
  //         <AntDesign name='plus' size={24} color={primaryColor}/>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  const renderCustomAction = (props)=>{
    return (
    <View style={styles.customActionsContainer}>

      <Actions {...props}
      options={{
            'Choose From Library':openLibraryImage,
            'Take a Photo':openCamera,
            Cancel:()=>{console.log("cancel")},
          }}
        icon={()=>(
          <FontAwesome name='camera' size={24} color={primaryColor}/>
        )}
        onSend={(args)=>{console.log(args);}}/>

      <Actions {...props}
      options={{
        'Send Location':sendLocation,
        'Send Contact':sendContact,
        'Import Files':openCamera,
        Cancel:()=>{console.log("cancel")},
      }}
      icon={()=>(
        <AntDesign name='plus' size={24} color={primaryColor}/>)}/>
    </View>
    )
  }
  const customSendButton=(props)=>{
    return(
      isTyping ?( <Send {...props}>
        <View style={{width:50,height:50, justifyContent:"center",alignItems:"center",marginRight:10}}>
          <FontAwesome name="send" size={24} color={primaryColor}/>
        </View>
      </Send>):(
         <View style={{width:50,height:50, justifyContent:"center",alignItems:"center",marginRight:10}}>
          <TouchableOpacity>
           <FontAwesome name="microphone" size={24} color={primaryColor}/>
           </TouchableOpacity>
         </View>
      )
     
    )
  }
  const renderBubble=(props)=>{
    return(
    <Bubble {...props}
    wrapperStyle={{
      left:{
        marginBottom:10,
      },
      right:{
        marginBottom:10
      }
  } }/>
  )}
  const renderAvatar=(props)=>{
    return(
      <View style={{marginBottom:10}}>
      <Avatar {...props}/>
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
    <GiftedChat style={styles.giftedChat}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderAvatar={renderAvatar}
      renderSend={customSendButton}
      renderActions={renderCustomAction}
      containerStyle={{height:50}}
      onInputTextChanged={text=>{setIstyping(text.length>0)}}
    />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  customActionsContainer: {
    flexDirection:"row",
    justifyContent:"space-around",
    width:100,
  },


})