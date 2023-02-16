import React from 'react'
import { Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js'
import RecipesListItem from './RecipesListItem.jsx'

const RecipesList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RecipesListItem item={item} />
      )}
    />
  )
}

export default RecipesList
