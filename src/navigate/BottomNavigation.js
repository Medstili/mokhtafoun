import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity} from "react-native";
// importing icons 
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "react-native-vector-icons";
// importing the colors
import {primaryColor } from "../config/Config";
// importing the pages
<<<<<<< HEAD
import Home from '../screens/Home'
=======
import PostFeed from "../screens/Home";
>>>>>>> 368f1d23e5abc93c2b81290ad6afe4683e073203
import ChatPage from "../screens/Chat";
import ProfilePage from "../screens/Profile";
import NotificationsPage from "../screens/Notifications";


// screen names
const homeName = "Home";
const chatName = "Chat";
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
            } else if (routeName === chatName) {
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
         headerRight:()=>(
          <TouchableOpacity style={{marginRight:15}}>
            <Ionicons name="settings-outline" color="white" size="24"></Ionicons>
          </TouchableOpacity>
         )
        })}
      >
        <Tabs.Screen name={homeName} component={Home} />
        <Tabs.Screen name={chatName} component={ChatPage} />
        <Tabs.Screen name={notificationsName} component={NotificationsPage} />
        <Tabs.Screen name={profileName} component={ProfilePage}/>
      </Tabs.Navigator>

  );
}
