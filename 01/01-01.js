const fs = require('fs')
let dataArray = []

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    dataArray = data.split("\n")

    count = 0
    for (let i = 1; i < dataArray.length; i++) {
        if (parseInt(dataArray[i - 1]) < parseInt(dataArray[i])) {
            count++
        }
    }
    console.log(count)
})