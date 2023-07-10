import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screen/Home'
import ReadNews from '../Screen/ReadNews';

export default function HomeNavigator() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name='home' component={Home} />
        <Stack.Screen  name='read-news' component={ReadNews} />
    </Stack.Navigator>
  )
}