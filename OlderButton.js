import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class OlderButton extends Component {

  render() {
    console.log(this.props);


    return (
      <TouchableHighlight
        style={styles.olderButtonCannotPress}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        >
        <Text style={styles.btnNameCannotPress}>
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
