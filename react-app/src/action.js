export let add = (count) =>{
    console.log('触发了Add action')
    return {
        type:'ADD',
        payload:count
    }
}
export let reduce = () =>{
    console.log('reduce');
    return {
        type:'REDUCE'
    }
}



