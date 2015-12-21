var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var BackButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.backButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        >
        <Text style={styles.btnName}>
          B
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  backButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    borderRightWidth: 1,
    borderRightColor: '#e6e6e6'
  },
  btnName: {
    color: 'black'
  }
});

module.exports = BackButton;
