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

class NormalButton extends Component {
  constructor(props) {
    super();
    this.state = {
      key: keyHash[props.btnName],
      value: valueHash[props.btnName]
    };
  }

  handlerPress(e) {
    if (!this.props.canPress) return;
    this.props.onPressHandler({
      key: this.state.key,
      value: this.state.value
    });
  }

  render() {
    var underlayColor = this.props.canPress ? '#ccc' : '#f6f6f6';
    var btnStyles = this.props.canPress ? styles.normalButtonCanPress : styles.normalButtonCannotPress;
    var btnTextStyles = this.props.canPress ? styles.textCanPress : styles.textCannotPress;

    return (
      <TouchableHighlight
        style={btnStyles}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor={underlayColor}
        onPress={(e) => this.handlerPress(e)}
        >
        <Text style={btnTextStyles}>
          {this.props.btnName}
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  normalButtonCanPress: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderWidth: .5,
    borderColor: '#e6e6e6'
  },
  normalButtonCannotPress: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f6f6f6',
    borderWidth: .5,
    borderColor: '#e6e6e6'
  },
  textCanPress: {
    color: '#666'
  },
  textCannotPress: {
    color: '#ccc'
  }
});

export default NormalButton;
