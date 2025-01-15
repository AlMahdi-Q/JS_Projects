function bubble_sort(arr){
    for (let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j < arr.length - i; j++){
            if (arr[j]>arr[j+1]){
                let x = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=x;
            }
        }
    }
    return arr;
}
console.log(bubble_sort([4,2,4,3,1,6,456,75]));
