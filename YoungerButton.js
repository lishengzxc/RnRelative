var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var YoungerButton = React.createClass({
  render: function() {
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
});

var styles = StyleSheet.create({
  youngerButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    backgroundColor: '#f6f6f6',
    borderRightWidth: 1,
    borderRightColor: '#e6e6e6'
  },
  btnName: {
    color: '#ccc'
  }
});

module.exports = YoungerButton;
