const fs = require('fs');
let dataArray = [];

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    dataArray = data.split("\n")

    let lifeSupportRating = 0;

    for (let j = 0; j < dataArray[0].length; j++) {
        let zeroArr = [];
        let oneArr = [];
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i][j] === '0') {
                zeroArr.push(dataArray[i]);
            } else if (dataArray[i][j] === '1') {
                oneArr.push(dataArray[i]);
            } else {
                console.log('error in binary data');
            }
        }
        if (zeroArr.length <= oneArr.length) {
            dataArray = [...oneArr]
        } else {
            dataArray = [...zeroArr]
        }

        if (dataArray.length === 1) {
            break;
        }
    }
    let oxygen = [...dataArray];

    dataArray = data.split("\n")

    for (let j = 0; j < dataArray[0].length; j++) {
        let zeroArr = [];
        let oneArr = [];
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i][j] === '0') {
                zeroArr.push(dataArray[i]);
            } else if (dataArray[i][j] === '1') {
                oneArr.push(dataArray[i]);
            } else {
                console.log('error in binary data');
            }
        }
        if (zeroArr.length <= oneArr.length) {
            dataArray = [...zeroArr]
        } else {
            dataArray = [...oneArr]
        }

        if (dataArray.length === 1) {
            break;
        }
    }
    let co2 = [...dataArray];

    lifeSupportRating = parseInt(oxygen, 2) * parseInt(co2, 2);
    console.log(lifeSupportRating);
})