function selectionSort(arr){
    
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        let temp = arr[i];
        arr[i]= arr[minIndex];
        arr[minIndex]=temp
    }
    return arr
}
const arr = [2,8,5,3,9,4,1]
const x = selectionSort(arr)
console.log(x);