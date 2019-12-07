import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Overlay } from 'react-native-elements';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    camera: null,
  };

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.props.onTakePhoto()
      this.props.setPhoto(photo)
    }
  };
  // console.log(this.state.photo)

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    if (this.state.photo) {
      console.log('helklo');
      return (
        <View>
          <Image source={this.state.photo.uri} />
        </View>
      );
    }
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Overlay isVisible={true}>
          <View style={{ flex: 1 }}>
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ flex: 1 }}
              type={this.state.type}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    this.snap();
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 10,
                      color: 'white'
                    }}
                  >
                    {' '}
                    Flip{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </Overlay>
      );
    }
  }
}
