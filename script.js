let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        if (guess === target) {
            return mid;
        }
        if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }

    return null;
}
binarySearch(list,3)