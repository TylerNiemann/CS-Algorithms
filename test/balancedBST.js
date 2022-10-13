import { mergeSort, removeDuplicates} from "./mergeSort"

const newNode = (value) =>{
    return {
     leftNode: null,
     value : value || null,
     rightNode : null
    }
 }

const Tree = (arr) =>{
    const array = [...removeDuplicates(mergeSort(arr))]
   

    const buildTree = (arr) =>{

    };

    let root =  buildTree(array, 0, arr.length-1)

    return array
}

export { Tree }