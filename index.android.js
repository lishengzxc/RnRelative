var React = require('react-native');

var NormalButton = require('./NormalButton');
var BackButton = require('./BackButton');
var ClearButton = require('./ClearButton');
var LastNormalButton = require('./LastNormalButton');
var OlderButton = require('./OlderButton');
var OfButton = require('./OfButton');
var YoungerButton = require('./YoungerButton');
var EqualButton = require('./EqualButton');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} = React;

var RnRelative = React.createClass({
  render: function() {
    return (

      <View style={styles.container}>
        <View style={styles.displayPanel}>
          <View style={styles.diplayProcess}>
            <Text>爸爸 的 爸爸 ＝</Text>
          </View>
          <View style={styles.diplayResult}>
            <Text style={styles.diplayResultText}>爷爷</Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="父"/>
            <NormalButton btnName="母"/>
            <BackButton/>
            <ClearButton/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="兄"/>
            <NormalButton btnName="弟"/>
            <NormalButton btnName="姐"/>
            <LastNormalButton btnName="妹"/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="夫"/>
            <NormalButton btnName="妻"/>
            <OlderButton/>
            <OfButton/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NormalButton btnName="儿"/>
            <NormalButton btnName="女"/>
            <YoungerButton/>
            <EqualButton/>
          </View>
        </View>
      </View>
    );
  }
});

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

AppRegistry.registerComponent('RnRelative', () => RnRelative);
