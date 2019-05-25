import axios from 'axios';
import store from './store';
export let add = (count) =>{
    // console.log('触发了Add action')
    // return {
    //     type:'ADD',
    //     payload:count
    // }

    return ()=>{
        console.log('action进入了。。。')
        axios.get('/test.json')
        .then((result)=>{
            console.log(result.data);
            // dispach 触发 {} 传到reducer
            store.dispatch({
                type:'ADD',
                payload:result.data.data
            })
        })
    }
}
export let reduce = () =>{
    console.log('reduce');
    return {
        type:'REDUCE'
    }
}



