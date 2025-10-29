function nextGreaterElement(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}

const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); // 👉 [5, 10, 10, -1, -1]
