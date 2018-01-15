import React from 'react';
import { View, StyleSheet, Text,
          TextInput, TouchableOpacity,
          KeyboardAvoidingView,Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { timeToString } from '../utils/helper';



class AddItemsToList extends React.Component{

  state ={
    input:null
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title:'Add Items'
    }
  }

  addItem = () => {
    const key = timeToString();
    const item = this.state.input;

    Keyboard.dismiss();
    if(!this.state.input){
      alert('Please enter the item');
      return;
    }

    this.props.dispatch(addItem({
      [key]: {'key':item}
    }));

    this.props.navigation.goBack();

  }

  render(){
    const textProps = {
      placeholder:'Please enter your text',
      placeholderTextColor:'#000',
      underlineColorAndroid:"#ffff",
      autoCorrect:false,
    }
    return (<KeyboardAvoidingView behavior='padding' style={styles.container}>
              <TextInput value={this.state.input} onChangeText={(e)=> this.setState({input:e}) }{...textProps} style={styles.input}/>
              <TouchableOpacity style={styles.button} onPress={ this.addItem }>
                <Text style={styles.text}>Add Item</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>)
  }
}

function mapStateToProps(state,ownProps){
  return {
      ...state
    };
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:"#fff"
  },
  input:{
    height:44,
    padding:8,
    borderWidth:1,
    borderColor:'#757575',
    margin:20
  },
  button:{
    height:50,
    backgroundColor:'#00008b',
    margin:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:6
  },
  text:{
    color:'white',
    fontSize:21,
  }
});

export default connect(mapStateToProps)(AddItemsToList);
