import React from 'react';
import { StyleSheet, TextInput, Dimensions, View, Button } from 'react-native';
import { noop } from 'lodash';
import { CustomButton, btnTypes } from './CustomButton';

export class AddInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text || '',
    };
  }

  clearInput() {
    this.setState({ text: '' });
  }

  changeValue = ({ nativeEvent: { text } }) => {
    this.setState({ text });
  };

  onAcceptInput = () => {
    this.props.onAccept(this.state.text);
    this.onEndEditing();
  };

  onCloseInput = () => {
    this.props.onClose();
    this.clearInput();
  };

  onEndEditing = () => {
    const { onEndEditingInputWithText, onEndEditingEmptyInput } = this.props;
    const valueWithoutSpaces = this.state.text.trim();

    if (valueWithoutSpaces) {
      onEndEditingInputWithText(valueWithoutSpaces);
    } else {
      onEndEditingEmptyInput();
    }

    this.clearInput();
  };

  render() {
    const { text } = this.state;
    const { hideAcceptBtn, hideCloseBtn } = this.props;

    return (
      <View style={styles.group}>
        <TextInput
          style={styles.input}
          onChange={this.changeValue}
          value={text}
          onEndEditing={this.onEndEditing}
          autoFocus
        />
        <View style={styles.btnGroup}>
          {!hideAcceptBtn && <CustomButton type={btnTypes.accept} onPress={this.onAcceptInput} />}
          {!hideCloseBtn && <CustomButton type={btnTypes.delete} onPress={this.onCloseInput} />}
        </View>
      </View>
    );
  }
}

AddInput.defaultProps = {
  hideAcceptBtn: false,
  hideCloseBtn: false,
  onEndEditingInputWithText: noop,
  onEndEditingEmptyInput: noop,
  onClose: noop,
  onAccept: noop,
};

const styles = StyleSheet.create({
  group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },

  input: {
    width: '100%',
    marginRight: 15,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
  },

  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
});
