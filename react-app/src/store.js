import { createStore } from 'redux';
// createStore创建store  第一个参数是reducer 第二个参数初始化状态
let initialState = {
    num:0
}
let store = createStore(()=>{

},initialState);

export default store;