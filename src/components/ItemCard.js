import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { Card } from 'react-native-elements';
import CameraTest from '../components/CameraTest';
import { useDispatch, useStore } from 'react-redux';
import { UPDATE_ITEM } from '../actions/tutorials';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { x: 1, y: 2 }
  },
  tabBackground: {
    // opacity: 0.7,
    width: 80,
    // height: 49,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabContent: {
    flex: 1,
    minHeight: 50,
    backgroundColor: '#fff',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 10,
    alignSelf: 'stretch'
    // backgroundColor: 'red',
  },
  ownerName: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'stretch'
    // backgroundColor: 'red',
  },
  name: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 5
  }
});

class _Item extends React.Component {
  render() {
    return <Item {...this.props} />;
  }
}

const Item = ({
  title,
  tagTitle,
  photoFile,
  ownerName,
  displayCamera = true
}) => {
  const tagToColor = {
    Other: '#2d3436',
    Kitchen: '#0984e3',
    Living: '#d63031',
    Bedroom: '#27ae60',
    Personal: '#6c5ce7'
  };
  const [takePhoto, setTakePhoto] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [showCardModal, setShowCardModal] = useState(false);
  const tagBackgroundColor = tagToColor[tagTitle];
  const dispatch = useDispatch();

  const CardModal = () => {
    return (
      <Modal
        isVisible={showCardModal}
        onBackdropPress={() => setShowCardModal(false)}
        onSwipeComplete={() => setShowCardModal(false)}
        swipeDirection={['up', 'down', 'left', 'right']}
      >
        <TouchableWithoutFeedback
          onPress={() => setShowCardModal(false)}
          style={{ flex: 1 }}
        >
          <View style={{ backgroundColor: 'white' }}>
            <Text style={{ textAlign: 'center', fontSize: 22 }}>
              Owner: Thomas
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 22 }}>
              Item Name: {title}
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 22 }}>
              tag: {tagTitle}
            </Text>
            {/* <Image
            source={{ uri: photoFile.uri }}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain'
            }}
          /> */}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const PhotoImage = ({ uri }) => {
    return (
      <View
        style={{
          justifyContent: 'flex-end',
          alignSelf: 'center',
          paddingRight: 15
        }}
      >
        <Image source={{ uri }} style={{ width: 100, height: 40 }} />
      </View>
    );
  };

  const CameraIcon = () => {
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    if (photoFile) {
      return (
        <TouchableOpacity onPress={() => setShowPhotoModal(true)}>
          <Modal
            isVisible={showPhotoModal}
            onBackdropPress={() => setShowPhotoModal(false)}
            onSwipeComplete={() => setShowPhotoModal(false)}
            swipeDirection={['up', 'down', 'left', 'right']}
          >
            <TouchableWithoutFeedback
              onPress={() => setShowPhotoModal(false)}
              style={{ flex: 1 }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: photoFile.uri }}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'contain'
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <PhotoImage uri={photoFile.uri} />
          </View>
        </TouchableOpacity>
      );
    }
    if (photo) {
      return (
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignSelf: 'center'
          }}
          onPress={() => setTakePhoto(true)}
        >
          <PhotoImage uri={photo.uri} />
        </TouchableOpacity>
      );
    }
    if (!displayCamera) {
      return null;
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'flex-end',
          alignSelf: 'center',
          paddingRight: 15
        }}
        onPress={() => setTakePhoto(true)}
      >
        <MaterialIcons name="camera-alt" size={16} color="black" />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (title && tagTitle && photo) {
      dispatch({
        type: UPDATE_ITEM,
        data: { title: title, tag: tagTitle, photo: photo }
      });
    }
  }, [photo]);
  return (
    <View>
      <View style={styles.row}>
        <View
          style={[
            styles.tabBackground,
            { backgroundColor: tagBackgroundColor }
          ]}
        >
          <Text style={{ color: 'white' }}>{tagTitle}</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>({ownerName.split(' ')[0]})</Text>
        </View>
        <View style={styles.tabContent}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={styles.title}>
              <Text style={{ fontSize: 16 }}>{title}</Text>
            </View>
            {/* <View style={styles.ownerName}>
              <Text style={{ fontSize: 14, textAlign: 'center' }}>(Thomas)</Text>
            </View> */}

            <CameraIcon />
            {takePhoto && (
              <CameraTest
                onTakePhoto={() => setTakePhoto(false)}
                setPhoto={setPhoto}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default _Item;
