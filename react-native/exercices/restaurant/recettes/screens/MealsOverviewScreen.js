import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'
import MealItem from '../components/MealItem'

export default function MealsOverviewScreen({navigation, route}) {
    const categoryId = route.params.categoryId

    const meals = MEALS.filter((item) => {
        return item.categoryIds.includes(categoryId)
     // autre possibilité a ajouter
    })
  return (
    <FlatList data={meals} keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
              const item = itemData.item
              const mealProps = {
                id : item.id,
                title : item.title,
                imageUrl : item.imageUrl,
                affordability : item.affordability,
                complexity : item.complexity,
                duration : item.duration
              }  

            return (<MealItem {...mealProps}  />)
        }}
    />

  )
}

const styles = StyleSheet.create({})