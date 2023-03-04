function rotateArray(arr, numOfRotations) {
    let currentEl;

    for (let i = 0; i < numOfRotations; i++) {
        currentEl = arr.shift();
        arr.push(currentEl);
    }

    console.log(arr.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);