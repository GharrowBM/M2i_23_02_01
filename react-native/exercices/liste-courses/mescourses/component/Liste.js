import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalInput from './ModalInput'

export default function Liste() {

    const [modalIsVisible,setModalIsVisible] = useState(false) // state pour ma modal
    const [articles,setArticles] = useState([])

    function openModale(){
        console.log("clique sur bouton ajouter article")
        setModalIsVisible(true)
    }

    function closeModale(){
        console.log("clique sur bouton de ma modal pour fermer ma modal")
        setModalIsVisible(false)
    }

  return (
    <View style={styles.container}>
        <Button title='Ajouter Article' onPress={openModale}/>
        <ModalInput visible={modalIsVisible} closeModale={closeModale}/>
      <Text>Liste</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 20,
        paddingHorizontal : 16, 
    }
})