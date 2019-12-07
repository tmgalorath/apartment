import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button as MaterialButton } from 'react-native-material-ui';
import { TextInput } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import { Card, Input } from 'react-native-elements';
import GreenButton from './GreenButton';

const Wanting = ({ navigation }) => {
  const [wanting, setWanting] = useState('');
  const [items, setitems] = useState([]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>What do you want to bring to the apartment that isn't already there?</Text>
      <Input
        autoCorrect={false}
        value={wanting}
        onChangeText={setWanting}
        onSubmitEditing={() => {
          setitems([...items, { title: wanting }]);
          setWanting('');
        }}
      />

      <FlatList
        data={items}
        renderItem={({ item }) => <Item title={item.title} />}
      />
      <View style={styles.button}>
        <GreenButton
          title="Finish"
          onSubmit={() => {
            navigation.navigate('Home', items);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  wrapper: {
    height: '100%',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center'
  }
});

const Item = ({ title }) => {
  return (
    <View>
      <Card>
        <Text>{title}</Text>
      </Card>
    </View>
  );
};

export default Wanting;
