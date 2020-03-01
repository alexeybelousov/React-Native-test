import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
      done: false,
    }])
  }
  const toogleTodo = id => {
    setTodos(prev => prev.map(todo => {
      return todo.id !== id ? todo : { ...todo, done: !todo.done }
    }))
  }
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onAddTodo={ addTodo }/>
        
        <FlatList
          keyExtractor={ item => item.id }
          data={ todos }
          renderItem={({ item, index }) => <Todo
                                      todo={ item }
                                      index={ index }
                                      onToogle={ toogleTodo }
                                      onRemove={ removeTodo } 
                                    /> }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20
  },
});
