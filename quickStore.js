function quickStore(arr) {
    if (arr.length < 2) { return arr; }
    let left = 0, right = arr.length - 1
    while (left < right) {
        while (left < right && arr[right] >= arr[0]) {
            right--
        }

        while (left < right && arr[left] <= arr[0]) {
            left++
        }

        if (left === right) {
            [arr[0], arr[left]] = [arr[left], arr[0]];
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    return [...quickStore(arr.slice(0, left)), ...arr.slice(left, right + 1), ...quickStore(arr.slice(right + 1))]
}

var arr = [5, 7, 2, 9, 2,4,4,4,3, 8, 4, 7, 1];
console.log(quickStore(arr))