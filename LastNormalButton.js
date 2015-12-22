var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var LastNormalButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.lastNormalButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        >
        <Text>
          {this.props.btnName}
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  lastNormalButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6'
  }
});

module.exports = LastNormalButton;
