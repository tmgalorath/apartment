import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import { FlatList } from 'react-native-gesture-handler';

import { Card as ItemCard } from 'react-native-elements';
import RoomateModal from './RoomateModal';
const RoomateCard = ({ name }) => {
  const items = ['BeanBag Chair', 'TV', 'Table', 'Plates'];
  const [modal, setModal] = useState(false)
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Card style={{ margin: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Icon icon="image" size={32} style={{ marginRight: 10 }} />
            <View>
              <Text>{name}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>

      {
        modal && <RoomateModal onDismiss={() => setModal(false)} roomateName={name} email='MikeJones@gmail.com' phone='801-375-9876' school='Brigham Young University'/>
      }
    </SafeAreaView>
  );
};

const renderItem = item => {
  return (
    <View style={{ marginRight: 10 }}>
      <Text>{item}</Text>
    </View>
  );
};
export default RoomateCard;
