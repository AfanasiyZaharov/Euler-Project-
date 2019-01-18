const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const maxPrime = 2000000

const mainFunction = () => {
  let sum = 2;

  let i = 3;

  while (true) {
    if (isPrime(i)) {
      console.log('find prime ', i);
      if (i < maxPrime) {
        sum += i;
      }

      if (i >= maxPrime) {
        console.log('sum', sum);
        break;
      }
    }
    i += 2;
  }
}

mainFunction();