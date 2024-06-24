import * as React  from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet} from "react-native";
// importing icons 
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "react-native-vector-icons";
// importing the colors
import {primaryColor } from "../config/Config";
// importing the pages
import Home from '../screens/Home'
import Messages from "../screens/Messages";
import ProfilePage from "../screens/Profile";
import NotificationsPage from "../screens/Notifications";
// screen names
const homeName = "Home";
const MessagesName = "Messages";
const profileName = "Profile";
const notificationsName = "Notifications";
const Tabs = createBottomTabNavigator();


export default function BottomTapBar() { 
  return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;
            if (routeName === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === MessagesName) {
              iconName = focused ? "message" : "message-outline";
            } else if (routeName === notificationsName) {
              iconName = focused ? "notifications" : "notifications-outline";
              return (
                <Ionicons name={iconName} size={size} color={color}></Ionicons>
              );
            } else if (routeName === profileName) {
              iconName = focused ? "user" : "user-o";
              return (
                <FontAwesome
                  name={iconName}
                  size={size}
                  color={color}
                ></FontAwesome>
              );
            } 
              return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              ></MaterialCommunityIcons>
              );
          },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: "gray",
          headerStyle:{
            backgroundColor:primaryColor,
          },
          headerTintColor:"white",
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"bold"
          },
          headerRight:()=>{
            return(
            <TouchableOpacity style={{marginRight:15}}>
              <FontAwesome name='gears' color='white' size={24}/>
            </TouchableOpacity>
            )
          }
        })}
        
      >
        <Tabs.Screen name={homeName} component={Home} />
        <Tabs.Screen name={MessagesName} component={Messages} />
        <Tabs.Screen name={notificationsName} component={NotificationsPage} />
        <Tabs.Screen name={profileName} component={ProfilePage}/>

      </Tabs.Navigator>
        );
}

const styles= StyleSheet.create({
})
