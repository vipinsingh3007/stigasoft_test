import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import RectangleBoxVertical  from './RectangleBoxVertical';

export default class HomePage extends React.Component{

static navigationOptions ={
    title:'Home'
}

openSolution = ({ args, navigation } ) => {
    switch(args){
      case 'solutionOne':
            navigation.navigate('RectangleBoxVertical');
            break;
      case 'solutionTwo':
            navigation.navigate('RectangleBoxCenter');
            break;
      case 'solutionThree':
            navigation.navigate('LoginScreen');
            break;
      case 'solutionFour':
            navigation.navigate('AutomatedSlider');
            break;
      case 'solutionFive':
            navigation.navigate('SimpleToDoList');
            break;
      default:
            break;

    }
  }

  render(){

    const { navigation  } = this.props;
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.openSolution({args:'solutionOne',navigation})}>
            <View style={styles.textView}>
              <Text style={styles.text}>Rectangle Box Vertical</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.openSolution({args:'solutionTwo',navigation})}>
            <View style={styles.textView}>
              <Text style={styles.text}>Rectangle Box Center</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.openSolution({args:'solutionThree',navigation})}>
            <View style={styles.textView}>
              <Text style={styles.text}>Login Screen</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.openSolution({args:'solutionFour',navigation})}>
            <View style={styles.textView}>
              <Text style={styles.text}>Automated Slider</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.openSolution({args:'solutionFive',navigation})}>
            <View style={styles.textView}>
              <Text style={styles.text}>Simple ToDo List</Text>
            </View>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button:{
    height:50,
    backgroundColor:'red',
    margin:20,
    alignItems:'stretch',
    justifyContent:'center',
    borderRadius:6
  },
  textView:{
      alignItems:'center',
      justifyContent:'center',
  },
  text:{
    color:'white',
    fontSize:21
  }
});
