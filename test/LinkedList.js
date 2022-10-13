import Node from "./Node";

const LinkedList = () => {
  let nodeHead = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length++;
    if (nodeHead === null) return nodeHead = newNode;
    let pointer = nodeHead;
    while (pointer.nextNode !== null) pointer = pointer.nextNode;
    pointer.nextNode = newNode;
  }

  const prepend = (value) => {
    const newNode = Node(value);
    length++;
    if (nodeHead === null) return nodeHead = newNode;
    newNode.nextNode = nodeHead;
    nodeHead = newNode;
  }

  const size = () => {
    return length;
  }

  const head = () => {
    if(nodeHead === null) return null;
    return nodeHead.value;
  }

  const tail = () => {
    if(nodeHead === null) return null;
    let pointer = nodeHead;
    while (pointer.nextNode !== null) pointer = pointer.nextNode;
    return pointer.value;
  }

  const at = (index) => {
    if(nodeHead === null) return null;
    else if (index > length) return null;
    let pointer = nodeHead;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  const pop = () => {
    if(nodeHead === null) return null;
    if(nodeHead.nextNode === null) {
      nodeHead = null;
    }
    at(size() - 2).nextNode = null;
    length--;
  }

  const contains = (value) => {
    if(nodeHead === null) return null;
    let pointer = nodeHead;
    while (pointer.nextNode !== null) {
      if(pointer.value === value) return true
      pointer = pointer.nextNode;
    }
    return pointer.value === value ? true : false; 
  }

  const find = (value) => {
    if(nodeHead === null) return null;
    let index = 0;  
    let pointer = nodeHead;
    while (pointer.nextNode !== null) {
      if(pointer.value === value) return index;
      pointer = pointer.nextNode;
      index ++;
    }
    return pointer.value === value ? index : null; 
  }

  const toString = () => {
    if (nodeHead === null) return null;
    let pointer = nodeHead;
    let result = "";
    while (pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value} ) --> `);
      pointer = pointer.nextNode;
    }
    result = result.concat(`( ${pointer.value} ) --> null`);
    console.log(result);
    return result;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString
  }
};

export default LinkedList;