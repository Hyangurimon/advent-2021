const fs = require('fs');
let dataArray = [];

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    dataArray = data.split("\n")

    let gamma = '';
    let epsilon = '';
    let powerConsumption = 0;

    for (let j = 0; j < dataArray[0].length; j++) {
        let zeros = 0;
        let ones = 0;
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i][j] === '0') {
                zeros++;
            } else if (dataArray[i][j] === '1') {
                ones++;
            } else {
                console.log('error in binary data');
            }
        }
        if (zeros > ones) {
            gamma += '0';
            epsilon += '1';
        } else {
            gamma += '1';
            epsilon += '0';
        }
    }
    powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);
    console.log(powerConsumption);
})