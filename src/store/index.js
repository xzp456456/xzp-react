import { createStore } from 'redux';
import rootReduer from './reduers.js';
function StorePro(initialState){
const store = createStore(rootReduer,initialState);
    return store;
}
export default StorePro;



