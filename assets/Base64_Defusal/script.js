// Create global variable for guess
var codeGuess = ""

// Create global variable for initial minutes
var initialMinutes = ""

function random(min, max) {
    // Round up minimum
    min = Math.ceil(min)

    // Round down maximum
    max = Math.floor(max)

    // Get random integer between minimum and maximum (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateCode() {
    // Create variable for unencoded code to be used later
    var unencoded = ""

    // Concatenate 4 random digits to unencoded variable to create code
    for (let i = 0; i < 4; i++) {
        unencoded += random(0, 9).toString()
    }

    // Encode the 4 digit code using JavaScript's btoa() function, define as variable for later use
    encoded = btoa(unencoded)

    // Return the encoded code
    return encoded
}

function keypad(input) {
    // Create variable for text element in HTML for easy access
    codeInput = document.getElementById('codeInput')
   
    // Create variable for number of digits already guessed
    digits = codeGuess.length

    // Create array for new guess
    newGuess = codeInput.innerHTML.split('')

    // If the enter button was pressed, run enter() function
    if (input == "enter") {

        // If there are not enough digits, do nothing
        if (digits != 4) {
            return
        }

        // If there are 4/4 digits, enter the guessed code
        else {
            enter()
        }
    }

    // If the back button was pressed, remove the previous digit
    else if (input == "back") {

        // If there is nothing to delete, do nothing
        if (digits == 0) {
            return
        }

        // Remove item in array
        newGuess[digits - 1] = "_"

        // Update GUI to match new guess by setting innerHTML equal to the array as a string
        codeInput.innerHTML = newGuess.join('')
 
        // Update guess by removing last digit
        codeGuess = codeGuess.slice(0, digits - 1)
    }

    // If a number was pressed...
    else {    
        // Don't add another digit to the guess if there are already 4
        if (digits == 4) {
            return
        }

        // Change appropriate item in array to match new guess
        newGuess[digits] = input

        // Update GUI to match new guess by setting innerHTML equal to the array as a string
        codeInput.innerHTML = newGuess.join('')

        // Update guess with new digit
        codeGuess += input
    }

}

function enter() {
    // If the code equals the unencoded code then win, otherwise win
    if (codeGuess == atob(encoded)) {
        // Use atob instead of a variable for unencoded to better hide it from inspect element
        win()
    }

    else {
        loss("wrong code")
    }
}

function difficultySelect(n) {
    // Hide initial starting screen
    document.getElementById('startScreen').style.display = "none"
    
    // Start the timer before making game visible to avoid showing default time of 12:00
    countdown(n)

    // Make actual game visible
    document.getElementById('bomb').style.display = ""

    // Generate a code and display it on the UI
    document.getElementById('encodedBox').innerHTML = generateCode()
}

function modalOpen(type) {
    // Open modal images with parameter for which one
    document.getElementById(type).style.display = "block"
}

function modalClose(type) {
    // Close modal images with parameter for which one
    document.getElementById(type).style.display = "none"
}

function updateTime(type, timerArray, time) {
    // Update indexes of timer based on whether minutes or seconds
    if (type == "min") {
        var a = 0
        var b = 1
    }

    else if (type == "sec") {
        var a = 3
        var b = 4
    }

    // Turn time into a string then an array
    time = time.toString().split('')
    
    // Update timer list to match time, accounting for 2 digit time amounts
    if (time.join('') < 10) {
        timerArray[a] = 0
        timerArray[b] = time[0]
    }

    else {
        timerArray[a] = time[0]
        timerArray[b] = time[1]
    }
}

