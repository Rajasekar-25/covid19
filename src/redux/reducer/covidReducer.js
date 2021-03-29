import {COVID_TEST_REQUEST,COVID_TEST_SUCCESS,COVID_TEST_FAILURE} from '../actions/Types';



const initialState ={
    isFetching:false,
    errorMessage:'',
    covid:[],
};



const covidReducers = (state= initialState,action) =>{
    switch(action.type){
            case COVID_TEST_REQUEST:
                return{...state, isFetching:true};
            case COVID_TEST_SUCCESS:
                return{...state, isFetching:false,covid:action.payload};
            case COVID_TEST_FAILURE :
                return{...state, isFetching:false,errorMessage:action.payload};
                default :
                return state;
    }
};






export default covidReducers;