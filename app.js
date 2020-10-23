// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('John');
// designerQuestion = interviewQuestion('designer');
// designerQuestion('Grace');

// // function game() {
// //     let score = Math.random() * 10;
// //     console.log(score >= 5);
// // }

// // game();

// (function game() {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function game(goodluck) {
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodluck);
// })(5);

//  function retirement(retirementAge) {
//      let a = ' years left until retirement.'
//      return function(yearOfBirth) {
//          let age = 2015 - yearOfBirth;
//          console.log((retirementAge - age) + a)
//      }
//  }

//  let retirementUs = retirement(66);
//  retirementUs(1990)
//  retirement(66)(1990);

// let john = {
//     name: 'John',
//     age: 30,
//     job: 'teacher',
//     presentation:  function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log(`Good ${timeOfDay}, ladies and gentlemen! I'm ${this.name}, a ${this.job}, and I'm ${this.age} years old.`)
//         } else if (style === 'friendly') {
//             console.log (`Hey! What's up? I'm ${this.name}, a ${this.job}, and I'm ${this.age} years old. Have a good ${timeOfDay}`)
//         }
//     }
// }

// john.presentation('friendly', 'afternoon');

// let emily = {
//     name: 'emily',
//     job: 'designer',
//     age: 22
// }

// john.presentation.call(emily, 'formal', 'morning')

// // john.presentation.apply(emily, ['formal', 'morning'])


// let johnFormal = john.presentation.bind(john,'formal')

// johnFormal('afternoon');

// let emilyFriendly = john.presentation.bind(emily, 'friendly')

// emilyFriendly('evening');

// const years = [1985, 1987, 1991, 2000, 2004];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     // console.log(arrRes);
//     return arrRes;
// }

// function calculatrAge(el) {
//     return 2020 - el
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// let ages = arrayCalc(years, calculatrAge)

// let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


// function isFullAge(el) {
//     return el >= 25;
// }

// let ageRes = arrayCalc(years, calculatrAge);
// console.log (ageRes);


// console.log(arrayCalc(ageRes, isFullAge))

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// (function () {
//     const Question = function(question, options, answer) {
//         this.question = question;
//         this.options = options;
//         this.answer = answer;
//     }
//     const quiz = []
//     quiz.push(new Question ('Do you love food?', ['yes', 'definitely', 'absolutely'], 3));
//     quiz.push(new Question ('Which of these isn\'t one of my names?', ['Chidinma', 'Tope', 'Ralia'], 3));
//     quiz.push(new Question ('How old am I?', [21, 18, 29], 2));

//     const randomNumber = Math.round(Math.random() * (quiz.length-1));
//     let score = 0
    

    
//     // console.log(quiz)
    
//     Question.prototype.displayQuestion = function () {
//         let question = window.prompt (this.question, this.options);
//         this.checkAnswer(question);
//     }
    
//     Question.prototype.checkAnswer = function(q) {
//         if (q == this.answer) {
//             console.log('correct :-)', `Your score : ${score}`);
//         } else {
//             console.log('wrong :-(', `Your score : ${score}`)
//         }
//     }
    
//     quiz[randomNumber].displayQuestion();
// })();


(function () {
    const Question = function(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    const quiz = [];
    
    quiz.push(new Question ('Do you love food?', ['yes', 'definitely', 'absolutely'], 3));
    quiz.push(new Question ('Which of these isn\'t one of my names?', ['Chidinma', 'Tope', 'Ralia'], 3));
    quiz.push(new Question ('How old am I?', [21, 18, 29], 2));

    let randomNumber = Math.round(Math.random() * (quiz.length-1));
    let randomQuestion = quiz[randomNumber];
    let score = 0;
    let input;
   
    Question.prototype.displayQuestion = function () {
        let optionList = '';
        for (let i = 0; i < this.options.length; i++) {
            optionList += `(${[i + 1]}.)${this.options[i]}`
        };

        let question = this.question + optionList;
        input = window.prompt (question, 'Type in the number for the correct option');
    }

   nextQuestion = function () {
        randomNumber = Math.round(Math.random() * (quiz.length-1));
        randomQuestion = quiz[randomNumber];
        runQuiz();
    }
    
    Question.prototype.checkAnswer = function(i) {
        if  (i.toLowerCase() === 'exit') {
            return;
        } else if (i == this.answer) {
            score ++;
            console.log('correct :-)', `Your score : ${score}`);
        } else {
            console.log('wrong :-(', `Your score : ${score}`)
        }
        return nextQuestion();
    }

    runQuiz = function () {
        randomQuestion.displayQuestion();
        randomQuestion.checkAnswer(input);
    }
    
    runQuiz();
})();




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/