import React, { Component } from 'react';
import { 
  View,
  AppRegistry,
  Text,
  Navigator,
  TouchableOpacity,
  Image,
} from 'react-native'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect, dispatch } from 'react-redux'
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import IvorApp from './ivorApp';
import Ivor from '../components/ivor'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    
    constructor(props) {
        super(props);
    }

    _renderScene(route,navigator) {
    let NaviComponent = route.component;
    
    return (
      <NaviComponent {...route.params} store = {store} navigator = {navigator} />
    );
  }
  
  _renderNavBar() {
    const styles = {
      title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText: {
        fontSize: 20, 
        color: '#444444', 
      },
      button: {
        flex: 1, 
        width: 50, 
        alignItems: 'center', 
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 18, 
        color: 'rgba(90,202,91,1)', 
        textAlign:'right'
      },
      navBar: {
          alignItems: 'center',
          backgroundColor: 'white',
          shadowOffset: {
              width: 1,
              height: 0.5,
          },
          shadowColor: '#000000',
          shadowOpacity: 0.2,          
      }
    }

    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity 
                onPress = { index > 0 ? () => navigator.pop() : () => alert('已经是首页啦！')}
                style = {styles.button} >
                <Image source = {require('../images/back.png')} style = {{alignSelf: 'flex-start',marginLeft: 8}} />
            </TouchableOpacity>
        )
      },
      RightButton(route, navigator, index, navState) {
       
      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.titleText}>{"Ivor's RN App"}</Text>
          </View>
        );
      },
    };

    return (
      <Navigator.NavigationBar
        style = {styles.navBar}
        routeMapper = {routeMapper}/>
    );
  }

    render() {
        return (
            <Navigator
                initialRoute={{component:Ivor}}
                renderScene={this._renderScene.bind(this)}
                navigationBar={this._renderNavBar()} >
            </Navigator>
        );
    }
}