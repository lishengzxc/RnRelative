import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class OfButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.ofButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="orange"
        >
        <Text style={styles.btnName}>
          的
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  ofButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgb(253, 188, 64)'
  },
  btnName: {
    color: '#fff'
  }
});

export default OfButton;
