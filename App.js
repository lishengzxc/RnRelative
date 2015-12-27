// 基础依赖
import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
// flow
import { onAddItem, onClear, onOlder, onYounger, onEqual, onBack } from './actions';
// 按钮组件
import NormalButton from './NormalButton';
import BackButton from './BackButton';
import ClearButton from './ClearButton';
import OlderButton from './OlderButton';
import OfButton from './OfButton';
import YoungerButton from './YoungerButton';
import EqualButton from './EqualButton';

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

class App extends Component {
  render() {

    const { dispatch, items } = this.props;

    var olderYoungerCanPress = false;

    var process = items.relativeCalc.process;
    var result = items.relativeCalc.result;

    var showResult;

    if (typeof result[result.length - 1] === 'object') {
      olderYoungerCanPress = true;
      showResult = `比 ${result[result.length - 1].middle} 年长/年轻?`;
    } else {
      showResult = result[result.length - 1];
    }


    return (

      <View style={styles.container}>
        <View style={styles.displayPanel}>
          <View style={styles.diplayProcess}>
            <Text>{process.join(' 的 ')}</Text>
          </View>
          <View style={styles.diplayResult}>
            <Text style={styles.diplayResultText}>{showResult}</Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonGroupRow1}>
            <NormalButton btnName="父" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="母" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <BackButton onPressHandler={() => dispatch(onBack())}/>
            <ClearButton onPressHandler={() => dispatch(onClear())}/>
          </View>
          <View style={styles.buttonGroupRow1}>
            <NormalButton btnName="兄" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="弟" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="姐" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="妹" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
          </View>
          <View style={styles.buttonGroupRow2}>
            <View style={styles.buttonGroupRow2innerLeft}>
              <View style={styles.buttonGroupRow1}>
                <NormalButton btnName="夫" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
                <NormalButton btnName="妻" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
                <OlderButton canPress={olderYoungerCanPress} onPressHandler={() => dispatch(onOlder())}/>
              </View>
              <View style={styles.buttonGroupRow1}>
                <NormalButton btnName="儿" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
                <NormalButton btnName="女" canPress={!olderYoungerCanPress} onPressHandler={(item) => dispatch(onAddItem(item))}/>
                <YoungerButton canPress={olderYoungerCanPress} onPressHandler={() => dispatch(onYounger())}/>
              </View>
            </View>
            <View style={styles.buttonGroupRow2innerRight}>
              <EqualButton canPress={!olderYoungerCanPress} onPressHandler={() => dispatch(onEqual())}/>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

function select(state) {
  return {
    items: state
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  displayPanel: {
    flex: 1,
    backgroundColor: '#e6e6e6'
  },
  buttonGroup: {
    flex: 2.5
  },
  buttonGroupRow1: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonGroupRow2: {
    flex: 2,
    flexDirection: 'row'
  },
  buttonGroupRow2innerLeft: {
    flex: 3
  },
  buttonGroupRow2innerRight: {
    flex: 1
  },
  diplayProcess: {
    flex: 2,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  diplayResult: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  diplayResultText: {
    color: 'black',
    fontSize: 20
  }
});

export default connect(select)(App);
