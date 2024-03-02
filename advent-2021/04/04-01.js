const fs = require('fs');
let dataArray = [];

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let dataArray = data.split("\n")

    // Regular Expressions (regex)
    let drawNumbers = [...dataArray[0].match(/\d+/g)]

    let bingoBoards = []

    for (let i = 1; i < dataArray.length; i += 6) {
        bingoBoard = [
            dataArray[i + 1].match(/\d+/g),
            dataArray[i + 2].match(/\d+/g),
            dataArray[i + 3].match(/\d+/g),
            dataArray[i + 4].match(/\d+/g),
            dataArray[i + 5].match(/\d+/g)
        ]

        bingoBoards.push(bingoBoard)
    }

    let winningBoard = []
    let drawNum = 0
    for (let i = 0; i < drawNumbers.length; i++) {
        drawNum = drawNumbers[i]
        for (let j = 0; j < bingoBoards.length; j++) {
            for (let k = 0; k < 5; k++) {
                for (let l = 0; l < 5; l++) {
                    if (bingoBoards[j][k][l] === drawNum) {
                        bingoBoards[j][k][l] = 'X'
                    }
                }
            }
        }
        // Checking by row
        for (let m = 0; m < bingoBoards.length; m++) {
            for (let n = 0; n < 5; n++) {
                let xCount = 0
                for (let o = 0; o < 5; o++) {
                    if (bingoBoards[m][n][o] === 'X') {
                        xCount++
                    }
                }
                if (xCount === 5) {
                    winningBoard = bingoBoards[m]
                    break
                }
            }
            if (winningBoard.length > 0) {
                break
            }
        }
        if (winningBoard.length > 0) {
            break
        }

        // Checking by column
        for (let m = 0; m < bingoBoards.length; m++) {
            for (let n = 0; n < 5; n++) {
                let xCount = 0
                for (let o = 0; o < 5; o++) {
                    if (bingoBoards[m][o][n] === 'X') {
                        xCount++
                    }
                }
                if (xCount === 5) {
                    winningBoard = bingoBoards[m]
                    break
                }
            }
            if (winningBoard.length > 0) {
                break
            }
        }
        if (winningBoard.length > 0) {
            break
        }
    }

    let finalWinningBoard = []

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (!isNaN(winningBoard[i][j])) {
                finalWinningBoard.push(winningBoard[i][j])
            }
        }
    }

    let sum = 0

    for (let i = 0; i < finalWinningBoard.length; i++) {
        sum += parseInt(finalWinningBoard[i])
    }

    let finalScore = sum * drawNum

    console.log(finalScore)
})