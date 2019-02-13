import React from 'react';
import { Button } from 'react-native';

export const DeleteButton = ({ onPress }) => (
  <Button title="&times;" onPress={onPress} />
);
