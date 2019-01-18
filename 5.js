const findMinDivider = () => {
  let i = 5040;
  while (true) {
    console.log('check ', i);
    if (isDividingbyOneTwoTwenty(i)) {
      console.log('found', i);
      break;
    }
    i += 2520;
  }
}


const isDividingbyOneTwoTwenty = (number) => {

  const valuesToCompare = [3, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  //const valuesToCompare = [3, 6, 7, 8, 9];


  for (let i = valuesToCompare.length - 1; i >= 0; i--) {
    if (number % valuesToCompare[i] !== 0) {
      return false;
    }
  }
  return true;
}

findMinDivider();