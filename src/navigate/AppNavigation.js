import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// importing the screen tha we want to navigate to 
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgotPassword from "../screens/auth/ForgotPassword";
<<<<<<< HEAD
import Welcome from '../screens/Welcome';
import Members from "../screens/Members"

// importing the bottom bar  navigation 
import BottomNavigation from "./BottomNavigation";
import { primaryColor } from "../config/Config";

=======
import Welcome from '../screens/Welcome'
import AddPost from '../screens/AddPost'
import BottomNavigation from "./BottomNavigation";
import ProfilePage from "../screens/Profile";
>>>>>>> 2e49eb3f37cb984fa3069accefdda71ae482a757

const stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator 
      //  making teh welcome screen be the first pages displayed to the user
      initialRouteName="Home"
      // hiding the header in this screens (welcome,login,sign up, forgot password)
      screenOptions={({ route }) => ({headerShown:false})}>

        <stack.Screen name={"Welcome"} component={Welcome} />
        <stack.Screen name={"Login"} component={Login} />
        <stack.Screen name={"SignUp"} component={SignUp} />
        <stack.Screen name={"Forgot Password"} component={ForgotPassword} />
<<<<<<< HEAD
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
        
      {/* merging the bottomNavigation with home screen  */}
        <stack.Screen name={"Home"} component={BottomNavigation} />



=======
        <stack.Screen name={"AddPost"} component={AddPost} />
        <stack.Screen name={"Profile"} component={ProfilePage} />
        <stack.Screen name={"PostFeed"} component={BottomNavigation} />
>>>>>>> 2e49eb3f37cb984fa3069accefdda71ae482a757
      </stack.Navigator>
    </NavigationContainer>
  );
}


