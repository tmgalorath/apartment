import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button as MaterialButton } from 'react-native-material-ui';
import { TextInput } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import { Card, Input } from 'react-native-elements';
import GreenButton from './GreenButton';

const Bringing = ({navigation}) => {
  const [bringing, setbringing] = useState('');
  const [items, setitems] = useState([]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>What are you Bringing?</Text>
      <Input
        autoCorrect={false}
        value={bringing}
        onChangeText={setbringing}
        onSubmitEditing={() => {
          setitems([...items, { title: bringing }]);
          setbringing('');
        }}
      />

      <FlatList
        data={items}
        renderItem={({ item }) => <Item title={item.title} />}
      />
      <View style={styles.button}>
        <GreenButton
          title="Next"
          onSubmit={() => {
            navigation.navigate('Personal', items)
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
      justifyContent: "space-between",
  },
  button: {
      alignItems: "center",
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

export default Bringing;
