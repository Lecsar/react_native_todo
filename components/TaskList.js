import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Task } from './Task';

export class TaskList extends Component {
  state = {
    editingTaskId: null
  };

  selectEditingTask = (editingTaskId = null) => () => {
    this.setState({ editingTaskId });
  };

  render() {
    const { editingTaskId } = this.state;
    const { tasks, deleteTask } = this.props;

    return (
      <View style={styles.list}>
        {tasks.map(({ id, ...data }) =>
          editingTaskId === id ? (
            <TextInput value={data.text} />
          ) : (
            <Task
              key={id}
              {...data}
              onClickDelete={deleteTask(id)}
              onClickEdit={this.selectEditingTask(id)}
            />
          )
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red'
  }
});
