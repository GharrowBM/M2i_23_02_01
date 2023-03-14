import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function ModalInput(props) {
    return (
        <Modal visible={props.visible}>
            <View style={styles.container}>
                <Text>Ajouter un article</Text>
                <TextInput />
                <Button title='Cancel' onPress={props.closeModale}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center',
    }
})