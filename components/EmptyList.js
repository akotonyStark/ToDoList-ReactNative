import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import image from '../assets/girl.png';

const warning  = "Nothing to see here..."
const EmptyList = () => (
  <View style={styles.container}>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}></ImageBackground>
    <Text style={styles.text}>{warning}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    marginTop: 80
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 300
    
  },
  text: {
    color: 'grey',
    fontSize: 18,
    lineHeight: 20,
    height: '100%',
    textAlign: 'center',
  },
});

export default EmptyList;
