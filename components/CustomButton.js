import React from 'react';
import { Button } from 'react-native';

export const btnTypes = {
  delete: '✘',
  edit: `✎`,
  accept: '✔'
};

export const CustomButton = ({ onPress, type = btnTypes.delete }) => (
  <Button title={type} onPress={onPress} />
);
