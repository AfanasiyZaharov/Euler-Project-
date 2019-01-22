function* getPrime() {
  let lastPrime = 1;
  yield lastPrime + 1;
  let i = 3;
  while (true) {
    if (isPrime(i)) {
      lastPrime = i;
      yield lastPrime;
    }
    i += 2;
  }
}

function* getPrimeNew() {
  let isPrime = new Map();
  isPrime.set(0, false);
  isPrime.set(1, false);
  console.log(isPrime.get(1));
  let i = 2;
  const maxNumberToCalculate = 100000;

  while (true) {
    if (!isPrime.has(i)) {
      yield i;
      for (let j = i; j <= maxNumberToCalculate; j += i) {
        isPrime.set(j, false);
      }
    }
    i += 1;
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
}

const getPrimesOld = () => {
  let i = 0;
  const primeGenerator = getPrime();
  while (true) {
    if (i === 100000) {
      break;
    }
    i++;
  }
}


const getPrimesNew = () => {
  let i = 0;
  const primeGenerator = getPrimeNew();
  while (true) {
    let result =  primeGenerator.next().value;
    if (i === 100000) {
      console.log('result', result)
      break;
    }
    i++;
  }
}



// console.time('test old get prime');
// getPrimesOld();
// console.timeEnd('test old get prime');


console.time('test new get prime');
getPrimesNew();
console.timeEnd('test new get prime');