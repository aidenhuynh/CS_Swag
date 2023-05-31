// Global for solved status
var solved = false

// Make a global variable for solutions
var solutions = []

// Solution index variable to go to next word
var solIndex = 0

// Define a list for all Scrabble words from txt file
var wordList = []

// Function to get words.txt and convert to an array
function getWords() {
    // Fetch document of words
    fetch('../../../../../assets/WordHuntSolver/words.txt')
    .then(response => response.text())
    .then(list => {
        // Convert to array

        // Web version
        wordList = list.split("\n")

        // Local version
        // wordList = list.split("\r\n")
    })
}

// Function to filter words to minimize runtime
function filterWords(board, list) {
    // Define list for letters of board
    var letters = []

    // Remove words less than 3 letters (Minimum for word hunt)
    list = list.filter(word => word.length > 2)

    // Get all letters on the board into a list
    for (let r = 0; r < board.length; r ++) {
        for (let c = 0; c < board.length; c ++) {
            letters.push(board[r][c])
        }
    }

    // Remove words whose letters can not be found on the board
    list = list.filter(word => word.split('').every(letter => letters.includes(letter)))

    return list
}

// Function to move to the next box on key press
function nextLetter(id) {
    // Get the row position from the id
    var r = Number(id.slice(1, 2))
    
    // Get the column position from the id
    var c = Number(id.slice(4, 5))

    // If at the last letter (bottom-right)
    if (r == 3 && c == 3) {
        return
    }

    // If at the last column, go to next row and reset column
    if (c == 3) {
        r += 1
        c = 0
    }

    // Otherwise, shift to the right
    else {
        c += 1
    }

    // Focus on the next letter
    document.getElementById("(" + r + ", " + c + ")").focus()
}

// Function to loop event listeners for each letter
function letterEvents(rows, columns) {
    // For each row
    for (let r = 0; r < rows; r ++) {
        // For each column in the row
        for (let c = 0; c < columns; c ++) {
            // Create a variable for the id
            var id = "(" + r + ", " + c + ")"

            // Add an event listener to each letter input box
            makeEvents(id)
        }
    }
}

// Function to make event listeners for boxes
function makeEvents(id) {
    // Create event listener for keyup
    document.getElementById(id).addEventListener("keyup", function() {
        // Define variable for the value of the box
        var value = document.getElementById(id).value

        // If a character is entered
        var len = value.length

        // Iterate backwards through input to get last character to first
        for (let i = len; i >= 0; i --) {
            // If character is a letter, use that
            if (/[a-zA-Z]/.test(value.slice(i - 1, i))) {
                // Update value and uppercase it
                document.getElementById(id).value = value.slice(i - 1, i).toUpperCase()

                // Move to next box
                nextLetter(id)

                // Stop loop
                return
            }
        }

        // If there are no characters, set input to blank
        document.getElementById(id).value = ""
    })

    // Delete input on click
    document.getElementById(id).addEventListener("click", function() {
        document.getElementById(id).value = ""
    })
}

// Function for events not limited to boxes
function gameEvents() {
    // Game controls on whole page
    document.addEventListener("keyup", function() {
        // If enter is pressed
        if (event.key === "Enter") {
            // If not solved, solve
            if (!solved) {
                solve(getInput(4, 4), wordList)
            }
        }

        else if (event.key === "ArrowRight") {
            if (solved && solIndex !== solutions.length - 1) {
                shiftWord(1)
            }
        }

        else if (event.key === "ArrowLeft") {
            if (solved && solIndex !== 0) {
                shiftWord(-1)
            }
        }
    })
}

// Function to get user input
function getInput(rows, columns) {
    // Define 2D array of board
    var input = []

    // Append an array for each row
    for (let r = 0; r < rows; r ++) {
        input.push([])

        for (let c = 0; c < columns; c ++) {
            // Get specific value of letter by row and column
            var letter = document.getElementById("(" + r + ", " + c + ")").value

            // If there was a letter inputted
            if (letter.length != 0) {
                // Add value to array
                input[r].push(letter)
            }
        }
    }

    return input
}

// Function to search local letters to find word
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
        return false
    }

    // Check if it is the last letter in the word
    if (index === word.length - 1) {
        return true
    }

    // Otherwise, add to index and store current letter in temp
    index += 1
    const temp = board[r][c]
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

// Selection sort algorithm
function wordSort(list) {
    var temp = ""
    var index = 0
    const length = list.length

    // While loop for each index in the list
    while (index < length) {
        var minimum = ""
        var minIndex = ""
        var tempDict = {"len":[], "word":[]}

        // Get the minimum of the list from the index to the end
        for (let i = index; i < length; i ++) {
            tempDict["len"].push(list[i].length)
            tempDict["word"].push(list[i])
        }

        // Get the word of minimum length
        for (let i = 0; i < tempDict["len"].length; i ++) {
            if (tempDict["len"][i] == Math.min(...tempDict["len"])) {
                minimum = tempDict["word"][i]
            }
        }

        // Get the index of the minimum
        for (let i = index; i < length; i ++) {
            if (minimum == list[i]) {
                minIndex = i
            }
        }

        // If the item is less than the minimum, swap them
        if (list[index].length > minimum.length) {
            temp = list[index]
            list[index] = minimum
            list[minIndex] = temp
        }

        index += 1
    }

    // Reverse the list to be in descending order
    list.reverse()
}

// Function to find solutions
function solve(board, list) {
    // Check if list has 4 rows
    if (board.length != 4) {
        return
    }
    
    // Check if each row has 4 items
    else if (board[0].length != 4 || board[1].length != 4 || board[2].length != 4 || board[3].length != 4) {
        return
    }

    // Set solved to true
    solved = true

    // Define list of filtered words
    var list = filterWords(board, list)

    for (let i = 0; i < list.length; i ++) {
        // For each word in the list, define variable
        var word = list[i]

        // Check if the word exists on the board, if true, add to solutions
        if (wordCheck(board, word)) {
            solutions.push(word)
        }
    }

    // If there are no solutions found, display that by adding it as a solutions
    if (solutions.length == 0) {
        solutions.push("No solutions")
    }

    // Sort solutions by word length in descending order
    wordSort(solutions)

    // Show the first solution
    shiftWord(0)
}

function shiftWord(d) {
    // Shift right
    if (d == 1) {
        solIndex += 1
    }

    // Shift left
    else if (d == -1) {
        solIndex -= 1
    }

    // Set the inner HTML to show word
    document.getElementById("solution").innerHTML = solutions[solIndex]
}

// Get words on start and add events
getWords(); letterEvents(4, 4); gameEvents()