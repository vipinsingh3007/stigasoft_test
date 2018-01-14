import React from "react";
import { View,Text,StyleSheet } from "react-native";
import BoxComponent  from './BoxComponent';


export default class RectangleBoxVertical extends React.Component{
    static navigationOptions = {
      title:'Box Vertical'
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
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:"#fff"
  }
});