function countdown(maxMinutes) {
    // Update initial minutes
    initialMinutes = maxMinutes    

    // Define variable for the UI timer for easy use
    var timer = document.getElementById('timer')

    // Separate minutes left on timer from maximum minutes
    var minutes = maxMinutes
    
    // Define seconds
    var seconds = 0

    // Turn the current values of the timer into an array (They can be anything at the start)
    var timerArray = timer.innerHTML.split('')

    // Define iterations for the amount of times the function loops
    var iterations = 0

    // Initialize timer on UI instead of just allowing loop to do it because otherwise it would take 1 sec

    // Update the timerArray to match minutes using function
    updateTime("min", timerArray, minutes)

    // Update the UI timer to match the array
    timer.innerHTML = timerArray.join('')

    secondInterval = setInterval(function() {
        if (iterations % 60 == 0) {
            // Iterations = seconds passed, thus maxMinutes * 60 = maximum iterations for the timer to complete
            if (iterations == maxMinutes * 60) {
                // Lose the game due to time up
                loss("time")

                // Return nothing to stop the rest of the loop from running
                return
            }

            // Pass one minute if 60 iterations (seconds) pass
            minutes -=1
            
            // Update timerArray to match minutes
            updateTime("min", timerArray, minutes)

            // Update the UI timer to match the array
            timer.innerHTML = timerArray.join('')
        }

        // Add one iteration
        iterations++

        // If seconds is 0 then reset to 60 after subtracting a minute
        if (seconds == 0) {
            seconds = 60
        }

        // Count down one second per iteration
        seconds -= 1

        // Same process as minutes but for seconds
        timerArray = timer.innerHTML.split('')

        updateTime("sec", timerArray, seconds)

        timer.innerHTML = timerArray.join('')
    }, 1000)
}

// Restart function instead of location.reload() to same memory instead of refreshing page
function restart(type) {
    // Hide win or loss screen
    document.getElementById(type + "Screen").style.display = "none"

    // Show start screen
    document.getElementById('startScreen').style.display = ""

    // Reset timer to default
    document.getElementById('timer').innerHTML = "00:00"

    // Reset inputted code to default
    codeGuess = ""

    // Reset inputted code on UI to default
    document.getElementById('codeInput').innerHTML = "____"
}

function win() {
    // Get time of win before hiding game UI
    time = document.getElementById('timer').innerHTML

    // Stop countdown
    clearInterval(secondInterval)

    // Hide game UI
    document.getElementById('bomb').style.display = "none"

    // Show win screen
    document.getElementById('winScreen').style.display = ""

    // Show winning time from timer
    document.getElementById('winTime').innerHTML = time

    // Show correct code
    document.getElementById('winCode').innerHTML = atob(encoded)
}

function loss(type) {
    // Stop the timer
    clearInterval(secondInterval)

    // Get time of loss before hiding game UI
    var time = document.getElementById('timer').innerHTML

    // Define initial time
    var initialTime = ["0", "0", ":", "0", "0"]

    // Define minutes as initial minutes using old code
    var minutes = initialMinutes

    // Hide game UI
    document.getElementById('bomb').style.display = "none"

    // Show loss screen
    document.getElementById('lossScreen').style.display = ""

    // Show correct code
    document.getElementById('lossCode').innerHTML = atob(encoded)

    // If reason for losing is wrong code, show time of loss
    if (type == "wrong code") {
        // Show winning time from timer
        document.getElementById('lossTime').innerHTML = time

        // Make loss message match
        document.getElementById('lossText').innerHTML = "TIME REMAINING:"
    }

    // If reason for losing is time, show initial time
    else if (type == "time") {
        // Update minutes of initial time to match
        updateTime("min", initialTime, minutes)

        // Update the text to match the array
        document.getElementById('lossTime').innerHTML = initialTime.join('')

        // Make loss message match
        document.getElementById('lossText').innerHTML = "TIME TAKEN:"
    }
}

function showTab(difficulty) {
    // Define a list for the different difficulty levels
    var difficulties = ["easy", "medium", "hard"]

    // Iterate through each difficulty
    for (let i = 0; i < difficulties.length; i++) {
        // Get the specific tab for the difficulty
        var tab = document.getElementById(difficulties[i] + "Tab")

        // If the difficulty matches the one clicked, darken the background, and show leaderboard
        if (i == difficulty) {
            tab.style.backgroundColor = "rgb(123, 123, 123)"
        }

        // Otherwise set to default color and hide other leaderboards
        else {
            tab.style.backgroundColor = "rgb(153, 153, 153)"
        }
    }

    document.getElementById("leaderboard").innerHTML = makeLeaderboard(difficulty)

}

function makeLeaderboard(difficulty) {
    var leaderboard = {}

    fetch
}