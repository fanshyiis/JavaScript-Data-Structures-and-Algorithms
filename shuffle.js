function shuffle(arr, l) {
    let len = arr.length - 1
    let off = len - l

    while (len > off) {
      var i = Math.floor(Math.random() * len)
      console.log(i, len)
      var temp = arr[len]
      arr[len] = arr[i]
      arr[i] = temp
      len--
    }

    return arr.slice(++off)
}


console.log(shuffle([1,2,3,4,5,6,7,8,9,0], 6))