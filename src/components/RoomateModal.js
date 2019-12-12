import React from 'react';
import { View, Text, Image } from 'react-native';
import { Overlay, Avatar } from 'react-native-elements';
import {Feather, MaterialIcons} from 'react-native-vector-icons'

const RoomateModal = ({ roomateName, phone, email, school, onDismiss, avatar }) => {
    // const George = require('../../assets/George.jpg')
    // const John = require('../../assets/John.jpg')
    // const Thomas = require('../../assets/John.jpg')
    // let source = ''
    // switch (roomateName){
    //     case 'Abraham Lincoln':
    //         source = abraham
    //     case 'George Washington':
    //         source = George
    //     case 'John Adams':
    //         source = John
    //     case 'Thomas Galorath':
    //         source = abraham
    // }


  return (
    <Overlay isVisible={true} onBackdropPress={onDismiss}>
      <View
        style={{
          backgroundColor: 'blue',
          opacity: 0.5,
          position: 'absolute',
          height: 100,
          width: 334,
          borderTopEndRadius: 3,
          borderTopLeftRadius: 3
        }}
      ></View>
      <View style={{ alignItems: 'center' }}>
        <Avatar
          source={avatar}
          size="xlarge"
          rounded
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 22,
          marginVertical: 10
        }}
      >
        {roomateName}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Feather
          name="phone"
          size={30}
          style={{ marginHorizontal: 10 }}
          color="green"
        />
        <View>
          <Text style={{ fontSize: 18, marginVertical: 5, fontWeight: 'bold' }}>
            {phone}
          </Text>
          <Text>Mobile</Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#ededed',
          borderBottomWidth: 1,
          marginVertical: 15
        }}
      ></View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Feather
          name="mail"
          size={30}
          style={{ marginHorizontal: 10 }}
          color="green"
        />
        <View>
          <Text style={{ fontSize: 18, marginVertical: 5, fontWeight: 'bold' }}>
            {email}
          </Text>
          <Text>Email</Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#ededed',
          borderBottomWidth: 1,
          marginVertical: 15
        }}
      ></View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons
          name="school"
          size={30}
          style={{ marginHorizontal: 10 }}
          color="green"
        />
        <View>
          <Text style={{ fontSize: 18, marginVertical: 5, fontWeight: 'bold' }}>
            {school}
          </Text>
          <Text>School</Text>
        </View>
      </View>
    </Overlay>
  );
};

export default RoomateModal;
