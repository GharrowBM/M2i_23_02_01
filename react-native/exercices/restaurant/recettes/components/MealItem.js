import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    return (
        <View>
            <Pressable>
                <View>
                    <View>
                        <Image source={{ uri : imageUrl}} style={styles.image}/>
                        <Text>{title} </Text>
                    </View>
                <Text>MealItem</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : 200,
    }
})