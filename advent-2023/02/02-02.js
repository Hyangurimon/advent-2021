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
        let collectionArray = [];
        let splitData = line.split(":");

        let rawGameID = [];
        let strGameID = ''
        let gameID = 0;

        // Get game ID

        for (const c of splitData[0]) {
            if (!isNaN(parseInt(c))) {
                rawGameID.push(c);
            }
        }
    
        rawGameID.forEach((num) => {
            strGameID += num;
        });

        gameID = parseInt(strGameID);

        // Get game data and turn into object

        let gameDataPerDraw = splitData[1].split(";");

        gameDataPerDraw.forEach((set) => {

            let draw = set.trim().split(" ");

            let drawnObj = {};

            let tempVal = 0;
            let tempKey = '';

            draw.forEach((x) => {
                if (!isNaN(x)) {
                    tempVal = parseInt(x);
                } else {
                    tempKey = x;
                }

                if (tempVal !== 0 && tempKey) {
                    if (tempKey.includes(',')) {
                        tempKey = tempKey.replace(',', '');
                    }
                    drawnObj[tempKey] = tempVal;
                    tempVal = 0; // initializing
                    tempKey = ''; // initializing
                }
            });
            collectionArray.push(drawnObj);
        })

        let BiggestRedVal = 1;
        let BiggestGreenVal = 1;
        let BiggestBlueVal = 1;

        collectionArray.forEach((el) => {


            if (el.red && el.red > BiggestRedVal) {
                BiggestRedVal = el.red;
            }

            if (el.green && el.green > BiggestGreenVal) {
                BiggestGreenVal = el.green;
            }

            if (el.blue && el.blue > BiggestBlueVal) {
                BiggestBlueVal = el.blue;
            }
        })
        // console.log("Biggest Red: " + BiggestRedVal + ", Biggest Green: " + BiggestGreenVal + ", Biggest Blue: " + BiggestBlueVal)

        const power = BiggestRedVal * BiggestGreenVal * BiggestBlueVal;
        sum += power;
    })
    console.log(sum);
})