import {STATEWISE_TESTCASESE_RQUEST, STATEWISE_TESTCASES_SUCCESS, STATEWISE_TESTCASES_FAILURE} from '../actions/Types';



const initialState ={
    isFetching:false,
    errorMessage:'',
    allStatecovid:[],
};



const stateWiseReducers = (state= initialState,action) =>{
    switch(action.type){
            case STATEWISE_TESTCASESE_RQUEST:
                return{...state, isFetching:true};
            case STATEWISE_TESTCASES_SUCCESS:
                return{...state, isFetching:false,allStatecovid:action.payload};
            case STATEWISE_TESTCASES_FAILURE :
                return{...state, isFetching:false,errorMessage:action.payload};
                default :
                return state;
    }
};

export default stateWiseReducers;