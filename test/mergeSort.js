let mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    let middle = Math.round(arr.length/2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)
    return merge (
        mergeSort(left),mergeSort(right)
    )
}

let merge = (leftArr,rightArr) => {
    const arr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            arr.push(leftArr[leftIndex])
            leftIndex ++;
        }
        else {
            arr.push(rightArr[rightIndex])
            rightIndex ++;
        }
    }
    return arr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};

let removeDuplicates = (array) => {
    return [...new Set(array)];
}

//const arr = [32,2,1,4,54,23,2039,6,77,87,9]

//console.log(mergeSort(arr))

export {mergeSort,removeDuplicates}