import React from "react";
import { View,Text,StyleSheet,
         KeyboardAvoidingView,
         TextInput, TouchableOpacity,Keyboard } from "react-native";


export default class LoginScreen extends React.Component{

  static navigationOptions={
    title:'Login Screen'
  }

  state = {
    username: null,
    password: null
  }

  updateUsername = (name) => {
    this.setState({
        username: name
    })
  }

  updatePassword = (pwd) => {
    this.setState({
      password:pwd
    })
  }

  validateFields = () => {

    const { username, password } = this.state;

    if(!username){
      alert('Enter the username.');
      return;
    }

    if(!password){
      alert('Enter the password.');
      return;
    }

    if(password.length < 8){
      alert('Password should be minimum 8 characters.');
      return;
    }

    alert('Successful Login');
    Keyboard.dismiss();
  }

  reset = () => {
    this.setState({
      username:null,
      password:null
    });
    Keyboard.dismiss();

  }
  render(){

    const { username, password } = this.state;

    const emailProps = {
      placeholder:'Email',
      placeholderTextColor:'#000',
      underlineColorAndroid:"#ffff",
      autoCorrect:false,
    }

    const pwdProps = {
      placeholder:'Password',
      placeholderTextColor:'#000',
      secureTextEntry:true,
      autoCorrect:false
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TextInput  value={username} {...emailProps} style={styles.input} onChangeText={this.updateUsername }/>
            <TextInput  value={password} {...pwdProps }  style={styles.input} onChangeText={this.updatePassword }/>
            <View>
              <TouchableOpacity style={styles.button} onPress= {this.validateFields}>
                  <View style={styles.textView}>
                    <Text style={styles.text}>Login</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,{backgroundColor:'#4CA64C'}]} onPress={this.reset}>
                  <View style={styles.textView}>
                    <Text style={styles.text}>Reset</Text>
                  </View>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>


     )
   }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:"#fff",
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
