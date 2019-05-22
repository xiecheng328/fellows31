export let add = () =>{
    console.log('触发了Add action')
    return {
        type:'ADD'
    }
}
export let reduce = () =>{
    console.log('reduce');
    return {
        type:'REDUCE'
    }
}



