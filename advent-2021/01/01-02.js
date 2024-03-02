const fs = require('fs')
let dataArray = []

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    dataArray = data.split("\n")

    let count = 0
    for (let i = 0; i < (dataArray.length - 2); i++) {
        firstSum = parseInt(dataArray[i]) + parseInt(dataArray[i + 1]) + parseInt(dataArray[i + 2])
        secondSum = parseInt(dataArray[i + 1]) + parseInt(dataArray[i + 2]) + parseInt(dataArray[i + 3])
        if (firstSum < secondSum) {
            count++
        }
    }
    console.log(count)
})