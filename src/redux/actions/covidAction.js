import {COVID_TEST_REQUEST,COVID_TEST_SUCCESS,COVID_TEST_FAILURE} from './Types';
import {STATEWISE_TESTCASES_REQUEST, STATEWISE_TESTCASES_SUCCESS, STATEWISE_TESTCASES_FAILURE} from './Types';



export const covidTestRequest = () =>({type:COVID_TEST_REQUEST});
export const covidTestSuccess = (json)=>({type:COVID_TEST_SUCCESS,payload:json});
export const covidTestFailure = (error)=>({type:COVID_TEST_FAILURE,payload:error});


export const  statewiseTestCasesRequest = () =>({type:STATEWISE_TESTCASES_REQUEST});
export const  stateWiseTestCasesSuccess  =(json) =>({type:STATEWISE_TESTCASES_SUCCESS,payload:json});
export const stateWiseCasesFailure = (error)=>({type:STATEWISE_TESTCASES_FAILURE,payload:error});



export const fetchCovid  = ()=>{
    return async dispatch =>{       
        dispatch(covidTestRequest());
        try {
            let response =await fetch ('https://api.covid19india.org/data.json');
            let json = await response.json();
            // console.log('xxxxxxxxxxxxxx', JSON.stringify(json))
            dispatch(covidTestSuccess(json.cases_time_series));
        }catch(error){
            dispatch(covidTestFailure(error));
        }
    };
};




export const fetchCovidStateWise = ()=>{
    return async dispatch =>{
        dispatch(statewiseTestCasesRequest());
        try {
            let response =await fetch ('https://api.covid19india.org/data.json');
            let json = await response.json();
        //    console.log('xxxxxxxxxxxxxx', JSON.stringify(json))
            dispatch(stateWiseTestCasesSuccess(json.statewise));
        }catch(error){
            dispatch(stateWiseCasesFailure(error));
        }
    };
};



