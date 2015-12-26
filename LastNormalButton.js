import React, { Component } from 'react-native';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

const valueHash = {
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
};

const keyHash = {
  '父': 'baba',
  '母': 'mama',
  '兄': 'gege',
  '弟': 'didi',
  '姐': 'jiejie',
  '妹': 'meimei',
  '夫': 'zhangfu',
  '妻': 'qizi',
  '儿': 'erzi',
  '女': 'nver'
};


class LastNormalButton extends Component {
  constructor(props) {
    super();
    this.state = {
      key: keyHash[props.btnName],
      value: valueHash[props.btnName]
    };
  }

  handlerPress(e) {
    this.props.onPressHandler(this.state.value);
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.lastNormalButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        onPress={(e) => this.handlerPress(e)}
        >
        <Text stlye={styles.text}>
          {this.props.btnName}
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  lastNormalButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  text: {
    color: '#666'
  }
});

export default LastNormalButton;
