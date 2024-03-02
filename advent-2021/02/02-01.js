const fs = require('fs')
let dataArray = []

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    dataArray = data.split("\n")

    let horizontalP = 0;
    let depth = 0;
    let directionArray = [];

    for (let i = 0; i < dataArray.length; i++) {

        directionArray = dataArray[i].split(' ');

        if (directionArray[0] === 'down') {
            depth += parseInt(directionArray[1]);
        } else if (directionArray[0] === 'up') {
            depth -= parseInt(directionArray[1]);
        } else {
            horizontalP += parseInt(directionArray[1]);
        }
    }
    let result = horizontalP * depth;
    console.log(result);
})