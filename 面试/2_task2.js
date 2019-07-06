console.log('1');

setTimeout(function() { //宏任务
    console.log('2');
    process.nextTick(function() { //2-微任务
        console.log('3');
    });
    new Promise(function(resolve) {
        console.log('4');
        resolve();
        // console.log('0000');
    }).then(function() {  //2-微任务
        console.log('5');
    });
},0)
process.nextTick(function() { //微任务
    console.log('6');
    setTimeout(function(){  //宏任务
        console.log(7)
    },0)
})


// 1  6  2  4 7 3  5 

