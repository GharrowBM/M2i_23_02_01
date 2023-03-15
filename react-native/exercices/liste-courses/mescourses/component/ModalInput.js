import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function ModalInput(props) {


    function addArticle() {
        console.log("Ajout d'un article")
    }


    return (
        <Modal visible={props.visible}>
            <View style={styles.container}>
                <Text>Ajouter un article</Text>
                <TextInput style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Ajouter Article' onPress={addArticle} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.closeModale} color="red" />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 8,
        borderRadius: 12,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: "40%",
        marginHorizontal: 8,
    }
})