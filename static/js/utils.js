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

export function fetch(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      } else reject("Connection Error");
    };
    xhttp.open("GET", url);
    xhttp.send();
  });
}
