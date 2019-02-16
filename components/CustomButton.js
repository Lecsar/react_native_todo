import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { noop } from 'lodash';

export const btnTypes = {
  delete: '✘',
  edit: `✎`,
  accept: '✔',
};

export const CustomButton = ({ onPress = noop, type = btnTypes.delete }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.icon}>{type}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: '100%',
    marginLeft: 2,
    marginRight: 2,
  },
});
