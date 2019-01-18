const mainFunction = () => {
  const resultSum = 1000;

}

const isSumOfSquaresIsCSquare = (cSquare, a, b) => {
  for (let c = 500; c >= 300; c--) {
    for (let b = c - 1; (b < c && b > 0); b--) {
      let a = 1000 - b - c;

      const isPyphagorian = (Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2);
      if (isPyphagorian) {
        console.log('found possibleSum', a, b, c);
        console.log('pr', a* b * c);
      }

      // if (a + b + c === 1000) {
      //   console.log('found possibleSum', a, b, c);
      //   console.log('result a b ', (Math.pow(a, 2) + Math.pow(b, 2)));
      //   console.log('result c', Math.pow(c, 2));
      //   const isPyphagorian = (Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2);
      //   if (isPyphagorian) {
      //     console.log('found', a, b, c);
      //     break;
      //   }
      // }

    }
  }
}

isSumOfSquaresIsCSquare();