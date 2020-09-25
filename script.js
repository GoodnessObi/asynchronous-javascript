console.log('connected');

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// let marksHeight, marksMass, johnsHeight, johnsMass;
// marksHeight = 1.2; //kg
// marksMass = 120; //meters
// johnsHeight = 2.4;
// johnsMass = 60;

// const marksBMI = marksMass/(marksHeight * marksHeight);
// const johnsBMI = johnsMass/(johnsHeight * johnsHeight);
// const markIsHigher = marksBMI > johnsBMI;

// console.log(marksBMI, johnsBMI);
// console.log('Is Mark\'s BMI higer than John\'s?' + ' ' + markIsHigher);

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// const johnsScore = (89 + 120 + 103)/3;
// const mikesScore = (89 + 120 + 103)/3;
// const marysScore = (8 + 120 + 103)/3;
// console.log(johnsScore, mikesScore, marysScore);

// if (johnsScore > mikesScore && johnsScore > marysScore) {
//     console.log ('John wins with' + ' ' + johnsScore + ' points.');
// } else if (mikesScore > johnsScore && mikesScore > marysScore) {
//     console.log ('Mike wins with' + ' ' + mikesScore + ' points.');
// } else {
//     console.log ('Mary wins with' + ' ' + marysScore + ' points.');
// }

// if (johnsScore > mikesScore && johnsScore > marysScore) {
//     console.log ('John wins with' + ' ' + johnsScore + ' points.');
// } else if (mikesScore > johnsScore && mikesScore > marysScore) {
//     console.log ('Mike wins with' + ' ' + mikesScore + ' points.');
// } else if (marysScore > johnsScore && marysScore > mikesScore) {
//     console.log ('Mary wins with' + ' ' + marysScore + ' points.');
// } else {
//     console.log ('We have a draw');
// }

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// const tipCalculator =function(bill) {
//     switch(bill){
//         case (bill < 50):
//             return bill/0.2;
//         case (bill >= 50 && bill <= 200) :
//             return bill/0.15;
//         case (bill > 200):
//             return bill/0.1;
//         default :
//          return 'not applicable'
//     }
// }

// let tipArray = [];
// let totalBillPaid = [];

// const tipCalculator = function (bill) {
//     if (bill < 50){
//         return tip = bill * 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//         return tip = bill * 0.15;
//     } else if (bill > 200) {
//         return tip = bill * 0.1
//     } else {
//         return tip = bill;
//     }
// }

// const totalBill = function(bill) {
//     return totalBillPaid.push(bill + tipCalculator(bill));
// }

// tipArray.push(tipCalculator(124))
// tipArray.push(tipCalculator(48))
// tipArray.push(tipCalculator(268))

// totalBill(268);
// totalBill(124);
// totalBill(48);

// console.log (tipArray);
// console.log(totalBillPaid);

//alternate solution
// function tipCalculator(bill) {
//     let percemtage;
//     if (bill < 50) {
//         percemtage = .2;
//     } else if (bill >= 50 && bill <= 200) {
//         percemtage = .15
//     } else {
//         percemtage = .1;
//     }
//     return percemtage * bill;
// }

// let bills = [124, 48, 268];
// let tips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)];
// let totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log (tips, totalBills);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// let john = {
//     firstName : 'John',
//     lastName: 'Smith',
//     mass: 1.2,
//     height: 120,
//     calcBMI: function(){
//         this.BMI = this.mass/(this.height * this.height)
//         return this.BMI;
//     }
// }
// john.calcBMI();
// console.log(john)

// let mike = {
//     firstName : 'Mike',
//     lastName: 'Miller',
//     mass: 1.2,
//     height: 120,
//     calcBMI: function(){
//         this.BMI = this.mass/(this.height * this.height)
//         return this.BMI;
//     }
// }

// mike.calcBMI();
// console.log(mike)

// function isHigherBMI () {
//     if (john.calcBMI() > mike.calcBMI()) {
//         console.log (john.firstName + ' ' + john.lastName + ' has a higher BMI at ' + john.BMI);
//     } else if (john.BMI < mike.BMI) {
//         console.log (mike.firstName + ' ' + mike.lastName + ' has a higher BMI at ' + mike.BMI);
//     } else {
//         console.log (john.firstName + ' ' + john.lastName + ' and ' + mike.firstName + ' ' + mike.lastName + ' both have the same BMI.')
//     }
// }

// isHigherBMI();

// if (john.BMI > mike.BMI) {
//     console.log (john.firstName + ' ' + john.lastName + ' has a higher BMI at ' + john.BMI);
// } else if (john.BMI < mike.BMI) {
//     console.log (mike.firstName + ' ' + mike.lastName + ' has a higher BMI at ' + mike.BMI);
// } else {
//     console.log (john.firstName + ' ' + john.lastName + ' and ' + mike.firstName + ' ' + mike.lastName + ' both have the same BMI.')
// }

// let info = ['John', 'Smith', 1990, 'designer', 'false', 'blue'];
// for (let i = info.length-1; i >= 0; i--) {
//     console.log(info[i]);
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

function tipAverage(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i] ;
    }
    return sum/arr.length;
}



mike = {
    bill: [77, 375, 110, 45],
    tipArray: [],
    totalBill: [],
    tipCalc : function(){
        for(i= 0; i < this.bill.length; i++) {
            if (this.bill[i] < 100) {
                this.tip= this.bill[i] * 0.2;
                this.billPaid = this.tip + this.bill[i];
            } else if (this.bill[i] >= 100 && this.bill[i] <= 300){
                this.tip= this.bill[i] * 0.1;
                this.billPaid = this.tip + this.bill[i];
            } else {
                this.tip= this.bill[i] * 0.25;
                this.billPaid = this.tip + this.bill[i];
            } 
            this.tipArray.push(this.tip);
            this.totalBill.push(this.billPaid);
        }
        return;
    }
}

mike.tipCalc();
// console.log(mike.tipArray);
// console.log(mike.totalBill);



john = {
    bill: [124, 48, 268, 180, 42],
    tipArray: [],
    totalBill: [],
    tipCalc : function(){
        for(i= 0; i < this.bill.length; i++) {
            if (this.bill[i] < 50) {
                this.tip= this.bill[i] * 0.2;
                this.billPaid = this.tip + this.bill[i];
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200){
                this.tip= this.bill[i] * 0.15;
                this.billPaid = this.tip + this.bill[i];
            } else {
                this.tip= this.bill[i] * 0.1;
                this.billPaid = this.tip + this.bill[i];
            } 
            this.tipArray.push(this.tip);
            this.totalBill.push(this.billPaid);
        }
        return;
    }
}

john.tipCalc();
// console.log(john.tipArray);
// console.log(john.totalBill);

console.log(tipAverage(john.tipArray));
console.log(tipAverage(mike.tipArray));

if (tipAverage(john.tipArray) > tipAverage(mike.tipArray)) {
    console.log ('John\'s family paid the highest tip on average');
} else if (tipAverage(john.tipArray) < tipAverage(mike.tipArray)) {
    console.log ('Mike\'s family paid the highest tip on average');
} else {
    console.log('Both families paid the same tip amount on average');
}

console.log(john);
console.log(mike);