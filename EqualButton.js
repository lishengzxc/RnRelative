var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var EqualButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.equalButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#B92501"
        >
        <Text style={styles.btnName}>
          ＝
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  equalButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'red',
    borderLeftColor: 'red',
    borderLeftWidth: 1
  },
  btnName: {
    color: '#fff'
  }
});

module.exports = EqualButton;
