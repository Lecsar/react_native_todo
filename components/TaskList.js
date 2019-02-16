import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Task } from './Task';
import { AddInput } from './AddInput';

export class TaskList extends Component {
  state = {
    editingTaskId: null,
  };

  selectEditingTask = (editingTaskId = null) => () => {
    this.setState({ editingTaskId });
  };

  changeTask = id => changedText => {
    this.props.changeTask(id, 'text', changedText);
    this.selectEditingTask()();
  };

  render() {
    const { editingTaskId } = this.state;
    const { tasks, deleteTask, changeTask } = this.props;

    return (
      <View style={styles.list}>
        {tasks.map(({ id, ...data }) =>
          editingTaskId === id ? (
            <AddInput
              key={id}
              text={data.text}
              onAccept={this.changeTask(id)}
              onEndEditingInputWithText={this.changeTask(id)}
              onEndEditingEmptyInput={deleteTask(id)}
              onClose={this.selectEditingTask()}
            />
          ) : (
            <Task key={id} {...data} onClickDelete={deleteTask(id)} onClickEdit={this.selectEditingTask(id)} />
          ),
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
    marginTop: 10,
  },
});
