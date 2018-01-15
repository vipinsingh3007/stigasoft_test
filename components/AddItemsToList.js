import React from 'react';
import { View, StyleSheet, Text,
          TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';

class AddItemsToList extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
      title:'Add Items'
    }
  }

  render(){
    const textProps = {
      placeholder:'Please enter your text',
      placeholderTextColor:'#000',
      underlineColorAndroid:"#ffff",
      autoCorrect:false,
    }
    return (<KeyboardAvoidingView behavior='padding' style={styles.container}>
              <TextInput {...textProps} style={styles.input}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Add Item</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>)
  }
}

export default AddItemsToList;

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
})
