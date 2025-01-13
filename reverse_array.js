function r_arry(arr){
    for (let i = 0; i < arr.length;i++){
        arr.splice(i,0,arr.pop());
    }
    return arr;
}
let array = [];
while(true){
    let x = prompt('Enter an element (to stop enter #)');
    if(x === '#')break;
    else{
        array.push(x);
    }
}
console.log(array);
console.log(r_arry(array));
