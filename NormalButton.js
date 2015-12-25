import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class NormalButton extends Component {
  constructor(props) {
    super();
    this.state = {
      value: {
        '父': '爸爸',
        '母': '妈妈',
        '兄': '哥哥',
        '弟': '弟弟',
        '姐': '姐姐',
        '妹': '妹妹',
        '夫': '丈夫',
        '妻': '妻子',
        '儿': '儿子',
        '女': '女儿'
      }[props.btnName]
    };
  }

  handlerPress(e) {
    this.props.onPressHandler(this.state.value);
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.normalButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        onPress={(e) => this.handlerPress(e)}
        >
        <Text>
          {this.props.btnName}
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  normalButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    borderRightWidth: 1,
    borderRightColor: '#e6e6e6'
  }
});

export default NormalButton;
