import React from 'react'
import { Text, FlatList } from 'react-native'
import RecipesListItem from './RecipesListItem.jsx'

const RecipesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Text> </Text>}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RecipesListItem item={item} />
      )}
    />
  )
}

export default RecipesList
