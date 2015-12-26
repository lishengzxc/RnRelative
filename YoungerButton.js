import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class YoungerButton extends Component {

  handlerPress(e) {
    if (!this.props.canPress) return;
    this.props.onPressHandler();
  }

  render() {
    var underlayColor = this.props.canPress ? '#32B353' : '#f6f6f6';
    var btnStyles = this.props.canPress ? styles.youngerButtonCanPress : styles.youngerButtonCannotPress;
    var btnTextStyles = this.props.canPress ? styles.btnNameCanPress : styles.btnNameCannotPress;

    return (
      <TouchableHighlight
        style={btnStyles}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor={underlayColor}
        onPress={(e) => this.handlerPress(e)}
        >
        <Text style={btnTextStyles}>
          轻
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  youngerButtonCannotPress: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderWidth: .5,
    borderColor: '#e6e6e6'
  },
  youngerButtonCanPress: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#4BCC6B',
    borderWidth: .5,
    borderColor: '#4BCC6B'
  },
  btnNameCannotPress: {
    color: '#ccc'
  },
  btnNameCanPress: {
    color: '#fff'
  }
});

export default YoungerButton;
