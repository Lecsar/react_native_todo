import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TodoList } from './containers/TodoList';

let lastId = 2;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 100
  }
});
