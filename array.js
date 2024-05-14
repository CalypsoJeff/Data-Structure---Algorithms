// Insert a value into an Array

// function Array(arr,value){
//     arr.push(value);
//     return arr
// }
// console.log(Array([1,2,3,4],5))

// 2D array to 1D array
// function Array(x){
//     let oneDArray=[];
//     for(let i=0;i<x.length;i++){
//         for(let j=0; j<x[i].length;j++){
//             oneDArray.push(x[i][j])
//         }
//     }
//     return oneDArray

// }

// const x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const y = Array(x)
// console.log(y);

// Sum of two numbers from array
// function  sumOfTwoNumbersFromArr(array,target ){
//     let result=[];
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length-1;j++){
//         if(array[i]+array[j]===target){
//             result.push([array[i],array[j]])
//         }
//     }
// }
// return result
// }
// let arr =[1,2,3,4,5,6,7]
// let target=8;
// const x = sumOfTwoNumbersFromArr(arr,target)
// console.log(x);

// to Rearrange the target element to the end of an array

// function order(arr,target){
//     let targetEle=[];
//     let nonTargetEle=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             targetEle.push(arr[i])
//         }else{
//             nonTargetEle.push(arr[i])
//         }
//     }
//     return nonTargetEle.concat(targetEle);
// }

// let arr =[1,2,3,4,5,6,7,8,9,4,2,3,4,8]
// let target = 4;
// let x= order(arr,target)
// console.log(x)

// function order(array, target) {
//     let insertPosition = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== target) {
//             if (i > insertPosition) {
//                 let temp = array[i];
//                 array[i] = array[insertPosition];
//                 array[insertPosition] = temp;
//             }
//             insertPosition++;
//         }
//     }
//     return array;
// }

// let arrayset = [1, 4, 2, 4, 8, 6, 4, 9, 7, 4];
// let target = 4;
// let newarray = order(arrayset, target);
// console.log(newarray);

// function duplicate(arr){
//     let uniqueArr= [];
//     for(let i=0;i<arr.length;i++){
//         let isDuplicate= false;
//         for(let j=0;j<uniqueArr.length;j++){
//             if(arr[i]===uniqueArr[j]){
//                 isDuplicate= true;
//                 break
//             }
//         }
//         if(!isDuplicate){
//             uniqueArr.push(arr[i])
//     }
//     }
//     return uniqueArr
// }
// let arr = [1,4,2,4,8,6,4,9,7,4]
// let newarray1 =  duplicate(arr)
// console.log(newarray1)

// Reverse an array
// function reverseArray(arr) {
//   let temp;
//   for (let i = 0; i < arr.length / 2; i++) {
//     temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// const x = reverseArray(arr);
// console.log(arr);
