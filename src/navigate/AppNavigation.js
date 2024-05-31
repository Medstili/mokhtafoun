import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Welcome from '../screens/Welcome'
import AddPost from '../screens/AddPost'
import BottomNavigation from "./BottomNavigation";
import ProfilePage from "../screens/Profile";

const stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator 
      initialRouteName="Welcome" 
      screenOptions={({ route }) => ({headerShown:false})}>
        <stack.Screen name={"Welcome"} component={Welcome} />
        <stack.Screen name={"Login"} component={Login} />
        <stack.Screen name={"SignUp"} component={SignUp} />
        <stack.Screen name={"Forgot Password"} component={ForgotPassword} />
        <stack.Screen name={"AddPost"} component={AddPost} />
        <stack.Screen name={"Profile"} component={ProfilePage} />
        <stack.Screen name={"PostFeed"} component={BottomNavigation} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


