import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Alert, ListView } from 'react-native';
import { connect, dispatch } from 'react-redux';
import { remove } from '../actions/ivorActions';
import City from './city';

class Fason extends Component {
  
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <ListView
        style = {styles.container}
        dataSource = {this.props.citys}
        renderRow = {(city) => this.renderRow(city)}
        enableEmptySections = {true} /> 
    );
  }

  renderRow(city) {
      return (
          <City {...city} onClick = {this._delete.bind(this, city)} ></City>
      );
  }

  _delete(city){
    const {dispatch} = this.props;
    Alert.alert(
      'Remember your word:',
      city.city,
      [
        {text:'Cancel',onPress:() => {},style: 'cancel'}
      ]
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#eeeeee',
  },
  row: {
    marginTop: 10,
    height: 44,
    backgroundColor: 'white',
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowColor: {
    backgroundColor: 'red',
    width: 4,
    height: 44,
  },
  rowText: {
    marginLeft: 4
  }
});

function select(state) {
  const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
  return {
    citys: ds.cloneWithRows(state)
  };
}

export default connect(select)(Fason);