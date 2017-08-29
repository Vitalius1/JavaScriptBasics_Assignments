var names = ['James', 'Jill', 'Jane', 'Jack'];

function fancyArray(arrow, reversed) {
    var j = names.length - 1;
    if (reversed) {
        for (j; j >= 0; j--) {
            console.log(j + arrow + names[j]);
        }
    }
    else if (reversed === undefined) {
        for (var i = 0; i < names.length; i++) {
            console.log(i + arrow + names[i]);
        }
    }
}

fancyArray(' => ', true);