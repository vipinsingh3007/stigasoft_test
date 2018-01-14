import React from "react";
import { View,Text,StyleSheet } from "react-native";
import BoxComponent  from './BoxComponent';


export default class RectangleBoxCenter extends React.Component{

  static navigationOptions={
    title:'Box Center'
  }
   render(){
    return (
      <BoxComponent styleToBeApplied={styles}/>
     )
   }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#fff"
  }
});
