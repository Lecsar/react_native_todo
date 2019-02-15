import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {AddInput} from '../components/AddInput';
import {Task} from '../components/Task';
import {TaskList} from '../components/TaskList';

let lastId = 2;

export class TodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                text: 'Test Task',
                active: false,
            },
        ],
    };

    addTask = text => {
        this.setState(({tasks}) => ({
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
        this.setState(({tasks}) => ({
            tasks: tasks.filter(({id}) => id !== deletedTaskId),
        }));
    };

    changeTask = changedTaskId => (changedOptionName, changedValue) => {
        this.setState(({tasks}) =>
            tasks.map(task => {
                if (task.id === changedTaskId && task.hasOwnProperty(changedOptionName)) {
                    return {
                        ...task,
                        [changedOptionName]: changedValue,
                    };
                }

                return task;
            }),
        );
    };

    render() {
        return (
            <View style={styles.todo}>
                <AddInput style={styles.addInput} addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
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
