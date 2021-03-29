import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import {SCREEN_HEIGHT,SCREEN_WIDTH} from '../commom_files/constants';
export default class CovidList extends Component {
  _keyExtractor = item => item.email;

  _renderItem = ({ item }) => {
  
    return (
      <View>

    
      <View style={{marginTop:10}}>
      
<View style={{flexDirection:'row', justifyContent:'space-between' ,width:SCREEN_WIDTH * 70/100, marginLeft:SCREEN_WIDTH *15/100,}}>
<Text style={{fontSize:20 }}>confirmed </Text>
<Text style={{fontSize:20 }}>{item.confirmed}</Text>
</View>

     
<View style={{flexDirection:'row', justifyContent:'space-between' ,width:SCREEN_WIDTH * 70/100, marginLeft:SCREEN_WIDTH *15/100}}>
<Text style={{fontSize:20 }}>active </Text>
<Text style={{fontSize:20 }}>{item.active}</Text>
</View>

    
<View style={{flexDirection:'row', justifyContent:'space-between' ,width:SCREEN_WIDTH * 70/100, marginLeft:SCREEN_WIDTH *15/100}}>
<Text style={{fontSize:20 }}>recovered </Text>
<Text style={{fontSize:20 }}>{item.recovered}</Text>
</View>

    
<View style={{flexDirection:'row', justifyContent:'space-between' ,
width:SCREEN_WIDTH * 70/100, marginLeft:SCREEN_WIDTH *15/100}}>
<Text style={{fontSize:20 }}>deaths </Text>
<Text  style={{fontSize:20 }}>{item.deaths}</Text>
</View>

    
<View style={{flexDirection:'row', justifyContent:'space-between' ,
width:SCREEN_WIDTH * 70/100, marginLeft:SCREEN_WIDTH *15/100}}>
<Text style={{fontSize:20 }}>statecode </Text>
<Text  style={{fontSize:20 }}>{item.statecode}</Text>
</View>

 

      </View>
       </View>
     
    );
  };

  render() {
   

    return (
      <FlatList 
      style={{width:SCREEN_WIDTH,marginTop:30
      }}
      
        data={this.props.stateWisepeople}
        // data={this.props.stateWisepeople}
        
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

CovidList.propTypes = {
  allStatecovid: PropTypes.array,
   covid : PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
  
   
    justifyContent: "center",
    alignItems: "center",
   
  },
  cardContainerStyle: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "green",
    padding: 10
  },
 
  cardTextStyle: {
    color: "white",
    textAlign: "left"
  }
});
