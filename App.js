import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import AddInput from './components/AddInput';

let lastId = 2;

export default class App extends React.Component {
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
        console.log(text);

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

    render() {
        return (
            <View style={styles.container}>
                <AddInput addTask={this.addTask} />
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
        paddingTop: 100,
    },
});
