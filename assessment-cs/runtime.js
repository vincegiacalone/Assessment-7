const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

// TIMINGS CALCULATED BELOW:

const tinyArray = getSizedArray(10);
// Insert: 82.6 μs, Append: 112.6 μs
const smallArray = getSizedArray(100);
// Insert: 73.4 μs, Append: 120.7 μs
const mediumArray = getSizedArray(1000);
// Insert: 436.4 μs, Append: 334.1 μs
const largeArray = getSizedArray(10000);
// Insert: 9.5803 ms, Append: append 783.1 μs
const extraLargeArray = getSizedArray(100000);
// Insert: 933.989 ms, Append: 12.8731 ms



// How long does it take to double every number in a given array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


/* 
The "push" method has a time complexity of O(1), while the "unshift" method has a time complexity of O(n). Even though the Insert function is initially faster for the smaller arrays, it scales more rapidly (linear) and ends up being much slower than the Append function by the time we get to the XL array, which scales better (constant).

XC: The Insert function is so slow because unshift has to increment all the elements already present in the array, which takes longer than the Append function. All push is doing is adding onto the end of the array, and none of the index numbers have to change, making it faster.
*/


