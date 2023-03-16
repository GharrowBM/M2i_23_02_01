import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageA({ navigation }) {
  return (
    <View>
      <Text>On va mettre un lien vers la page B !!!</Text>
      <Button title='Go to PageB' onPress={() => navigation.navigate("PageB")} />
    </View>
  )
}

const styles = StyleSheet.create({})