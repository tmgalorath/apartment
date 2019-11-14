import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CheckableItem = ({ title }) => {
  const [checked, setchecked] = useState(false);
  console.log(checked)
  return (
    <View style={styles.row}>
      <CheckBox
        containerStyle={styles.checkbox}
        textStyle={styles.text}
        center
        title={title}
        iconRight
        iconType="material"
        checkedIcon="add"
        uncheckedIcon="clear"
        checkedColor="#00E9A1"
        checked={checked}
        onPress={() => setchecked(!checked)}
      />
      {/* <CheckBox checked={checked} onPress={() => setchecked(!checked)} /> */}

      {/* <Text style={styles.title}>{title}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    flex: 1
  },
  checkbox: {
    flex: 1,
    alignContent: "space-between"
  },
  text: {
    flex: 1
  },

  title: {
      justifyContent: "center",
    fontSize: 18
  }
});

export default CheckableItem;
