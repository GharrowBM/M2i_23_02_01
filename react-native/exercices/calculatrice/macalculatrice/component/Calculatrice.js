import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button';

export default function Calculatrice() {

    const [firstNumber,setFirstNumber] = useState('0');
    const [secondNumber,setSecondNumber] = useState('0');
    const [operation,setOperation] = useState('0');
    const [result,setResult] = useState('0');

  return (
    <View>
        <View>
      <Text>Mon ecran</Text>
      </View>
      <View>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})