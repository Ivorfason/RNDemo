import React, { Component,PropTypes } from 'react';
import { 
  StyleSheet,
  View, 
  TouchableHighlight,
  Text
} from 'react-native';

export default class City extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style = {styles.row} underlayColor = '#C1DBF0' onPress = {this.props.onClick}>
        <View style = {styles.rowContent}>
          <Text style = {styles.rowText}>
            {this.props.city}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

City.propTypes = {
  onClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  row: {
    marginTop: 10,
    height: 44,
    backgroundColor: 'white',
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowColor: {
    backgroundColor: 'red',
    width: 6,
    height: 44,
  },
  rowText: {
    color: 'blue'
  }
});