import { createStore } from 'redux';
import reducer from './reducer';

// createStore创建store  第一个参数是reducer 第二个参数初始化状态
let initialState = {
    num:1
}
let store = createStore(reducer,initialState);

export default store;