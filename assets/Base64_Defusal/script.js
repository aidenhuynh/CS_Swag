// Create global variable for guess
var codeGuess = ""

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
        console.log("win")
    }

    else {
        console.log("lose")
    }
}

function timeSelect() {
    document.getElementById('bomb').style.display = "visible"
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

    var secondInterval = setInterval(function() {
        if (iterations % 60 == 0) {
            // Iterations = seconds passed, thus maxMinutes * 60 = maximum iterations for the timer to complete
            if (iterations == maxMinutes * 60) {
                // Stop the loop/interval when time is up
                clearInterval(secondInterval)

                // Return nothing to stop the rest of the loop from running
                return
            }

            minutes -=1

            // Convert minutes to a string then an array
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