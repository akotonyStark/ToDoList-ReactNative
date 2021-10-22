import * as React from 'react';
import { Text, View, CheckBox, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

export default function Task(props) {
  const [checked, setChecked] = React.useState(false);
 
  return (
    <View style={[styles.item, styles.card, styles.shadowProp]}>
      <View style={styles.task}>
        <Icon
          name="description"
          type="material"
          color="#2980B9"          
        />
        <Text
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: 15,
            fontSize: 18
          }}>
          {props.name}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            justifyContent: 'right',
            alignSelf: 'right',
          }}>
          <Icon
            name="more-vert"
            type="material"
            color="#7E837F"
            onPress={() => alert(props.name)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'flex-end'
  },
  checkbox: {
    alignSelf: 'right',
    marginRight: 10,
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
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
