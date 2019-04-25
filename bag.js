function bag(arr, num) {
    arr = arr.sort()
    let res = []
    if (num < arr[0]) return 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= num) {
            res.push(bag(arr, num - arr[i]) + arr[i])
        }      
    } 
    console.log(res)
    return Math.max(...res)
}

console.log(bag([30,50,100],270))