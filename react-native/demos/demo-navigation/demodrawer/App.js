import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from './component/Home'
import Settings from './component/Settings'
import Contact from './component/Contact'

// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context

// npm install @react-navigation/drawer
// npm install react-native-gesture-handler react-native-reanimated

const Drawer = createDrawerNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Settings" component={Settings}/>
      <Drawer.Screen name="Contact" component={Contact}/>
    </Drawer.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})