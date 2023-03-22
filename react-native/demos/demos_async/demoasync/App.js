import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [value,setValue] = useState({ firstName : '', lastName : ''});

    // Demo avec stockage String

    // const addData = async () => {
    //     try{
    //         await AsyncStorage.setItem('key','toto')
    //     }catch (error) {
    //         console.log(error)
    //     }
    // }

    // const getData = async () => {
    //     try {
    //       const value =  await AsyncStorage.getItem('key')
    //       if(value !== null) {
    //         setValue(value)
    //       }
    //     }catch (error) {
    //         console.log(error)
    //     }
    // }

    // const removeData = async () => {
    //     try {
    //         await AsyncStorage.removeItem('key')
    //         setValue('')
    //     }catch (error) {
    //         console.log(error)
    //     }
    // }

    // Demo avec stockage Objet

    const addData = async () => {

    }
    const getData = async () => {
        
    }
    const removeData = async () => {
        
    }

  return (
    <View>
      {/* <Text style={{fontSize : 32}}>Valeur stockée : {value}</Text> */}
      <Text style={{fontSize : 32}}>Nom : {value.firstName}</Text>
      <Text style={{fontSize : 32}}>Nom : {value.lastName}</Text>
      <Button title='Add Data' onPress={addData}/>
      <Button title='Get Data' onPress={getData}/>
      <Button title='Delete Data' onPress={removeData}/>
    </View>
  )
}

const styles = StyleSheet.create({})