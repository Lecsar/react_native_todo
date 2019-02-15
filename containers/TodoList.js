import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {AddInput} from '../components/AddInput';
import {Task} from '../components/Task';

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

    deleteTask = deletedTaskId => {
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
            <View>
                <AddInput addTask={this.addTask} />
            </View>
        );
    }
}
