import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class OlderButton extends Component {

  handlerPress(e) {
    if (!this.props.canPress) return;
    this.props.onPressHandler();
  }

  render() {
    var underlayColor = this.props.canPress ? '#237B65' : '#f6f6f6';
    var btnStyles = this.props.canPress ? styles.olderButtonCanPress : styles.olderButtonCannotPress;
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
          长
        </Text>
      </TouchableHighlight>

    );
  }
}

var styles = StyleSheet.create({
  olderButtonCannotPress: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderWidth: .5,
    borderColor: '#e6e6e6'
  },
  olderButtonCanPress: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#35A084',
    borderWidth: .5,
    borderColor: '#35A084'
  },
  btnNameCannotPress: {
    color: '#ccc'
  },
  btnNameCanPress: {
    color: '#fff'
  }
});

export default OlderButton;
