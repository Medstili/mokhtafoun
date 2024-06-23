import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigate/AppNavigation";
import DrawerNavigation from "./src/navigate/DrawerNavigation";



export default function App() {
  return(
    <NavigationContainer>
      <AppNavigation/> 
      {/* <DrawerNavigation/> */}
    </NavigationContainer>
    );
};
