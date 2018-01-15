import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { removeItem } from '../actions';

function RightButton(props){
        return (
          <View style={styles.rightButtonContainer}>
            <TouchableOpacity onPress={() => props.navigate('AddItemsToList')}>
                <Text style={styles.rightButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        );
  }

class SimpleToDoList extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
      title:'To Do List',
      headerRight:<RightButton {...navigation }/>
    }
  }

  removeItem = ({ key }) => {
    this.props.dispatch(removeItem(key));
  }

  renderItem = ({ item }) => {
    return (<View style={styles.listView}>
              <Text style={styles.listText}>{item.title}</Text>
              <TouchableOpacity style={styles.button} onPress={() => this.removeItem(item)}>
                <Text style={styles.text}>Remove</Text>
              </TouchableOpacity>
             </View>
           );
  }

   render(){
    const { data } = this.props;
    // const data = [{key:'My todo list item1'}, {key: 'My todo list item2'}]
    return (
       <View style={styles.container}>
          <FlatList data={data} renderItem={this.renderItem} />
      </View>
     )
   }
}

function mapStateToProps(state,ownProps){
  const data = [];
  for(var i in state){
    if(state[i]){
      data.push(state[i]);
    }
  }
  return {data:data};
}

export default connect(mapStateToProps)(SimpleToDoList)


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:"#fff"
  },
  listView:{
    height:60,
    backgroundColor:"#00008b",
    marginBottom:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  listText:{
    color:'#fff',
    fontSize:21,
    paddingLeft:10,

  },
  text:{
    color:'#000',
    fontSize:18,
    padding:10
  },
  button:{
    margin:10,
    backgroundColor:'white',
    height:40,
    borderRadius:9,
  },
  rightButtonContainer:{
      backgroundColor:'red',
      justifyContent:'center',
      margin:10
  },
  rightButtonText:{
    color:'white',
    fontSize:18,
  }
});
