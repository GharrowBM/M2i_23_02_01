import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGridTitle({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor : color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        margin : 16,
        height : 150,
        borderRadius : 8,
        backgroundColor : "white",

    },
    innerContainer : {
        flex : 1,
        padding : 16,
        borderRadius : 8,
        justifyContent : "center",
        alignItems : "center",
    },
    title : {
        fontWeight : 'bold',
        fontSize : 20,
    }
})