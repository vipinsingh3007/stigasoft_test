import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';
import HomePage from './components/HomePage';
import { StackNavigator } from 'react-navigation';
import RectangleBoxVertical from './components/RectangleBoxVertical';
import RectangleBoxCenter  from './components/RectangleBoxCenter';
import AutomatedSlider  from './components/AutomatedSlider';
import LoginScreen  from './components/LoginScreen';
import SimpleToDoList  from './components/SimpleToDoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddItemsToList from './components/AddItemsToList';

const StigaSoftStack = StackNavigator({
  Home:{
    screen:HomePage
  },
  RectangleBoxVertical:{
    screen: RectangleBoxVertical
  },
  RectangleBoxCenter:{
    screen: RectangleBoxCenter
  },
  LoginScreen:{
    screen: LoginScreen
  },
  SimpleToDoList:{
    screen: SimpleToDoList
  },
  AutomatedSlider:{
    screen:AutomatedSlider
  },
  AddItemsToList:{
    screen:AddItemsToList
  }
},{
    navigationOptions : {
      headerTintColor:'white',
      headerStyle:{
        backgroundColor:'red',
      },
      headerBackTitle:'Back'
}})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <View style={styles.container}>
          <StigaSoftStack/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
