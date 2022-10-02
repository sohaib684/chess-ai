export function generateRandomNumber(lowerLimit, upperLimit) {
  const difference = upperLimit - lowerLimit;
  const randomDifferenceNum = Math.floor(Math.random() * difference);
  const randomNum =
    randomDifferenceNum == difference
      ? lowerLimit + (randomDifferenceNum - 1)
      : lowerLimit + randomDifferenceNum;
  return randomNum;
}

export function randomChoice(arr) {
  const randomIdx = generateRandomNumber(0, arr.length);
  const randomElem = arr[randomIdx];
  return randomElem;
}
