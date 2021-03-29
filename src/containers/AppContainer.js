import React, { Component,useState,  } from "react";
import { StyleSheet, View, Text,ActivityIndicator } from "react-native";
import CovidList from '../Components/CovidList';
import {fetchCovid,fetchCovidStateWise} from  '../redux/actions/covidAction';
import moment from 'moment';
import {SCREEN_HEIGHT,SCREEN_WIDTH} from '../commom_files/constants';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
class AppContainer extends Component {
 
constructor(props){
  super(props)
    this.state = {
      country: ''
  
  }
}
  componentDidMount() {
   
  this.props.fetchCovid();
      this.props.fetchCovidStateWise();
  
    
  }
  

  
  render() {



   

   
    var dateAndTime= moment().format("DD/MM/YYYY HH:mm:ss")
      // console.log('tttttttttttttttttttttttttttttttttttttt', this.props.covid19.covid)
     let covid19 = <CovidList people={this.props.covid19.covid} />;
    let randomPeople = <CovidList stateWisepeople={this.props.randomPeople.allStatecovid} />;

    if (this.props.covid19.isFetching) {
      covid19 = <ActivityIndicator size="large" />;
    } else if (this.props.randomPeople.isFetching) {
      randomPeople =<ActivityIndicator size="large"/>
    }
    return <View   style={styles.container}>
    <View >
    <Text style={{textAlign:'center',fontSize:30,fontWeight: "bold", marginTop:20,fontStyle:'italic'}}>Covid19 matrics</Text>
            <Text style={{textAlign:'center',fontSize:25,marginTop:10}}>India</Text>
            <Text style={{textAlign:'center',fontSize:15,fontWeight: "bold",marginTop:10}}>As on {dateAndTime}</Text>
           




            {covid19}
       {randomPeople}
     
    </View>
   
     
    </View>;



  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92DFF3"
  }
});

AppContainer.propTypes =
{
   fetchCovidStateWise:PropTypes.func.isRequired,
  fetchCovid:PropTypes.func.isRequired,

  randomPeople: PropTypes.object.isRequired,
  covid19:PropTypes.object.isRequired
};

const mapStateToProps = state =>{
return{
  randomPeople :state.Statewise,
  covid19: state.covid19
};

}

export default connect (mapStateToProps, {fetchCovid,fetchCovidStateWise})(AppContainer);