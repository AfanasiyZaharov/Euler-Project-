// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// 998001 - максимальное число

const maxNumberOfThreeDigits = 998001;

const findPossibleSixDigPalindrom = () => {
  let palindromes = [];
  for (let i = 100; i <= 999; i++) {
    const resultPalindrom = makePolindrom(i)
    console.log('polindrom', resultPalindrom)
    if (resultPalindrom > maxNumberOfThreeDigits) {
      break;
    }
    palindromes.push(resultPalindrom);
  }
  return palindromes;
}
const makePolindrom = (number) => {
  return +(`${number}` + (`${number}`.split('').reverse().join('')));
}

const findMaxPolindrom = (allPolindromes) => {
  for (let i = allPolindromes.length - 1; i >= 0; i--) {
    if (isNumberIsProductofThreeDigits(allPolindromes[i])) {
      return allPolindromes[i];
    }
  }
}

const isNumberIsProductofThreeDigits = (numberPalindrom) => {
  //console.log('got', numberPalindrom);
  for (let i = 999; i > 100; i--) {
    if (numberPalindrom % i === 0 && `${(numberPalindrom / i)}`.length === 3) {
      console.log(`fiiind ${numberPalindrom}, ${i}, ${numberPalindrom / i}`);
      return true;
    }
  }
  console.log('false', numberPalindrom);
  return false;
}


const mainFunction = () => {
  const allPolindromes = findPossibleSixDigPalindrom();
  console.log('length', allPolindromes.length, allPolindromes);
  findMaxPolindrom(allPolindromes);
}



mainFunction();