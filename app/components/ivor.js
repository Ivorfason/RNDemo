import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, ListView, TouchableHighlight, Navigator, View} from 'react-native';
import { input } from '../actions/ivorActions';
import { connect } from 'react-redux';
import Fason from './fason';

class Ivor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      numbers: 10000
    };
  }

  add(){
    this.setState({
      numbers: this.state.numbers + 1
    })
  }

   minus(){
    this.setState({
      numbers: this.state.numbers - 1
    })
  } 

  render() {
    return (
      <View style = {styles.container}>

        <TouchableHighlight
          onPress = {this.add.bind(this)} >
          <Text style = {styles.instructions}>
            1. Click Me To Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress = {this.minus.bind(this)}>
          <Text style = {styles.instructions}>
            2. Click Me to Minus
          </Text>
        </TouchableHighlight>

        <Text style = {styles.welcome}>
          {this.state.numbers}
        </Text>

        <TextInput style = {{width:100}}
          placeholder = "Ivor's RN input"
          onChangeText = {(text) => this.setState({text})} />

        <Text style = {styles.instructions}>
          {this.state.text.split(' ').map((word) => word && '囧').join(' ')}
        </Text>

        <View style = {styles.containers}>
          <TextInput style = {{width:150}}
            placeholder = '请输入城市名称：'
            onChangeText = {(text) => {
              this.setState({city: text});}}
            multiline = {false}
            keyboardType = 'numeric' />
          <TouchableHighlight
            onPress = {this.save.bind(this)} >
            <Text style = {{padding:10,borderWidth:2}}>确定</Text>
          </TouchableHighlight>
        </View>
      </View>
    )

  }
   
  save() {
    const { dispatch } = this.props;
    dispatch(input(this.state.city));
    this.props.navigator.push({
        component: Fason
      })
   
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containers: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
});

export default connect()(Ivor)