import * as home from './action-type'
const initialState ={
    dataList:[],
    user:[12]
};

function counter(state = initialState,action){
    switch (action.type){
        case home.LOGINSHOW:
        return {...state,dataList:action.data};
        default:
        return state;
    }
}

export default counter;