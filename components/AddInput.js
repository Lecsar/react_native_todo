import React from 'react';
import {StyleSheet, TextInput, Dimensions, View, Button} from 'react-native';
import {DeleteButton} from './DeleteButton';

const {width} = Dimensions.get('window');
const vh = width / 100;

export class AddInput extends React.Component {
    state = {text: ''};

    changeValue = ({nativeEvent: {text}}) => this.setState({text});

    clearInput = () => this.setState({text: ''});

    addTask = () => {
        const valueWithoutSpaces = this.state.text.trim();

        if (valueWithoutSpaces) {
            this.props.addTask(valueWithoutSpaces);
            this.clearInput();
        }
    };

    render() {
        const {text} = this.state;

        return (
            <View style={styles.group}>
                <TextInput
                    style={styles.input}
                    onChange={this.changeValue}
                    value={text}
                    onEndEditing={this.addTask}
                    autoFocus
                />
                <DeleteButton onPress={this.clearInput} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    group: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        backgro
    },

    input: {
        width: '85%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
});
