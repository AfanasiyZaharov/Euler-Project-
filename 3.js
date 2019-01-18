
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const getNumberFactors = (numberToFactors) => {
  let calculatedMaxNumber = Math.floor(numberToFactors / 2) + 1;
  let factors = [];
  let factorsToBack = [];
  for (let i = 1; i <= calculatedMaxNumber; i++) {
    if (numberToFactors % i === 0) {
      let backFactor = numberToFactors / i;
      if (backFactor === factors[factors.length - 1]) {
        break;
      }
      console.log(`result number is ${i}, it value ${backFactor}`);
      factors.push(i);
      factorsToBack.push(backFactor);
    }
  }
  factors.push(...(factorsToBack.reverse()));
  

  console.log('factors', factors);
  return factors;
}


const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const mainFunction = () => {
  const factors = getNumberFactors(600851475143);
  getMaxPrimeFactor(600851475143, factors);
}

const getMaxPrimeFactor = (number, factors) => {
  for (let i = factors.length - 1; i--; i >= 0) {
    if (isPrime(factors[i])) {
      console.log(`max prime factor of ${number} is ${factors[i]}`);
      return i;
    }
  }
}
console.time('test first test');
mainFunction();
console.timeEnd('test first test');