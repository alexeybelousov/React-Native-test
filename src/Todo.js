import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, index, onToogle, onRemove }) => {
  return (
    <TouchableOpacity
      onPress={ () => onToogle(todo.id) }
      onLongPress={ () => onRemove(todo.id) }
    >
      <View style={ styles.container }>
        <Text
          style={ todo.done ? styles.textDone : styles.text }
        >
          { `${index + 1}. ${todo.title}` }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    textDecorationLine: 'none',
    fontSize: 20
  },
  textDone: {
    textDecorationLine: 'line-through',
    fontSize: 20
  }
})