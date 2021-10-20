import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import Task from './components/Task';

// or any pure javascript modules available in npm
import { TextInput, Card } from 'react-native-paper';

const seedData = [
  {
    taskName: 'Learn React',
    isCompleted: true,
    id: 'task 1',
  },

  {
    taskName: 'Upgrade to React Native',
    isCompleted: false,
    id: 'task 2',
  },

  {
    taskName: 'Intro to Flutter',
    isCompleted: false,
    id: 'task 3',
  },

  {
    taskName: 'iOS Dev',
    isCompleted: true,
    id: 'task 4',
  },

  {
    taskName: 'Kotlin Android',
    isCompleted: true,
    id: 'task 5',
  },
];

export default function App() {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>

        <View style={styles.items}>
          {seedData.map((item) => {
            return <Task id={item.id} name = {item.taskName} isCompleted = {item.isCompleted}/>
          })}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type something here..."
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    paddingTop: 20,
    height: '85%',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '10%',
    justifyContent: 'flex-end',
  },
  textInput: {
    backgroundColor: 'white',
    height: 50,
  },
});
