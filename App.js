import React, { useState } from 'react';
import {
  CheckBox,
  Text,
  Button,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import Task from './components/Task';

// or any pure javascript modules available in npm
import { TextInput, Card } from 'react-native-paper';

// const seedData = [
//   {
//     taskName: 'Learn React',
//     isCompleted: true,
//     id: 'task 1',
//   },
// ];

export default function App() {
  const [isSelected, setSelection] = React.useState(false);
  const [tasks, setTasks] = React.useState([])
  const [taskName, setTaskName] = React.useState("");

  const addListItemHandler = () => {
    let newItem = {
      taskName: taskName,
      isCompleted: false,
      id: 'Task' + Math.floor(Math.random(10) * 1000),
    };
    console.log([...tasks, newItem]);
    setTasks((task) => [...tasks, newItem]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>
        <ScrollView style ={{height: '80%', marginBottom:20}}>
          <View style={styles.items}>
            {tasks.length === 0 ? null : tasks.map((item) => {
              return (
                <Task
                  id={item.id}
                  name={item.taskName}
                  isCompleted={item.isCompleted}
                />
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type something here..."
            value={taskName}
            onChange={(value) => {
              setTaskName(value.nativeEvent.text);
            }}
          />

          <Button
            style={{ width: 10 }}
            title="Add"
            onPress={addListItemHandler}
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
    backgroundColor: '#f1f1f1',
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
    marginBottom: 10,
  },
});
