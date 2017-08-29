var reward = 1;

for (var i = 2; i<=30; i++) {
    reward = reward * 2;
}
console.log("In 30 days the servant will get", reward/100, "dollars!");

// Count how many days untill 10000 dollars

var reward2 = 1;
var numDays = 1;
while (reward2/100 < 10000) {
    reward2 = reward2 * 2;
    numDays++;
}
console.log("In", numDays, "days the servant will get to", reward2/100, "dollars.");

// Count how many days untill 1 billion dollars

var reward3 = 1;
var numDaysBillion = 1;
while (reward3/100 < 1000000000) {
    reward3 = reward3 * 2;
    numDaysBillion++;
}
console.log("In", numDaysBillion, "days the servant will get to", reward3/100, "dollars.");

// Count how many days until the INFINITY amout

var reward4 = 1;
var numDaysInfinity = 1;
while (reward4/100 < Infinity) {
    reward4 = reward4 * 2;
    numDaysInfinity++;
}
console.log("In", numDaysInfinity, "days the servant will get to", reward4/100, "dollars.");