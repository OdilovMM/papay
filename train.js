// New message from group : I-Task: arrayning ichidagi 0 index qiymatni arrayning oxiriga qoyib return qilsin

let arr = ['a', 'b', 'c', 'd']
function changeMyArray(arr) {

    let newArr = arr
    let newItem = newArr.splice(0, 1);  
    return newArr.concat(newItem);
    
}
let checkMyChanges = changeMyArray(arr)
console.log(checkMyChanges)