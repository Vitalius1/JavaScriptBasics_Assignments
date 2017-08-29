function match(str1, str2) {
    var index1 = 0;
    var index2 = 0;
    while (index1 < str1.length) {
        if (str1[index1 + index2] == str2[index2]) {
            index2++
            if (index2 == str2.length) {
                return true
            }
        } else {
            index2 = 0;
            index1++
        }
    }
    return false
}

match("catas", "as")