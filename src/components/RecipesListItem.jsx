import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const RecipesListItem = ({ item }) => {
  const { id, name, author, description, likes, pic } = item

  return (
    <View key={id} style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>Name: {name}</StyledText>
      <StyledText small>Author: {author}</StyledText>
      <StyledText small>Description: {description}</StyledText>
      <StyledText small>Likes: {likes}</StyledText>
      <StyledText small>Picture URL: {pic}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  }
})

export default RecipesListItem
