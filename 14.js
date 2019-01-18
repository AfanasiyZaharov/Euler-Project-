// const collatzNumber = (number) => {
//   let resultArray = [number];
//   let nextNumber = number;
//   while (true) {
//     if (nextNumber === 1) {
//       break;
//     }
//     if (nextNumber % 2 === 1) {
//       nextNumber = 3 * nextNumber + 1;
//     } else {
//       nextNumber = nextNumber / 2;
//     }
//     resultArray.push(nextNumber);
//   }
//   // console.log('resultArray', resultArray);
//   return resultArray;
// }

let values = new Map();
values.set(1, 1);

const collatzNumber = (number) => {
  if (values.has(number)) {
    return values.get(number);
  }

  if (number % 2 === 1) {
    values.set(number, (2 + collatzNumber((3 * number + 1) / 2)));
  } else {
    values.set(number, (1 + collatzNumber(number / 2)));
  }
  return values.get(number);
}

const mainFunction = () => {
  let maximumNumber;
  let maximumLength = 0;
  // collatzNumber(13);
  console.log('values', values);
  for (let i = 500000; i < 1000000; i++) {
    let newCollatzLength = collatzNumber(i);
    if (newCollatzLength > maximumLength) {
      console.log('newNumber', i);
      maximumLength = newCollatzLength;
      maximumNumber = i;
    }
  }
}
console.time('start old decision');
mainFunction();
console.timeEnd('start old decision');