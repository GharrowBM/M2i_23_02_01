import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { requestPost } from './util/http'

export default function App() {

    requestPost({name : "toto" , mail : "toto@toto.com"})

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})