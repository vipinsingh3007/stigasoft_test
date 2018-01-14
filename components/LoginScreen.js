import React from "react";
import { View,Text,StyleSheet,
         KeyboardAvoidingView,
         TextInput, TouchableOpacity } from "react-native";


export default class LoginScreen extends React.Component{

  static navigationOptions={
    title:'Login Screen'
  }
   render(){
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
            <TextInput  {...emailProps} style={styles.input}/>
            <TextInput  {...pwdProps }  style={styles.input}/>
            <View>
              <TouchableOpacity style={styles.button}>
                  <View style={styles.textView}>
                    <Text style={styles.text}>Login</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button:{
    height:50,
    backgroundColor:'lightblue',
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
