import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button as MaterialButton } from 'react-native-material-ui';
import { TextInput } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import { Card, Input } from 'react-native-elements';
import GreenButton from './GreenButton';
import CheckableItem from './CheckableItem';


const Personal = ({navigation}) => {
    const items = navigation.state.params
    return (
      <SafeAreaView>
        <Text>
          Mark the Items that you will not be sharing with the apartment
        </Text>
          <FlatList
            data={items}
            renderItem={({ item }) => <CheckableItem title={item.title} />}
          />
          <View style={styles.button}>
            <GreenButton
              title="Next"
              onSubmit={() => {
                navigation.navigate('Wanting', items);
              }}
            />
          </View>
        </SafeAreaView>
    );
}

const Item = ({ title }) => {
  return (
    <View>
      <Card>
        <Text>{title}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default Personal
