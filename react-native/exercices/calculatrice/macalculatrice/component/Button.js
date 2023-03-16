import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//
export default function Button({onPress, title}) {
  return (
     <Pressable onPress={onPress} >
       <View style={styles.isGray}>
         <Text style={styles.isGrayText}>{title}</Text>
       </View>
     </Pressable>
  )
}

const styles = StyleSheet.create({
  isGray : {
    width : 72,
    height : 72,
    borderRadius : 16,
    backgroundColor : "grey",
    justifyContent : "center",
    alignItems : "center",
  },
  isGrayText : {
    color : "white",
    fontSize : 20,
  }
})