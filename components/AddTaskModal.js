import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from 'react-native';

const AddTaskModal = ({ setModalVisible, modalVisible = {modalVisible} }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Task Details</Text>
            <TextInput style={styles.inputStyle} placeholder="Title" />
            <TextInput style={styles.inputStyle} placeholder="Priority" />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 10,
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputStyle: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    marginBottom: 10,
    width:250,
    padding: 10,
    height: 40,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    width:500
  },
});

export default AddTaskModal;
