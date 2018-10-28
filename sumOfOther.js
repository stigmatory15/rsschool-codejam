function sumOfOther(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = sum - array[i];
    }
    return array;
}

