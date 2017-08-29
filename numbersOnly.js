var newArray = [];
function numbersOnly(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArray.push(arr[i]);
        }

    }
console.log(newArray);
}

numbersOnly([9, "apple", "orange", -5]);