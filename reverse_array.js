function r_arry(arr){
    let r_arry = [];
    for (let i = 0; i < arr.length;i++){
        r_arry.unshift(arr[i]);
    }
    return r_arry;
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
