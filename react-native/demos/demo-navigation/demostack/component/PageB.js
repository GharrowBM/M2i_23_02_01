import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageB({navigation , route}) {
  const userName = route.params.name
  return (
    <View>
      <Text>PageB pour utilisateur : {userName}</Text>
      <Button title="Go to Page Toto" onPress={() => navigation.navigate("PageC")}/>
    </View>
  )
}

const styles = StyleSheet.create({})