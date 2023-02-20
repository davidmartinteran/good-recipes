import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons'

const SearchBar = ({ searchText }) => {
  const [searchedText, setSearchedText] = useState('')
  const [clicked, setClicked] = useState(false)

  return (
    <View style={styles.container}>
      <View
        style={styles.searchBar}
      >
        {/* Search Icon */}
        <Feather
          name='search'
          size={20}
          color='black'
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder='Search'
          value={searchedText}
          onChangeText={setSearchedText}
          clearButtonMode='always'
          onFocus={() => {
            setClicked(true)
          }}
          onEndEditing={() => {
            setClicked(false)
          }}
          onSubmitEditing={() => searchText(searchedText)}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name='cross' size={25} color='black' style={styles.cancel} onPress={() => {
              setSearchedText('')
            }}
          />
        )}
      </View>
    </View>
  )
}
export default SearchBar

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%'
  },
  searchBar: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    width: '100%'
  },
  input: {
    flex: 1,
    fontSize: 20,
    marginLeft: 10
  },
  cancel: {
    padding: 1

  }

})
