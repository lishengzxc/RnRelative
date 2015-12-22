var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var OfButton = React.createClass({
  render: function() {
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
});

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

module.exports = OfButton;
