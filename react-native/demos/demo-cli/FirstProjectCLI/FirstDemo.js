import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function FirstDemo() {

    const tab = [
        { text : "toto" , id : 1},
        { text : "tata" , id : 2},
        { text : "tutu" , id : 3}
    ]

    function MessageConsole() {
        console.log("Clique sur le bouton")
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.tailleTexte,styles.monTexte]}>Mon premier composant React Native</Text>
            <TextInput />
            <Button title="Mon Bouton" onPress={MessageConsole} />
            {tab.map((nom,i) => <Text key={i} style={styles.monTexte}>{nom}</Text>)}
            <FlatList data={tab} renderItem={(itemData) => {
                return (
                    <View>
                        <Text>{itemData.item.text}</Text>
                    </View>
                )
            }} keyExtractor={(item,index) => {
                return item.id;
            }}/>
        </View>
    )
}

//Mauvaise pratique
// const container = {
//     backgroundColor: "red",
//     flex: 1,
// }


//Bonne pratique
const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1,
        padding : 20,
    },
    monTexte : {
        margin : 8,
        color : "white"
    },
    tailleTexte : {
        fontSize : 32
    }
})