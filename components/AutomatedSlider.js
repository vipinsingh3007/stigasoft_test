import React from "react";
import { View,Text,StyleSheet } from "react-native";
import ImageSlider from 'react-native-image-slider';


export default class AutomatedSlider extends React.Component{

  static navigationOptions = {
    title:'Automated Slider'
  }

  state = {
            position: 1,
            interval: null
        };

  componentWillMount() {
       this.setState({interval: setInterval(() => {
           this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
       }, 5000)});
   }
 componentWillUnmount() {
       clearInterval(this.state.interval);
   }

  render(){
    return (
      <View>
        <ImageSlider images={[
         'https://placeimg.com/640/480/any',
         'https://placeimg.com/640/480/any',
         'https://placeimg.com/640/480/any'
        ]} position={this.state.position}
           onPositionChanged={position => this.setState({position})}/>

     </View>)
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
