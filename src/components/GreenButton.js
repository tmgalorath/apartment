import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import { withNavigation } from 'react-navigation';

const GreenButton = ({title, onSubmit}) => {
  return (
    <Button
      style={{ text: styles.text, container: styles.button }}
      raised
      primary
      text={title}
      onPress={onSubmit}
    />
  );
};

export default GreenButton

const styles = StyleSheet.create({
  button: {
    width: '40%'
  },
  text: {
    fontSize: 20
  }
});