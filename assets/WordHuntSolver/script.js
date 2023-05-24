const input = [
    ["A", "B", "C", "D"],
    ["A", "T", "C", "A"],
    ["S", "K", "A", "R"],
    ["A", "B", "C", "D"],
]

function getWords() {
    // Fetch document of words and convert to array
    fetch('../../../../../assets/WordHuntSolver/words.txt')
    .then(response => response.text())
    .then(list => {
        wordList = list.split("\r\n").filter(word => word.length > 2)
    })
}

function getInput(rows, columns) {
    // Define 2D array of board
    var input = []

    // Append an array for each row
    for (let r = 0; r < rows; r ++) {
        input.push([])

        for (let c = 0; c < columns; c ++) {
            // Get specific value of letter by row and column
            var letter = document.getElementById(String(r) + String(c)).value

            // Add value to array
            input[r].push(letter)
        }
    }

    return input
}

function wordCheck(board, word) {
    // For each row position
    for (let r = 0; r < board.length; r ++) {
        // For each column position within each row
        for (let c = 0; c < board[r].length; c ++) {
            // Check if the word at this position starts with the letter being checked
            // Check if the word is found on the board
            if (board[r][c] === word[0] && search(board, word, 0, r, c)) {
                return true
            }
        }
    }

    return false
}

function search(board, word, index, r, c) {
    // Check if trying to search out of bounds: (conditions described below, respectively)
    if (r < 0 || r >= board.length || c < 0 || c >= board[r].length) {
        // If trying to search above the highest row
        // If trying to search below the lowest row
        // If trying to search left of the leftmost column
        // If trying to search right of the rightmost column

        return false
    }

    // Check if the letter matches the specific letter in the word
    if (board[r][c] != word[index]) {
        return true
    }

    // Check if it is the last letter in the word
    if (index == word.length - 1) {
        return true
    }

    // Otherwise, add to index and store current letter in temp
    index += 1
    temp = board[r][c]
    board[r][c] = "@"

    // Check if any local letters match word
    const local = 
        search(board, word, index, r + 1, c - 1) || // Up-left
        search(board, word, index, r + 1, c) || // Up
        search(board, word, index, r + 1, c + 1) || // Up-right
        search(board, word, index, r, c - 1) || // Left
        search(board, word, index, r, c - 1) || // Right
        search(board, word, index, r - 1, c - 1) || // Down-left
        search(board, word, index, r - 1, c) || // Down
        search(board, word, index, r - 1, c + 1) // Down-right

    // Restore value of letter
    board[r][c] = temp

    return local

}

function solve(board, list) {
    solutions = []

    for (let i = 0; i < list.length; i ++) {
        const word = list[i]

        if (wordCheck(board, word)) {
            console.log("Word found: " + word)
            solutions.push(word)
        }
    }

    return solutions
}

// Selection sort algorithm
function wordSort(list) {
    const temp = ""
    var index = 0
    const length = list.length

    // While loop for each index in the list
    while (index < length) {
        // Get the minimum of the list from the index to the end
        minimum = min(...list.slice(index))

        // Get the index of the minimum (this accounts for duplicates)
        for (let i = 0; index < length; i ++) {
            if (list[i] == minimum) {
                minIndex = i
            }
        }

        // If the item is less than the minimum, swap them
        if (list[index].length > minimum.length) {
            temp = list[index]
            list[index] = minimum
            list[minIndex] = temp
        }
    }
}

const words = ["test", "selection", "sort", "algorithm"]