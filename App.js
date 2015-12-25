// 基础依赖
import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
// flow
import { onAddItem } from './actions';
// 按钮组件
import NormalButton from './NormalButton';
import BackButton from './BackButton';
import ClearButton from './ClearButton';
import LastNormalButton from './LastNormalButton';
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


    return (

      <View style={styles.container}>
        <View style={styles.displayPanel}>
          <View style={styles.diplayProcess}>
            <Text>{items.relativeCalc.join(' 的 ')}</Text>
          </View>
          <View style={styles.diplayResult}>
            <Text style={styles.diplayResultText}>爷爷</Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="父" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="母" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <BackButton/>
            <ClearButton/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="兄" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="弟" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="姐" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <LastNormalButton btnName="妹" onPressHandler={(item) => dispatch(onAddItem(item))}/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="夫" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="妻" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <OlderButton/>
            <OfButton/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="儿" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <NormalButton btnName="女" onPressHandler={(item) => dispatch(onAddItem(item))}/>
            <YoungerButton/>
            <EqualButton/>
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
    flex: 2
  },
  buttonGroupRow: {
    flex: 1,
    flexDirection: 'row'
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
