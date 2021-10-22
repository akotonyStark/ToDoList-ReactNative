import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TaskInput = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      placeholder="Type something here..."
      value={props.taskName}
      onChange={(value) => {
        props.setTaskName(value.nativeEvent.text);
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#f1f1f1',
    height: 50,
    width: 0.65 * windowWidth,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
  },
});

export default TaskInput;
