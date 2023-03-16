import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button';

export default function Calculatrice() {

  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [operation, setOperation] = useState('0');
  const [result, setResult] = useState('0');


  function numberPress(){
    console.log("appuie sur un nombre")
  }

  function operationPress(){
    console.log("appuie sur un operateur")
  }

  function resultPress(){
    console.log("appuie sur un égal")
  }

  function clear(){
    console.log("appuie sur clear")
  }

  return (
    <View style={styles.calculatrice}>
      <View>
        <Text>Mon ecran</Text>
      </View>
      <View style={styles.row}>
        <Button onPress={clear} title ={"AC"} />
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View style={styles.row}>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View style={styles.row}>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View style={styles.row}>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View style={styles.row}>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calculatrice : {
    width : "100%",
  },
  row : {
    Width : "100%",
    flexDirection : "row",
    justifyContent : "space-around",
    marginVertical : 10,
  }
})