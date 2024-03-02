const fs = require('fs');

fs.readFile('input_data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let dataArray = [];
    let sum = 0;

    dataArray = data.split("\n");

    dataArray.map((line) => {
        let numArray = [];

        for (const c of line) {
            if (!isNaN(c)) {
                numArray.push(c);
            }
        }

        let firstNum = "empty";
        let lastNum = "empty";
        
        numArray.map((num) => {
            if (firstNum == "empty") {
                firstNum = num;
            } else {
                lastNum = num;
            }
        })

        if (lastNum == "empty") {
            lastNum = firstNum;
        }

        let combinedNum = firstNum + lastNum;

        sum += parseInt(combinedNum);
    })
    
    console.log(sum);
})