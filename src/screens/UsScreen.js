import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  Button
} from 'react-native';
import LottieAnimations from '../components/LottieAnimations';
import Deck from '../components/Deck';
import RoomateCard from '../components/RoomateCard';
import ItemCard from '../components/ItemCard';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UsScreen = ({ navigation }) => {
  const [showSettings, setShowSettings] = useState(false);
  const selector = useSelector(state => state.items);
  const addedItems = {};
  console.log('selector');
  console.log(selector);
  const other = selector.filter(item => item.tag === 'Other');
  const personal = selector.filter(item => item.tag === 'Personal');
  const bedroom = selector.filter(item => item.tag === 'Bedroom');
  const living = selector.filter(item => item.tag === 'Living');
  const kitchen = selector.filter(item => item.tag === 'Kitchen');

  return (
    <SafeAreaView>
      <View style={{ alignItems: 'flex-end', marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => setShowSettings(true)}>
          <Ionicons name="ios-settings" size={32} />
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={showSettings}
        onBackdropPress={() => setShowSettings(false)}
      >
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              margin: 5
            }}
          >
            Settings
          </Text>
          <View
            style={{
              borderBottomColor: '#ededed',
              flex: 1,
              marginHorizontal: 10,
              borderBottomWidth: 1
            }}
          ></View>

          <Button
            title="Switch Room"
            onPress={() => navigation.navigate('SelectRoom')}
          ></Button>
        </View>
      </Modal>
      <ScrollView>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>Roomates</Text>
        <RoomateCard
          name="Abraham Lincoln"
          avatar={require('../../assets/Abraham.jpg')}
        />
        <RoomateCard
          name="George Washington"
          avatar={require('../../assets/George.jpg')}
        />
        <RoomateCard
          name="John Adams"
          avatar={require('../../assets/John.jpg')}
        />
        <RoomateCard
          name="Thomas Galorath"
          avatar={require('../../assets/kanoa.jpg')}
        />
        
        <Text style={{ fontSize: 22, textAlign: 'center', margin: 5 }}>
          Our Apartment
        </Text>
        <View
          style={{
            borderBottomColor: '#ededed',
            borderBottomWidth: 1,
            marginHorizontal: 10
          }}
        />

        <RoomView roomName="Kitchen" items={kitchen} />
        <RoomView roomName="Living" items={living} />
        <RoomView roomName="Bedroom" items={bedroom} />
        <RoomView roomName="Other" items={other} />
        <RoomView roomName="Personal" items={personal} />
      </ScrollView>
    </SafeAreaView>
  );
};

UsScreen.navigationOptions = {
  title: 'Room'
};

const RoomView = ({ roomName, items }) => {
  return (
    <View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => item.title}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            tagTitle={roomName}
            ownerName={item.ownerName || 'Thomas Galorath'}
            displayCamera={false}
            photoFile={item.photo}
          />
        )}
      />
    </View>
  );
};

export default UsScreen;
