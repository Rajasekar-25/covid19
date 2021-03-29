import React, { Component } from "react";
import AppContainer from "./src/containers/AppContainer";
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducer/index';


 const store = createStore(reducers, {}, applyMiddleware(thunk));


export default class App extends Component {
  render() {
    return <Provider store={store}> 
       <AppContainer/>  
    </Provider>;
  }
}
