import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import image from '../assets/todo.png';

const EmptyList = () => (
  <View style={styles.container}>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}></ImageBackground>
    <Text style={styles.text}>No tasks</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    flexDirection: 'column',
    marginTop:100
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    height: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EmptyList;
