import React from "react";
import { View,Text,StyleSheet } from "react-native";


export default class AutomatedSlider extends React.Component{

  static navigationOptions = {
    title:'Automated Slider'
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
