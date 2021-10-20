import * as React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 50,
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles(size).radius, style]}
        onPress={props.onPress}
      >
        <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'orange',
      borderWidth: 2,
    },
    text: {
      color: '#000',
      fontSize: size / 3,
    },
  })
