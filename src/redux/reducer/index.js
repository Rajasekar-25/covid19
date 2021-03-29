import { combineReducers } from 'redux';
import StatewiseReducer from './StatewiseReducer';
import covidReducer from './covidReducer';

export default combineReducers({

Statewise : StatewiseReducer,
covid19: covidReducer
})