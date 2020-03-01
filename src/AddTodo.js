import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

export const AddTodo = ({ onAddTodo }) => {
  const [value, setValue] = useState('');
  const onPressHandler = () => {
    if (value.trim()) {
      onAddTodo(value)
      setValue('')
    } else {
      return Alert.alert('Please input todo title')
    }
  }

  return (
    <View style={ styles.container }>
      <TextInput
        style={ styles.input }
        onChangeText={ setValue }
        value={ value }
        placeholder='Input title...'
      />
      <Button title='Add' onPress={ onPressHandler } />
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    fontSize: 20
  }
})