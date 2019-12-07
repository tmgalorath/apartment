import React, { Component, useState } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types'
import {useDispatch, useStore} from 'react-redux'
import { COMPLETE_TUTORIAL } from '../actions/tutorials';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.8,
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    color: 'white',
    fontSize: 22
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 10,
  }
});


//onPress
//an object in redux tutorialCompleted: {1 : true, 2 : false}
const overlay = ({ text, header, onPress, tutorialId = 1 }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const store = useStore()

  const tutorialClosed = () => {
    setModalVisible(false)
    console.log(store.getState())
    dispatch({type: COMPLETE_TUTORIAL, data: 1})
  }
  
  // if (store.getState()[tutorialId]) {
  //   return <Text>All done here</Text>
  // }
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={tutorialClosed}>
          <View style={styles.background}>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

overlay.propTypes =   {
  header: PropTypes.string,
  text: PropTypes.string,
}
overlay.defaultProps = {
  header: "You're Done!",
  text: "Now click on your child's profile and complete your first chore"
}
export default overlay;

