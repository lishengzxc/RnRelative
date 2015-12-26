import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class EqualButton extends Component {

  handlerPress(e) {
    this.props.onPressHandler();
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.equalButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="orange"
        onPress={(e) => this.handlerPress(e)}
        >
        <Text style={styles.btnName}>
          的
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  equalButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgb(253, 188, 64)',
    borderWidth: .5,
    borderColor: 'rgb(253, 188, 64)'
  },
  btnName: {
    color: '#fff'
  }
});

export default EqualButton;
