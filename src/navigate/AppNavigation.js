import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../pages/Profile";

const Stack =createNativeStackNavigator();

export default function Navigation() {
    return (
      <NavigationContainer>
          <Stack.Navigator initalRoutename ="Welcome">
              <Stack.Screen name="profile" component={Profile} options={{headerShown:false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
  