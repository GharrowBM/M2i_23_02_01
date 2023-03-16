import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'

// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context

// npm install @react-navigation/drawer
// npm install react-native-gesture-handler react-native-reanimated

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})