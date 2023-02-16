import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import RecipesList from './RecipesList'

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Food Application</Text>
      <RecipesList />
    </View>
  )
}

export default Main
