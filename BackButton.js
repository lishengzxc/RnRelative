import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class BackButton extends Component {

  handlerPress(e) {
    this.props.onPressHandler();
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.backButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        onPress={(e) => this.handlerPress(e)}
        >
        <Text style={styles.btnName}>
          ←
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  backButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderWidth: .5,
    borderColor: '#e6e6e6'
  },
  btnName: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default BackButton;
