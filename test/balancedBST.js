import { mergeSort, removeDuplicates} from "./mergeSort"

const newNode = (value) =>{
    return {
     leftPart: null,
     data : value,
     rightPart : null
    }
 }

const Tree = (arr) =>{
  const array = [...removeDuplicates(mergeSort(arr))]
   
  const buildTree = (arr,start,end) =>{
    if(start > end) return null;
    let mid = parseInt((start + end) / 2);
    let node = newNode(arr[mid]);
    node.leftPart = buildTree(arr, start, mid - 1);
    node.rightPart = buildTree(arr, mid + 1, end);
    return node;
  };

  let root =  buildTree(array, 0, array.length-1)

  return root
}

export { Tree }