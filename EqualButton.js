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
        underlayColor="orange"
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
    backgroundColor: 'rgb(253, 188, 64)',
    borderWidth: .5,
    borderColor: 'rgb(253, 188, 64)'
  },
  btnName: {
    color: '#fff'
  }
});

module.exports = EqualButton;
