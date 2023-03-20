import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from   './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'



const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen} options={{title : 'All Categories'}}/>
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})