import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button';

export default function Calculatrice() {

  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [operation, setOperation] = useState('0');
  const [result, setResult] = useState('0');


  function numberPress(number) {
    console.log("appuie sur un nombre :" +number)
  }

  function operationPress() {
    console.log("appuie sur un operateur")
  }

  function resultPress() {
    console.log("appuie sur un égal")
  }

  function clear() {
    console.log("appuie sur clear")
  }

  return (
    <View style={styles.calculatrice}>
      <View>
        <Text>Mon ecran</Text>
      </View>
      <View style={styles.row}>
        <Button onPress={clear} title={"AC"} />
        <Button title={"^"} ></Button>
        <Button title={"%"}></Button>
        <Button title={"/"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"7"} onPress={() => numberPress("7")}></Button>
        <Button title={"8"}></Button>
        <Button title={"9"}></Button>
        <Button title={"X"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"4"}></Button>
        <Button title={"5"}> </Button>
        <Button title={"6"}></Button>
        <Button title={"-"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"1"}></Button>
        <Button title={"2"}></Button>
        <Button title={"3"}></Button>
        <Button title={"+"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"."}></Button>
        <Button title={"0"}></Button>
        <Button title={"Del"}></Button>
        <Button title={"="}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calculatrice: {
    width: "100%",
  },
  row: {
    Width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  }
})