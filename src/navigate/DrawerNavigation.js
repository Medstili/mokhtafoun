import React  from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialCommunityIcons, FontAwesome6, MaterialIcons } from 'react-native-vector-icons'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import Settings  from '../screens/Settings'
import ContactUs from '../screens/ContactUs'
import AboutUs from '../screens/AboutUs'
import ReportIssue from '../screens/ReportIssue'
import RateUs from '../screens/RateUs'
import FinderPost from '../screens/FinderPost'
import BottomNavigation from './BottomNavigation'
import { primaryColor } from '../config/Config'



const Drawer = createDrawerNavigator();

const CustomDrawer=(props)=>{
  const navigation= useNavigation()
  return(
  <View style={{flex:1 }}>

        <View  style={styles.BackgroundImg}>
          <TouchableOpacity style={styles.contentContainer} onPress={()=>{navigation.navigate("Profile")}}>

            <View style={styles.profileImgContainer}>
              <Image style={styles.profileImg} source={require('../../images/PostImg/profil7.jpg')}/>
            </View>

            <View style={styles.profileName}>
              <Text style={{fontSize:20, fontWeight:"bold", padding:10, color:"white"}}>mohamed stili</Text>
            </View>

          </TouchableOpacity>
        </View>

    <DrawerContentScrollView {...props} contentContainerStyle={{}}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <View style={styles.LogOutContainer}>
      <TouchableOpacity style={styles.logOut} onPress={()=>{navigation.navigate('Login')}}>
        <MaterialIcons name="logout" size={24} color={'black'}/>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  </View> 

  )
}
export default DrawerNavigation = () => {
  return (
   <Drawer.Navigator drawerContent={(props)=> <CustomDrawer {...props}/>} screenOptions={{headerShown:false }} >

    <Drawer.Screen name='Home' component={BottomNavigation} options={{  drawerIcon:({color})=>{ return(
      <MaterialCommunityIcons name="home" size={24} color={color}/>)}}}/>
     
    <Drawer.Screen options={{ drawerIcon:({color})=>{ return(
      <MaterialCommunityIcons name="account-cog" size={24} color={color}/>)}}} name='Settings' component={Settings}/>

    <Drawer.Screen options={{
      drawerIcon :({color})=>{ return (
        <MaterialIcons name="quick-contacts-mail" size={24} color={color}/>
  )}
    }}
    name='Contact Us' component={ContactUs}/>

    <Drawer.Screen options={{
      drawerIcon:({color})=>{return (
        <FontAwesome6 name="users" size={24} color={color}/>)
      }
    }}
    name='About Us' component={AboutUs}/>

    <Drawer.Screen options={{
      drawerIcon:({color})=>{ return (
        <MaterialIcons name="star-rate" size={24} color={color}/>)
      }
    }}
    name='Rate Us' component={RateUs}/>

    <Drawer.Screen options={{
      drawerIcon:({color})=>{return (
        <MaterialIcons name="system-update-alt" size={24} color={color}/>)
      }
    }}
    name='Finder Post' component={FinderPost}/>

    <Drawer.Screen options={{
      drawerIcon:({color})=>{ return (
        <MaterialIcons name="report-problem" size={24} color={color}/>)
      }
    }}
    name='Repport Issue' component={ReportIssue}/> 

   </Drawer.Navigator>
  )
}
const styles= StyleSheet.create({
  LogOutContainer:{
    width:"100%",
    height:"12%",
    borderTopWidth:1,
    borderTopColor:"black"
  },
  logOut:{
    width:"40%",
    paddingLeft:30,
    paddingVertical:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  BackgroundImg:{
    height:265,
    resizeMode:"cover",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:primaryColor,
    marginBottom:-45
  },

  contentContainer:{
    width:"60%",
    height:"60%",
    justifyContent:"center",
    alignItems:"center",
  },
  profileImgContainer:{
    width:100,
    height:100,
    borderRadius:50,
    overflow:"hidden",
    backgroundColor:"green"
  },
  profileImg:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
  },
  profileName:{
    alignItems:"center",
    width:"100%",
    
  }
})