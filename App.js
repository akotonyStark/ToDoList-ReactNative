import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import {
  Text,
  Button,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import Task from './components/Task';
import EmptyList from './components/EmptyList';
import { RoundedButton } from './components/RoundedButton';
import TaskInput from './components/TaskInput';
import AddTaskModal from './components/AddTaskModal';
import BottomModalPopup from './components/BottomModalPopup';

// or any pure javascript modules available in npm
import { TextInput, Card } from 'react-native-paper';
import {
  useBottomModal,
  BottomModal,
  BottomModalRef,
} from 'react-native-lightning-modal';

export default function App() {
  const [isSelected, setSelection] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const { dismiss, show, modalProps } = useBottomModal();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const clearListHandler = () => {
    setTasks((tasks) => []);
  };

  React.useEffect(() => {
    console.log('something changed');
  }, [tasks]);

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboard}>
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Todo List</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              {tasks.length > 0 ? (
                <TouchableOpacity
                  onPress={clearListHandler}
                  style={styles.clearAll}>
                  <Text style={{ justifyContent: 'center', color: 'white' }}>
                    Clear Tasks
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <ScrollView
              style={{ height: '80%', marginBottom: 20, marginTop: 10 }}>
              <View style={styles.items}>
                {tasks.length < 1 ? (
                  <EmptyList />
                ) : (
                  tasks.map((item, index) => {
                    return (
                      <Task
                        key={index}
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
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Icon                  
                  reverse                                 
                  raised={true}
                  name="add"
                  type="material"
                  color="#F9A826"
                  onPress={() => setModalVisible(!modalVisible)}
                  onLongPress = {() => alert('You long pressed')}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        {modalVisible ? (
          <AddTaskModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            tasks={tasks}
            setTasks={setTasks}
          />
        ) : null}
      </View>
    </>
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
    paddingHorizontal: 0,
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
    flexDirection: 'column',
    padding: 0,
    justifyContent: 'flex-end',
    //backgroundColor: 'red',
  },
  clearAll: {
    backgroundColor: '#2980B9',
    height: 30,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  }
});
