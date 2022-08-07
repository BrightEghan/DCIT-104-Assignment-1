let number = prompt("Given number: ");
let primeNum = [];

isPrime = (x) => {
  for (let i = 2; i < x; i++) if (x % i === 0) return false;

  return true;
};

print = (y) => {
  for (let i = 2; i <= y; i++) {
    if (isPrime(i)) {
      primeNum.push(i);
    }
  }
};

print(number);

let numOfPrime = primeNum.length;
var sum = 0;

for (i = 0; i < numOfPrime; i++) {
  sum += primeNum[i];
}

console.log(sum);
