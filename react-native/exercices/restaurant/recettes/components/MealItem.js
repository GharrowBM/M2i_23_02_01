import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.mealItem}>
            <Pressable style={styles.buttonPressed}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri : imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                <Text>MealItem</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem : {
        margin : 16,
        borderRadius : 8,
        backgroundColor : "white",

    },
    innerContainer : {
        borderRadius : 8,
    },
    image : {
        width : "100%",
        height : 200,
    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 8,
        margin : 8,
    }
})