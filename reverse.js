var initarray = [1,2,3,-4,5,25,-17];
console.log(initarray);

function reverseArr(arr) {
    var j = arr.length - 1;
    var i = 0;

    while(i <= j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    console.log(arr);
}

reverseArr(initarray);