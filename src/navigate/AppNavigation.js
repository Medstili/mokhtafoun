import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View,Image,Text } from "react-native";
import {Entypo,Ionicons} from 'react-native-vector-icons';
import { useNavigation } from "@react-navigation/native";
// importing the screen tha we want to navigate to 
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgotPassword from "../screens/auth/ForgotPassword";
import NewPassword from '../screens/auth/NewPassword';
import ConfigPassword from '../screens/auth/ConfigPassword';
import SignUp2 from '../screens/auth/SignUp2';
import WebViewScreen from '../navigate/WebViewScreen';
import Welcome from '../screens/Welcome';
import Members from "../screens/Members"
import AddPost from "../screens/AddPost";
import ProfilePage from "../screens/Profile";
import ChatPage from "../screens/Chat";
import MemberProfile from "../components/MemberProfile";
import DrawerNavigation from '../navigate/DrawerNavigation'
// importing the bottom bar  navigation 
import BottomNavigation from "./BottomNavigation"
// imorting the colors 
import { primaryColor } from "../config/Config";
import Settings from "../screens/Settings";
const stack = createNativeStackNavigator();

export default function AppNavigation({navigation}) {
  return (


       <stack.Navigator 
      //  making teh welcome screen be the first pages displayed to the user
      initialRouteName="Home"
      // hiding the header in this screens (welcome,login,sign up, forgot password)
      screenOptions={() => ({headerShown:false})}>
        <stack.Screen name={"Welcome"} component={Welcome}/>
        <stack.Screen name={"Login"} component={Login}/>
        <stack.Screen name={"SignUp"} component={SignUp}/>
        <stack.Screen name={"SignUp2"} component={SignUp2} options={{headerShown: false}}/>
        <stack.Screen name={"Forgot Password"} component={ForgotPassword}/>
        <stack.Screen name={"ConfigPassword"} component={ConfigPassword} options={{headerShown: false}}/>
        <stack.Screen name={"NewPassword"} component={NewPassword} options={{headerShown: false}}/>
        <stack.Screen name={"AddPost"} component={AddPost}/>
        <stack.Screen name={"Profile"} component={ProfilePage}/>
        <stack.Screen name={"Settings"} component={Settings}/>


        <stack.Screen 
        options={({route})=>({
          headerShown: true,
          title:route.params.name,
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back',
        })} 
        name={"MemberProfile"} component={MemberProfile} 
        />
        <stack.Screen
         options={({route})=>({
          headerShown: true,
          title:'',
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back',
          headerRight:()=>(
            <View style={{
              width:90,
              justifyContent:"space-between",
              alignItems:"center",
              flexDirection:"row"
              }} >
             <TouchableOpacity style={{
              width:40,
              height:40,
              justifyContent:"center",
              alignItems:"center"
              }}>
               <Entypo name="video-camera" color="white" size="24"/>
             </TouchableOpacity>
            <TouchableOpacity style={{
              width:40,
              height:40,
              justifyContent:"center",
              alignItems:"center"}}>
              <Entypo name="phone" color="white" size="24"/>
            </TouchableOpacity> 
             </View>
          ),
           headerLeft:()=>{
            const navigation = useNavigation()
            return(
            <View style={{
              flexDirection:"row",
              width:270,
              justifyContent:"space-between",
              alignItems:"center",
              }}>

               <TouchableOpacity style={{width:50}} onPress={()=>{navigation.goBack()}}>
                <Ionicons name="chevron-back" size={24} color="white"/>
                </TouchableOpacity>

              <TouchableOpacity style={{
                width:230,
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"center",
                }}>

                <View style={{
                width:35,
                height:35,
                borderRadius:50,
                overflow:"hidden"}}>
                <Image style={{
                width:35,
                height:35,
                }}
                source={route.params.userImg}/>
                </View>

                <View>
                  <Text style={{
                    color:"white",
                    fontSize:17,
                    fontWeight:"bold",
                    textTransform:"capitalize",
                    marginLeft:10
                    }}>
                      {route.params.userName}
                  </Text>
                </View>

              </TouchableOpacity>
            </View>
                )
          }
        })} 
        name={"Chat"} component={ChatPage}/>

        <stack.Screen 
        options={{
          headerShown: true,          
          title:"Members",
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back',
        }}
        name={"Members"} component={Members} />

        {/* merging the bottomNavigation with home screen   */}
        <stack.Screen name={"BottomNavigation"} component={BottomNavigation} />
        <stack.Screen name={"WebViewScreen"} component={WebViewScreen} options={{headerShown: false}}/>
        <stack.Screen name={"DrawerNavigation"} component={DrawerNavigation} options={{headerShown: false}}/>
        
      </stack.Navigator>  


  );
}


