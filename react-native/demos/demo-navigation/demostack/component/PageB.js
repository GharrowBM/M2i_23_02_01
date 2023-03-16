import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageB({navigation}) {
  return (
    <View>
      <Text>PageB</Text>
      <Button title="Go to Page Toto" onPress={() => navigation.navigate("PageC")}/>
    </View>
  )
}

const styles = StyleSheet.create({})