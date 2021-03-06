import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomButton, btnTypes } from './CustomButton';

export const Task = ({ text, onClickDelete, onClickEdit, onClickChange }) => {
  return (
    <View style={styles.task}>
      <Text style={styles.text}>{text}</Text>
      <CustomButton type={btnTypes.edit} onPress={onClickEdit} />
      <CustomButton type={btnTypes.delete} onPress={onClickDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    width: '80%',
  },
});
