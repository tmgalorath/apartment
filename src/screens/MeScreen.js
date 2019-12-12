import * as Haptics from 'expo-haptics';
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from 'react-native';
import { Card } from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-paper';
import { useDispatch, useStore } from 'react-redux';
import { COMPLETE_TUTORIAL, BRING_ITEM, UPDATE_ITEM } from '../actions/tutorials';
import ItemCard from '../components/ItemCard';
import CameraTest from '../components/CameraTest';
import { TouchableOpacity } from 'react-native-gesture-handler';

var DismissKeyboard = require('dismissKeyboard');
// Buttons
var swipeoutBtns = [
  {
    text: 'Button'
  }
];

// Swipeout component

const HomeScreen = ({ navigation }) => {
  const [adding, setAdding] = useState(true);
  const [bringing, setbringing] = useState('');
  const [tag, settag] = useState('Other');
  const [myItems, setMyItems] = useState([]);
  const [photo, setPhoto] = useState(null);

  const dispatch = useDispatch();

  const returnHandler = () => {
    if (bringing === '') {
      console.log('dismissing');
      Keyboard.dismiss();
      DismissKeyboard();
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    dispatch({
      type: BRING_ITEM,
      data: { title: bringing, tag: tag, photo: photo }
    });
    setMyItems([
      ...myItems,
      { title: bringing, tag: tag, ownerName: 'Thomas Galorath' }
    ]);
    setbringing('');
  };

  const addButton = () => {
    if (adding) {
      return (
        <TouchableWithoutFeedback
          style={{
            margin: 20
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              // borderColor: 'black',
              // borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 4,
              shadowOffset: { x: 1, y: 2 },
              marginHorizontal: 10,
              paddingHorizontal: 3,
              paddingVertical: 5,
              marginVertical: 20,
            }}
          >
            <TextInput
              style={{
                width: '60%',
                fontSize: 16,
                alignSelf: 'center',
                paddingBottom: 5,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 1
              }}
              returnKeyType="done"
              autoCorrect={false}
              value={bringing}
              onChangeText={setbringing}
              placeholder="Item"
              blurOnSubmit={false}
              onSubmitEditing={returnHandler}
            />

            <Dropdown
              containerStyle={{ width: '30%' }}
              value={tag}
              dropdownOffset={{ top: 0, left: 0 }}
              rippleInsets={{ top: 0, bottom: 0 }}
              onChangeText={settag}
              data={[
                { value: 'Kitchen' },
                { value: 'Living' },
                { value: 'Bedroom' },
                { value: 'Personal' },
                { value: 'Other' }
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
        //  setMyItems([...myItems, { title: bringing }]);
      );
    } else {
      return <Button onPress={() => setAdding(!adding)}>Add</Button>;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            paddingBottom: 10
          }}
        >
          My Room
        </Text>
        <Text
          style={{
            textAlign: 'center',
            paddingBottom: 10,
            marginHorizontal: 20,
            fontSize: 16,
            paddingTop: 5,
          }}
        >
          Tell your roomates what items you will be bringing to your new
          Apartment!
        </Text>
        {addButton()}

        <FlatList
          keyboardShouldPersistTaps="never"
          keyboardDismissMode="on-drag"
          data={myItems}
          renderItem={({ item }) => (
            <ItemCard
              title={item.title}
              tagTitle={item.tag}
              ownerName="Thomas Galorath"
            />
          )}
        />
        {/* put something in here like text box */}
        <TouchableOpacity onPress={() => Keyboard.dismiss()}>
          <KeyboardSpacer />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
