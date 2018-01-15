import React from "react";
import { View,Text,StyleSheet } from "react-native";

function BoxComponent(props){
  const { styleToBeApplied } = props;
  return (
     <View style={ styleToBeApplied.container }>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
     </View>
   )
}

const styles = StyleSheet.create({
  box:{
    height:50,
    width:50,
    margin:10,
    backgroundColor:'#00008b'
  }
});

export default BoxComponent;
