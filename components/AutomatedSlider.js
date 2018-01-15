import React from "react";
import { View,Text,StyleSheet,Animated } from "react-native";
import ImageSlider from 'react-native-image-slider';

const message = ['This is Message1', 'This is message2'];

export default class AutomatedSlider extends React.Component{

  static navigationOptions = {
    title:'Automated Slider'
  }

  state = {
            position: 1,
            interval: null,
            msgInterval:null,
            message:message[0]
        };

  componentWillMount() {
       this.setState({interval: setInterval(() => {
           this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1,});
       }, 5000)});

       this.setState({ msgInterval: setInterval(() => {
            this.setState( { message:this.state.message === message[1] ? message[0] : message[1]})
          }, 2500)});

   }
 componentWillUnmount() {
       clearInterval(this.state.interval);
       clearInterval(this.state.msgInterval);
   }

  render(){
    return (
      <View style={styles.container}>
      <Animated.Text>{this.state.message}</Animated.Text>
      <ImageSlider images={[
         'https://placeimg.com/640/480/animals',
         'https://placeimg.com/640/480/nature',
         'https://placeimg.com/640/480/arch/grayscale'
        ]} position={this.state.position}
           onPositionChanged={position => this.setState({position})}/>

     </View>)
   }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'stretch',
    backgroundColor:"#fff",
  },
  imageText:{
    justifyContent:'center'
  }
});
