const minMoney = 1000;
const minYears = 1;
const maxPercentage = 100;
const fix = 100;
const roundNum = 2;

function err() {
  alert('Invalid input data');
}

function round(num, fix) {
  return Number((Math.round(num * fix) / fix).toFixed(fix));
}

let initialAmountOfMoney = Number(prompt('Initial amount of money'));
if (!initialAmountOfMoney || initialAmountOfMoney < minMoney) {
  err();
}

let numberOfYears = Number(prompt('Number of years'));
if (!numberOfYears || numberOfYears < minYears) {
  err();
}

let percentageOfAYear = Number(prompt('Percentage of a year'));
if (!percentageOfAYear || percentageOfAYear > maxPercentage) {
  err();
}

let totalProfit = 0;

for (let i = 0; i < numberOfYears; i++) {
  totalProfit +=
    (initialAmountOfMoney + totalProfit) * percentageOfAYear / maxPercentage;
}

totalProfit = round(totalProfit, roundNum);

let totalAmount = initialAmountOfMoney + totalProfit;
totalAmount = round(totalAmount, roundNum);

alert(
  'Initial amount: ' +
    initialAmountOfMoney +
    '\nNumber of years: ' +
    numberOfYears +
    '\nPercentage of year: ' +
    percentageOfAYear +
    '\n\nTotal profit: ' +
    totalProfit +
    '\nTotal amount: ' +
    totalAmount
);
