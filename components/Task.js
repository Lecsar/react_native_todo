import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DeleteButton} from './DeleteButton';

export const Task = ({text, onClickDelete}) => {
    return (
        <View style={styles.task}>
            <Text style={styles.text}>{text}</Text>
            <DeleteButton onPress={onClickDelete} />
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        width: '85%',
    },
});
