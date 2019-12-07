import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import LottieAnimation from '../components/LottieAnimations';
import Constants from 'expo-constants';
import { withTheme } from 'react-native-elements';
import GreenButton from '../components/GreenButton';
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieAnimation
        source={require('../../assets/11045-buildin-a-web-page.json')}
      />
      <Swiper>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>New Roomates?</Text>
          <Text style={styles.paragraph}>
            Meet your new best friends in style. Avoid the new room confusion.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>Get Organized</Text>
          <Text style={styles.paragraph}>
            Fill out your room survey and coordinate what to bring to you new
            home
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>Vote</Text>
          <Text style={styles.paragraph}>
            Keep it simple and avoid conflict. If two roomates are bringing the
            same item vote on who's to keep.
          </Text>
        </View>
      </Swiper>
      <View style={styles.buttonContainer}>
        <GreenButton title="Get Started" onSubmit={() => navigation.navigate('SelectRoom')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
    // backgroundColor: '#E1E3E1'
  },
  infoContainer: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 30
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 16,
    paddingHorizontal: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 65,
    marginBottom: 20,
    width: '100%'
  },
  button: {
    width: '40%'
    //   height: 300,
  },
  text: {
    fontSize: 20
  },

  buttonStyle1: {
    borderColor: '#E1E3E1',
    borderWidth: 4,
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    maxWidth: '40%'
  },

  text1: {
    color: '#E1E3E1',
    fontSize: 22,
    textAlign: 'center'
  },
  buttonStyle2: {
    borderColor: '#06CEC1',
    borderWidth: 4,
    flex: 1,
    maxWidth: '40%',
    backgroundColor: '#06CEC1',
    justifyContent: 'center'
  },
  text2: { color: '#FFFFFF', fontSize: 22, textAlign: 'center' }
});
export default withTheme(WelcomeScreen);
