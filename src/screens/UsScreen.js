import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import LottieAnimations from '../components/LottieAnimations';
import Deck from '../components/Deck';
import RoomateCard from '../components/RoomateCard';
import ItemCard from '../components/ItemCard'

  const livingItems = [
    { title: 'TV' },
    { title: 'Desk' },
    { title: 'Chair' },
    { title: 'TV Stand' },
    { title: 'Xbox' },
    { title: 'PS4' },
    { title: 'Nintendo Switch' },
    { title: 'Desktop Computer' },
    { title: 'Apple TV' },
    { title: 'ChromeCast' },
    { title: 'Window Shades' },
    { title: 'Wifi Router' }
  ];

const UsScreen = () => {
  return (
    <ScrollView>
        <Text style={{fontSize: 22, textAlign: 'center', fontWeight: 10}}>Roomates</Text>
      <RoomateCard name="Abraham Lincoln" />
      <RoomateCard name="George Washington" />
      <RoomateCard name="John Adams" />
      <RoomateCard name="Thomas Galorath" />

      <RoomView roomName="Kitchen" items={livingItems} />
      <RoomView roomName="Living" items={livingItems} />
      <RoomView roomName="Bedroom" items={livingItems} />
    </ScrollView>
  );
};

const RoomView = ({ roomName, items }) => {

  return(
    <View>
      <Text style={{fontSize: 18, fontWeight: 10, marginLeft: 15, marginTop: 10,}}>{roomName}</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ItemCard title={item.title} tagTitle={roomName} ownerName='Thomas Galorath' />
        )}
      />
    </View>
  );
};

export default UsScreen;
