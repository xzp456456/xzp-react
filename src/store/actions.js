import * as home from './action-type';
export function LoginDisplay(data){
    return{
        type:home.LOGINSHOW,
        data
    }
}