function snakeToCamel(str) {

    const arr = [];
    let isCapitalized = false;

    for (let char of str) {
        if (char === '_') {
            isCapitalized = true;
            continue;
        }

        if (isCapitalized) {
            arr[arr.length] = char.toUpperCase();
            isCapitalized = false;
        }
        else {
            arr[arr.length] = char
        }
    }

    return arr.join('')
}

