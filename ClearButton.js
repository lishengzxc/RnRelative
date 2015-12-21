var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ClearButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.clearButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        >
        <Text style={styles.btnName}>
          C
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  clearButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6'
  },
  btnName: {
    color: 'red'
  }
});

module.exports = ClearButton;
