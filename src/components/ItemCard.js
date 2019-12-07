import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import CameraTest from '../components/CameraTest'


const Item = ({ title, tagTitle, ownerName }) => {
  const tagToColor = {
    Other: 'black',
    Kitchen: 'blue',
    Living: 'red',
    Bedroom: 'green',
    Personal: 'purple'
  };

  const [takePhoto, setTakePhoto] = useState(false)
  const [photo, setPhoto] = useState(null)
  const tagBackgroundColor = tagToColor[tagTitle];
  return (
    <View>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              opacity: 0.7,
              backgroundColor: tagBackgroundColor,
              left: -15,
              top: -15,
              width: 80,
              height: 49,
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
              position: 'absolute'
            }}
          ></View>
          <View style={{ width: 60, marginRight: 30 }}>
            <Text style={{color: 'white'}}>{tagTitle}</Text>
          </View>

          <Text style={{ fontSize: 16 }}>{title}</Text>
          <View style={{ flex: 1, top: -15, right: -10, position: 'absolute' }}>
            <Text style={{ fontSize: 12 }}>{ownerName}</Text>
          </View>
          {!ownerName ? (
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 0, right: 0 }}
              onPress={() => setTakePhoto(true)}
            >
              {!photo ? (
                <MaterialIcons name="camera-alt" size={16} color="black" />
              ) : (

                  <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 100, height: 40, marginBottom: -10 }}
                  />

              )}
            </TouchableOpacity>
          ) : null}

          {takePhoto && (
            <CameraTest
              onTakePhoto={() => setTakePhoto(false)}
              setPhoto={setPhoto}
            />
          )}
        </View>
      </Card>
    </View>
  );
};

export default Item;
