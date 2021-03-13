'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="wth my brother👀";
// document.querySelector('.score').textContent=100;
// document.querySelector('.number').textContent=10;
// document.querySelector('.guess').value=66;
let randomNumber = Math.trunc(Math.random() * 100) + 1;
// document.querySelector('.number').textContent = randomNumber;

console.log(randomNumber);
let score = 100;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {

  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  
  if (guess > 100 || guess < 0) {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = '🔪 ادخل رقم بين 1 و 100';
  } else if (!guess) {
    document.querySelector('.message').textContent = '🔪 لم تدخل اي رقم';
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'اجابة صحيحة 🚴‍♀️';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '10rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > randomNumber && guess - randomNumber > 20) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ' 📢 اكثر من الرقمي بكثير !';
      score -= 10;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'rgb(65, 65, 11)';
    }  if (score === 0) {
      document.querySelector('.message').textContent = ' 😂😎 لقد خسرت ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess > randomNumber && guess - randomNumber < 5) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ' 📢 اعلى من رقمي بقليل!';
      score -= 10;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'rgb(65, 65, 11)';
    } if (score === 0) {
      document.querySelector('.message').textContent = ' 😂😎 لقد خسرت ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📢 اعلى من رقمي    !';
      score -= 10;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'rgb(65, 65, 11)';
    } if (score === 0) {
      document.querySelector('.message').textContent = ' 😂😎 لقد خسرت ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < randomNumber && randomNumber - guess > 20) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ' 🥁 اقل من رقمي بكثير !';
      score -= 10;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'rgb(65, 65, 11)';
    }  if (score === 0) {
      document.querySelector('.message').textContent = ' 😂😎 لقد خسرت ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < randomNumber && randomNumber - guess < 5) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ' 🥁   اقل من رقمي بقليل  !';
      score -= 10;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'rgb(65, 65, 11)';
    } if (score === 0) {
      document.querySelector('.message').textContent = ' 😂😎 لقد خسرت ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 🥁 اقل من رقمي  !';
      score -= 10;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'rgb(65, 65, 11)';
    }  if (score === 0) {
      document.querySelector('.message').textContent = ' 😂😎 لقد خسرت ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(randomNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.message').textContent = 'ابدا';
  //   document.querySelector('.number').textContent = randomNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
