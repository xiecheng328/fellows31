import { combineReducers } from 'redux';
// 接受老的state和action  返回新的state
let num = (state=0,action) =>{
    console.log(state,action)
    switch (action.type) {
        case 'ADD':
            return state+1;
        case 'REDUCE':
            return state-1;
        default:
            return state
    }
}
export default combineReducers({
    num
});

