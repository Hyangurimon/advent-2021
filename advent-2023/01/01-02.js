const fs = require('fs');

fs.readFile('input_data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let dataArray = [];
    let sum = 0;

    dataArray = data.split("\n");

    const numObject = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    }

    dataArray.map((line) => {
        let numArray = [];
        let tempString = '';

        for (const c of line) {
            if (!isNaN(c)) {
                numArray.push(c);
            } else {
                tempString += c;
            }
            
            for (let key in numObject) {
                if (tempString.includes(key)) {
                    numArray.push(numObject[key]);
                    tempString = tempString.slice(-1); // clear all, but leave last char
                }
            }
        }

        const combinedNum = numArray[0] + numArray[numArray.length - 1];

        sum += parseInt(combinedNum);
    })
    console.log(sum);
})