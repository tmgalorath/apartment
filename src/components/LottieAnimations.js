import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';


// const LottieAnimations = () => {
//     return (
//         <View>
//             <Text>Hello world</Text>
//         </View>
//     )
// }

// export default LottieAnimations


export default class LottieAnimation extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 200,
            height: 300,
          }}
        //   loop={false}
          source={this.props.source}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 100,
  },
  buttonContainer: {
    paddingTop: 20
  }
});
