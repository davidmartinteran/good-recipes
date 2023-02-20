import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import { View, Text } from 'react-native'

import HomeSearchBar from './SearchBar'
import RecipesList from './RecipesList'
import repositories from '../data/repositories.js'

const Main = () => {
  const [searchedText, setSearchedText] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    getDataFromRepository(searchedText)
  }, [searchedText])

  const searchText = (text) => {
    setSearchedText(text)
  }
  const getDataFromRepository = (searchedText) => {
    if (searchedText !== '') {
      setData(repositories.filter((recipe) => recipe.name.includes(searchedText)))
    } else {
      setData(repositories)
    }
  }
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <HomeSearchBar searchText={searchText} />
      <Text>{searchedText}</Text>
      <RecipesList data={data} />
    </View>
  )
}

export default Main
