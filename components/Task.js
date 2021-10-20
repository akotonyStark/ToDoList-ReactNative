import * as React from 'react';
import { Text, View, CheckBox, StyleSheet, Image } from 'react-native';

export default function Task(props) {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={[styles.item, styles.card, styles.shadowProp]}>
      <View style={styles.task}>
       <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text>{props.name}</Text>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    display: 'flex',
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'right',
    marginRight: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal:15,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
