import * as React from 'react';
import { Text, View, CheckBox, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function Task(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <MenuContext >
      <View>
        <Menu>
          <MenuTrigger>
            <View style={[styles.item, styles.card, styles.shadowProp]}>
              <View style={styles.task}>
                <Image
                  style={styles.tinyLogo}
                  source={require('@expo/snack-static/react-native-logo.png')}
                />
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 15,
                    fontSize: 18,
                    color: '#5f9ea0',
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
          </MenuTrigger>

          <MenuOptions style={styles.menuContainer}>
            <MenuOption onSelect={() => alert(`Save`)} text="Edit" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={false}
              text="View Details"
            />
          </MenuOptions>
        </Menu>
      </View>
    </MenuContext>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-start',
    paddingBottom: 30,
    backgroundColor: '#f1f1f1',
  },

  task: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'flex-end'
  },
  card: {
    backgroundColor: '#222222',
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
  tinyLogo: {
    width: 30,
    height: 30,
  },
});
