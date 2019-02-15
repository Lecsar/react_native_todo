import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DeleteButton from './DeleteButton';

export const Task = ({ text }) => {
  return (
    <View style={styles.task}>
      <Text>{text}</Text>
      <DeleteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
