var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

function time() {
    if (MINUTE === 30 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's half past", HOUR, "in the morning.");
    }
    else if (MINUTE === 30 && PERIOD === "AM") {
        console.log("It's half past midnight");
    }
    else if (MINUTE === 30 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's half past", HOUR, "in the afternoon.");
    }
    else if (MINUTE === 30 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's half past noon");
    }
    else if (MINUTE === 30 && PERIOD === "PM") {
        console.log("It's half past", HOUR, "at night.");
    }
    else if (MINUTE === 15 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's a quarter past midnight");
    }
    else if (MINUTE === 15 && PERIOD === "AM") {
        console.log("It's a quarter after", HOUR, "in the morning.");
    }
    else if (MINUTE === 15 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's a quarter after", HOUR, "in the afternoon.");
    }
    else if (MINUTE === 15 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's a quarter past noon");
    }
    else if (MINUTE === 15 && PERIOD === "PM") {
        console.log("It's a quarter after", HOUR, "at night.");
    }
    else if (MINUTE === 5 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's", MINUTE, "minutes past midnight");
    }
    else if (MINUTE === 5 && PERIOD === "AM") {
        console.log("It's", MINUTE, "minutes after", HOUR, "in the morning.");
    }
    else if (MINUTE === 5 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's", MINUTE, "minutes after", HOUR, "in the afternoon.");
    }
    else if (MINUTE === 5 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's", MINUTE, "minutes after", HOUR, "at noon.");
    }
    else if (MINUTE === 5 && PERIOD === "PM") {
        console.log("It's", MINUTE, "minutes after", HOUR, "at night.");
    }
    else if (MINUTE < 15 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's just", MINUTE, "minutes past midnight.");
    }
    else if (MINUTE < 15 && PERIOD === "AM") {
        console.log("It's just", MINUTE, "minutes after.", HOUR, "in the morning.");
    }
    else if (MINUTE < 30 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's just", MINUTE, "minutes past midnight.");
    }
    else if (MINUTE < 30 && PERIOD === "AM") {
        console.log("It's already", MINUTE, "minutes after", HOUR, "in the morning.");
    }
    else if (MINUTE > 30 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's", HOUR, "and", MINUTE, "minutes past midnight.");
    }
    else if (MINUTE > 30 && PERIOD === "AM") {
        console.log("It's", HOUR, "and", MINUTE, "minutes in the morning.");
    }
    else if (MINUTE > 45 && PERIOD === "AM" && HOUR === 12) {
        console.log("It's", HOUR, "and", MINUTE, "minutes past midnight.");
    }
    else if (MINUTE > 45 && PERIOD === "AM") {
        console.log("It's almost", HOUR + 1, "in the morning.");
    }
    else if (MINUTE < 15 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's just", MINUTE, "minutes past noon.");
    }
    else if (MINUTE < 15 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's just", MINUTE, " minutes after", HOUR, "in the afternoon.");
    }
    else if (MINUTE < 15 && PERIOD === "PM") {
        console.log("It's just", MINUTE, "minutes after", HOUR, "at night.");
    }
    else if (MINUTE < 30 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's already", MINUTE, "minutes past noon.");
    }
    else if (MINUTE < 30 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's already", MINUTE, "minutes after", HOUR, "in the afternoon.");
    }
    else if (MINUTE < 30 && PERIOD === "PM") {
        console.log("It's already", MINUTE, "minutes after", HOUR, "at night.");
    }
    else if (MINUTE > 45 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's almost 1 oclock in the afternoon");
    }
    else if (MINUTE > 45 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's almost", HOUR + 1, "in the afternoon");
    }
    else if (MINUTE > 45 && PERIOD === "PM") {
        console.log("It's almost", HOUR + 1, "at night.");
    }
    else if (MINUTE > 30 && PERIOD === "PM" && HOUR === 12) {
        console.log("It's", MINUTE, "past noon");
    }
    else if (MINUTE > 30 && PERIOD === "PM" && HOUR < 6) {
        console.log("It's", MINUTE, "minutes after", HOUR, "in the afternoon");
    }
    else if (MINUTE > 30 && PERIOD === "PM") {
        console.log("It's already", MINUTE, "minutes after", HOUR, "at night.");
    }
}

// Conditions if somebody put values out of range//
if (HOUR < 0 || HOUR > 12) {
    console.log("Incorect time... Try again!");
}
else if (MINUTE < 0 || MINUTE > 60) {
    console.log("Incorect time... Try again!");
}
else if (PERIOD === "AM" || PERIOD === "PM") {
    time();
}
else {
    console.log("Incorect time... Try again!");
}