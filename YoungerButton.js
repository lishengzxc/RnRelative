import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class YoungerButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.youngerButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        >
        <Text style={styles.btnName}>
          轻
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  youngerButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderWidth: .5,
    borderColor: '#e6e6e6'
  },
  btnName: {
    color: '#ccc'
  }
});

export default YoungerButton;
