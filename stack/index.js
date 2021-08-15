import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@rea'
import React from 'react'
import { View, Text } from 'react-native'

const stack=createStackNavigator();

export default function Mainstack() {
    return (
        <NavigationContainer>
            adiconar stack navigator/stack para criar createStackNavigator
            adiconar os stacks com os screens
        </NavigationContainer>
      
    )
}
