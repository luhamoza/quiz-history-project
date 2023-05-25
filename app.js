'use strict';

const correctAnswer = ['A', 'B', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const displayResult = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 20;
    }
  });

  //scroll to the top
  scrollTo(0, 0);

  //display score on page
  result.classList.remove('d-none');
  //   displayResult.textContent = `${score}%`;

  //animating the score
  let output = 0;
  const timer = setInterval(() => {
    displayResult.textContent = `${output}%`;
    output++;

    if (output === score) {
      clearInterval(timer);
      displayResult.textContent = `${score}%`;
    }
  }, 50);
});

//basics behind the animating the score
/*
let i = 0;
const timer = setInterval(() => {
  console.log('hello');
  i++;
  if (i === 5) {
    //stop the interval
    clearInterval(timer);
  }
}, 1000);
*/

//Window Object (global object)
// console.log('Hello World');
// window.console.log('Hello World');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//   alert('helo');
// }, 3000);
