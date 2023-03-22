import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'


// npm i @react-native-community/geolocation
export default function App() {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    useEffect(() => {

        Geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            error => console.log(error),
            {enableHighAccuracy :true, timeout : 20000, maximumAge : 1000 }
        );

    },[])

  return (
    <View>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})