// Generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Usage example
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  
  
  console.log(randomNumber);
  