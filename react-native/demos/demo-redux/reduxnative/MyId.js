import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'

export default function MyId() {
    const myId = useSelector((state) => state.data.ids)

  return (
    <View>
      <Text>MyId</Text>
        {myId.map((ids,i) => <Text key={i} style={styles.text}>{ids}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        fontSize : 24,
    }
})