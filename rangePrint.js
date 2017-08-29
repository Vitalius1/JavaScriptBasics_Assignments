function rangePrint(start, end, sk) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    for (var i = start; i < end; i += sk) {
        if (sk === undefined) {
            sk = 1;
        }
        console.log(i);
    }
}
rangePrint(10, 20, 2);