import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'

export default function MealsOverviewScreen({navigation, route}) {
    const categoryId = route.params.categoryId

    const meals = MEALS.filter((item) => {
        return item.categoryIds.include(categoryId)
    })
  return (
    <View>
      <Text>MealsOverviewScreen {categoryId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})