import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AddInput } from '../components/AddInput';
import { TaskList } from '../components/TaskList';

let lastId = 2;

export class TodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: 'Test Task 123',
        active: false,
      },
    ],
  };

  addTask = text => {
    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks,
        {
          id: ++lastId,
          text,
          active: false,
        },
      ],
    }));
  };

  deleteTask = deletedTaskId => () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(({ id }) => id !== deletedTaskId),
    }));
  };

  changeTask = (changedTaskId, changedOptionName, changedText) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task => {
        if (task.id === changedTaskId && task.hasOwnProperty(changedOptionName)) {
          return {
            ...task,
            [changedOptionName]: changedText,
          };
        }

        return task;
      }),
    }));
  };

  render() {
    return (
      <View style={styles.todo}>
        <AddInput style={styles.addInput} onEndEditingInputWithText={this.addTask} hideAcceptBtn />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTask={this.changeTask} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});
