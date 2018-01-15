import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

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



  renderItem = ({ item }) => {
    return (<View style={styles.listView}>
              <Text style={styles.listText}>{item.key}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Remove</Text>
              </TouchableOpacity>
             </View>
           );
  }

   render(){
    // const { data } = this.props.data;
    const data = [{key:'My todo list item1'}, {key: 'My todo list item2'}]
    return (
       <View style={styles.container}>
          <FlatList data={data} renderItem={this.renderItem} />
      </View>
     )
   }
}

function mapStateToProps(state,ownProps){
  const data = {
    data: {...state},
    props: {...ownProps}
  }
  return data;
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
