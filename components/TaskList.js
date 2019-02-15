import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Task} from './Task';

export class TaskList extends Component {
    render() {
        const {tasks} = this.props;

        return (
            <View style={styles.list}>
                {tasks.map(({id, ...data}) => (
                    <Task key={id} {...data} onClickDelete={this.props.deleteTask(id)} />
                ))}
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
        backgroundColor: 'red',
    },
});
