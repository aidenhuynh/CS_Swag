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
    unencoded = ""

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
    if (codeGuess == unencoded) {
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

function sleep(ms) {
    // Currently unused sleep function if I want it later (I probably will)
    return new Promise(resolve => setTimeout(resolve, ms));
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

    // Convert starting minutes to a string then an array
    minutes = minutes.toString().split('')
            
    // Use values from minutes array to update timer as an array, accounting for first 0 if < 10 mins
    if (minutes.join('') < 10) {
        timerArray[0] = 0
        timerArray[1] = minutes[0]
    }

    else {
        timerArray[0] = minutes[0]
        timerArray[1] = minutes[1]
    }

    // Turn minutes back into a string to be used later
    minutes = minutes.join('')

    // Update the UI timer to match the array
    timer.innerHTML = timerArray.join('')

    secondInterval = setInterval(function() {
        if (iterations % 60 == 0) {
            // Iterations = seconds passed, thus maxMinutes * 60 = maximum iterations for the timer to complete
            if (iterations == maxMinutes * 60) {
                // Stop the loop/interval when time is up
                clearInterval(secondInterval)

                // Hide the game UI
                document.getElementById('bomb').style.display = "none"

                // Show the loss screen
                document.getElementById('lossScreen')

                // Return nothing to stop the rest of the loop from running
                return
            }

            // Pass one minute if 60 iterations (seconds) pass
            minutes -=1

            // Update minutes using same process as before
            minutes = minutes.toString().split('')
            
            if (minutes.join('') < 10) {
                timerArray[0] = 0
                timerArray[1] = minutes[0]
            }

            else {
                timerArray[0] = minutes[0]
                timerArray[1] = minutes[1]
            }

            // Turn minutes back into a string to be subtractable back at the start of the loop
            minutes = minutes.join('')

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
        seconds = seconds.toString().split('')
        timerArray = timer.innerHTML.split('')

        if (seconds < 10) {
            timerArray[3] = 0
            timerArray[4] = seconds[0]
        }

        else {
            timerArray[3] = seconds[0]
            timerArray[4] = seconds[1]
        }

        seconds = seconds.join('')
        timer.innerHTML = timerArray.join('')
    }, 1000)
}

// Restart function instead of location.reload() to same memory instead of refreshing page
function restart(type) {
    // Hide win or loss screen
    document.getElementById(type + "Screen").style.display = "none"

    // Show start screen
    document.getElementById('startScreen').style.display = ""
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
    document.getElementById('winCode').innerHTML = unencoded
}

function loss(type) {
    // Get time of loss before hiding game UI
    var time = document.getElementById('timer').innerHTML

    // Define initial time
    var initialTime = []

    // Define minutes as initial minutes using old code
    var minutes = initialMinutes

    // Hide game UI
    document.getElementById('bomb').style.display = "none"

    // Show loss screen
    document.getElementById('lossScreen').style.display = ""

    // Show correct code
    document.getElementById('lossCode').innerHTML = unencoded

    // If reason for losing is wrong code, show time of loss
    if (type == "wrong code") {
        // Show winning time from timer
        document.getElementById('lossTime').innerHTML = time

        // Make loss message match
        document.getElementById('lossText').innerHTML = "TIME REMAINING:"
    }

    // If reason for losing is time, show initial time
    else {
        // Convert starting minutes to a string then an array
        minutes = minutes.toString().split('')
                    
        // Use values from minutes array to update timer as an array, accounting for first 0 if < 10 mins
        if (minutes.join('') < 10) {
            initialTime[0] = 0
            initialTime[1] = minutes[0]
        }

        else {
            initialTime[0] = minutes[0]
            initialTime[1] = minutes[1]
        }

        // Update the text to match the array
        document.getElementById('lossTime').innerHTML = initialTime.join('')

        // Make loss message match
        document.getElementById('lossText').innerHTML = "TIME TAKEN:"
    }
}