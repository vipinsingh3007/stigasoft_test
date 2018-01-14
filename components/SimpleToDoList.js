import React from "react";
import { View,Text,StyleSheet } from "react-native";


export default class SimpleToDoList extends React.Component{

  static navigationOptions = {
    title:'To Do List'
  }
   render(){
    return (
       <View style={styles.container}>

       </View>
     )
   }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#fff"
  }
});
