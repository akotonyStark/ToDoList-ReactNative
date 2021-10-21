import * as React from 'react';
import { Text, View, CheckBox, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

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
        <Text style={{display:"flex", flexDirection: "row", justifyContent: "flex-start"}}>{props.name}</Text>
        <View style={{position: 'absolute',   right: 0, bottom: 0, justifyContent: 'right', alignSelf: 'right'}}>
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
