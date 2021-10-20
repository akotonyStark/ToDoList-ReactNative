import React, { useState } from 'react';
import {
  CheckBox,
  Text,
  Button,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import Task from './components/Task';
import EmptyList from './components/EmptyList';
import {RoundedButton} from './components/RoundedButton';

// or any pure javascript modules available in npm
import { TextInput, Card } from 'react-native-paper';


export default function App() {
  const [isSelected, setSelection] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  const [taskName, setTaskName] = React.useState('');

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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todo List</Text>

          <ScrollView
            style={{ height: '80%', marginBottom: 20, marginTop: 10 }}>
            <View style={styles.items}>
              {tasks.length === 0 ? (
                <EmptyList />
              ) : (
                tasks.map((item) => {
                  return (
                    <Task
                      id={item.id}
                      name={item.taskName}
                      isCompleted={item.isCompleted}
                    />
                  );
                })
              )}
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

           <RoundedButton title = "Add" onPress={addListItemHandler}/>    
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 20,
  },
  keyboard: {
    flex: 1,
  },
  tasksWrapper: {
    paddingHorizontal: 10,
    paddingTop: 30,
    height: '100%',
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
    flexDirection: 'row',
    // height: '10%',
    justifyContent: 'flex-end',
  },
  textInput: {
    backgroundColor: '#f1f1f1',
    height: 50,
    marginBottom: 10,
    width: '90%',
    marginRight: 10
  },
});
