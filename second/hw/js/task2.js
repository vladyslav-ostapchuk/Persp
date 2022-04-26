const rangeDifficulty = 4;
let initialRangeNum = 9;
let startPrize = 100;
let playing = true;
const initialAttempts = 3;

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function getCurrentPrize(startPrize, winStreak, attempts) {
  const devider = 2;
  const multiplier = 2;
  let ans = startPrize;
  for (let i = 0; i < winStreak; i++) {
    ans *= multiplier;
  }
  for (let i = 3; i > attempts; i--) {
    ans /= devider;
  }
  return ans;
}

function gameStart() {
  if (!confirm('Do you want to play a game?')) {
    alert('You did not become a billionaire, but you can');
    return;
  } else {
    while (playing) {
      let winStreak = 0;
      let totalPrize = 0;
      let randomNum = getRandomNum(initialRangeNum);

      for (let attempts = 3; attempts > 0; attempts--) {
        let currentPrize = getCurrentPrize(startPrize, winStreak, attempts);

        let answer = Number(
          prompt(
            randomNum +
              'Choose a roulette pocketnumber from 0 to ' +
              (initialRangeNum - 1) +
              '\nAttempts left: ' +
              attempts +
              '\nTotal prize: ' +
              totalPrize +
              ' $\nPossible prize on current attempt: ' +
              currentPrize +
              ' $'
          )
        );

        if (answer === randomNum) {
          totalPrize += currentPrize;
          winStreak++;

          if (
            confirm(
              `Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue ?`
            )
          ) {
            initialRangeNum += rangeDifficulty;
            attempts = initialAttempts + 1;
            randomNum = getRandomNum(initialRangeNum);
          } else {
            playing = false;
            break;
          }
        }
      }

      alert(`Thank you for our participation. Your prize is ${totalPrize} $`);
      if (!confirm('Do you want to play again?')) {
        break;
      }
    }
  }
}

gameStart();
