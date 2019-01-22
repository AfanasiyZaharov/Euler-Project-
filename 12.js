function* getTriangleNumber() {
  let lastTriangleNumber = 1;
  let i = 2;
  yield lastTriangleNumber;
  while (true) {
    yield lastTriangleNumber + i;
    lastTriangleNumber = lastTriangleNumber + i;
    i++;
  }
}
// && 
const primes = new Map();
function* getPrime() {
  let lastPrime = 1;
  yield lastPrime + 1;
  let i = 3;
  while (true) {
    if (isPrime(i) || primes.has(i)) {
      lastPrime = i;
      primes.set(lastPrime, lastPrime);
      yield lastPrime;
    }
    i += 2;
  }
}


const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


const getTriangles = () => {

  for (let triangleNumber of getTriangleNumber()) {
    const count = getDividerCount(triangleNumber)
    console.log('triangleNumber', triangleNumber, 'its counter', count);

    if (count > 1000) {
      break;
    }
    // if(triangleNumber === 2031120){
    //   console.log('found');
    //   break;
    // }

  }
}

const dividers = new Map();
dividers.set(1, 1);
dividers.set(3, 2);

let getDividerCount = (number) => {
  if (number === 1) {
    return 1;
  }
  const primesDividers = calculateNumber(number);
  let resultData = primesDividers.reduce((accum, primeFactor) => {
    if (accum.find(({ number }) => number === primeFactor)) {
      return accum.map((elem) => {
        if (elem.number === primeFactor) {
          return { ...elem, pow: elem.pow + 1 };
        } else {
          return { ...elem };
        }
      });
    } else {
      return [...accum, { pow: 1, number: primeFactor }];
    }
  }, []);
  const resultCount = resultData.reduce((accum, elem) => {
    return accum * (elem.pow + 1);
  }, 1);
  console.log('result arr', resultData, resultCount);
  return resultCount;
}




const calculateNumber = (numberToFactor) => {
  const primeGenerator = getPrime();
  let resultNumber = numberToFactor;
  let primes = [];
  while (true) {
    let i = primeGenerator.next().value;
    if (resultNumber % i === 0) {
      primes.push(i);
      console.log('next prime factor is ', primes);
      resultNumber = resultNumber / i;
      while (true) {
        if (resultNumber % i === 0) {
          primes.push(i);
          console.log('next prime factor is ', primes);
          resultNumber = resultNumber / i;
        } else {
          break;
        }
      }

    }
    if (resultNumber < i) {
      break;
    }
  }
  return primes;
}

console.time('test');
getTriangles();
// getDividerCount(28);
console.timeEnd('test');