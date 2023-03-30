---
toc: true
layout: post
description: This is easily the worst game I've made! (and the most effortful one)
categories: [markdown, projects]
title: RGB Guesser
---
<style>
    button {
        box-sizing: border-box;
        border-radius: .4em;
        border-style: none;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        height: 2.5em;
        line-height: 1.25em;
        margin: 0;
        outline: none;
        padding: .5em .8em;
        position: relative;
        width: 35%;
    }

    .submit {
        height: 100%;
        width: 100%;
        font-size: 2em;
        color: #181818;
        border: 1px solid rgb(191, 191, 191)
    }

    input {
        box-sizing: border-box;
        border-radius: .4em;
        border-style: none;
        display: inline-block;
        height: 2.5em;
        line-height: 1.25em;
        margin: 0;
        outline: none;
        padding: .5em .8em;
        position: relative;
        width: 100%;
    }

    button:hover {
        filter: brightness(80%);
        transition: filter 0.2s;
    }

    .mainTable {
        font-family: "gill sans", sans-serif;
        table-layout: fixed;
        width: 57.625em;
    }

    .titleText {
        font-size: 5em;
        line-height: .5em;
        padding-top: .5em;
        padding-bottom: .3em;
    }

    .textBox {
        text-align: center;
        border-bottom: none
    }

    .buttons {
        text-align: center;
        border-top: none;
    }

    .subtext {
        font-family: "brush script mt", cursive;
        font-size: 0.5em;
    }

    .mainDiv {
        background-color:
    }

    .colorBox {
        width: 50%;
        vertical-align: middle;
        text-align: center;
        font-size: 2.5em
    }

    .red {
        color: rgb(204, 0, 0);
    }

    .redBox {
        background-color: rgb(204, 0, 0);
    }

    .green {
        color: rgb(106, 168, 79);
    }

    .greenBox {
        background-color: rgb(106, 168, 79);
    }

    .blue {
        color: rgb(60, 120, 216);
    }

    .blueBox {
        background-color: rgb(60, 120, 216);
        }

    .guessCount {
        font-size:.5em;
        color: #404040
    }
</style>

<div class="mainDiv">
    <table class="mainTable" id="mainTable">
        <tr>
            <th class="titleText" colspan="4">
                <span class="red">R</span><span class="green">G</span><span class="blue">B</span>
                 GUESSER
                <br>
                <i class="subtext">This game sucks!</i>
            </th>
        </tr>
        <tr>
            <td class="colorBox" id="colorBox" rowspan="4" style="height: 11.361em" colspan="4">
                <button onclick="start()" style="color:#404040">START</button>
            </td>
        </tr>
    </table>
</div>

<script>
// Represents total rounds of guessing, will be changeable at a menu later.
var maxColors = 3
var colorsChecked = 0
var totalSum = 0
var hints = 0
var rgb = [0, 0, 0]
var submit = ""
const scoreMultiplier = 1000

const buttons = ["hintR", "hintG", "hintB"]
const table = document.getElementById('mainTable')

// I am so sorry. To my Scrum Team, Mr. Mortensen, and Mr. Yeung.
const defaultTable = `
        <tr> \
            <th class="titleText" colspan="4"> \
                <span class="red">R</span><span class="green">G</span><span class="blue">B</span> \
                 GUESSER \
                <br> \
                <i class="subtext">This game sucks!</i> \
            </th> \
        </tr> \
        <tr> \
            <td class="colorBox" id="colorBox" rowspan="4" colspan="2"> \
                <span id="mainColorBox"></span> \
                <br> \
                <span id="subColorBox" style="font-size:.5em"></span> \
            </td> \
            <td id="textBox" class="textBox" colspan="2"> \
                <br> \
                <b id="message">Guess the RGB value of the color at left.</b> \
                <br> \
            </td> \
        </tr> \
        <tr> \
            <td class="buttons" colspan="2"> \
                <button id="hintR" class="redBox" onclick="hint('red')">HINT</button> \
                <br><br> \
                <button id="hintG" class="greenBox" onclick="hint('green')">HINT</button> \
                <br><br> \
                <button id="hintB" class="blueBox" onclick="hint('blue')">HINT</button> \
                <br><br> \
            </td> \
        </tr> \
        <tr style="height:3em"> \
            <td colspan="2"> \
                <input id="inputBox" placeholder="Enter R, G, B here."> \
            </td> \
        </tr> \
        <tr style="height:7em"> \
            <td style="width:25%"> \
                <span style="position: absolute"> \
                    <b>Score: </b><span id="scoreText">0</span> \
                    <br>
                    <b>Guesses: </b><span id="guessText">0/10</span> \
                    <br> \
                    <b>Avg. Acc.: </b><span id="accText">N/A</span> \
                    <br> \
                    <b>Hints: </b><span id="hintText">0/3</span> \
                    <br> \
                </span> \
            </td>  \
            <td style="width:25%; height: 0"> \
                <button class="submit" id="submitButton" style="background-color:rgb(191,191,191)" onclick="checkColor()">SUBMIT</button> \
            </td> \
        </tr> \
        `
const difficultySelectTable = ` \
        <tr>
            <th class="titleText" colspan="4">
                <span class="red">R</span><span class="green">G</span><span class="blue">B</span>
                 GUESSER
                <br>
                <i class="subtext">This game sucks!</i>
            </th>
        </tr>
        <tr>
            <td class="colorBox" id="colorBox" style="height: 11.361em" rowspan="4" colspan="4">
                <button class="guessCount" onclick="difficultySelect(3)">3 COLORS</button> \
                <br> \
                <button class="guessCount" onclick="difficultySelect(5)">5 COLORS</button> \
                <br> \
                <button class="guessCount" onclick="difficultySelect(10)">10 COLORS</button> \
                <br> \
                <button class="guessCount" onclick="difficultySelect('infinite')">ENDLESS</button> \
            </td>
        </tr>
    `

function start() {
    table.innerHTML = difficultySelectTable
}

function difficultySelect(count) {
    maxColors = count
    table.innerHTML = defaultTable
    guessText = document.getElementById('guessText')
    
    if (maxColors == "infinite") {
        maxColors = "∞"
        guessText.innerHTML = "0/∞"
    }
    else {
        guessText.innerHTML = colorsChecked + "/" + maxColors
    }

    submit = document.getElementById('submitButton')

    document.getElementById('inputBox').addEventListener("keydown", function() {
        if (event.key === "Enter") {
            submit.click()
        }
    })

    getNewRgb()
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewRgb() {
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * (256))
    }

    newRgb = "rgb(" + rgb[0] +", " + rgb[1] + ", " + rgb[2] + ")"
    colorStyle = document.getElementById('colorBox').style

    colorStyle.backgroundColor = newRgb
    colorStyle.borderLeft = "1px solid " + newRgb
    colorStyle.borderBottom = "1px solid " + newRgb
}

function calculateAcc(input) {
    inputList = input.split(",")
    sum = 0

    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i][0] == " ") {
            guess = Number(inputList[i].slice(1))
        }

        else {
            guess = Number(inputList[i])
        }
        
        actual = rgb[i]

        sum += (100 - (100 * Math.abs((guess - actual)/255)))
    }

    colorsChecked += 1
    totalSum += sum
    return (sum / 3)
}

function calculateAvgAcc() {
    return (totalSum / (3 * colorsChecked))
}

function calculateScore(input) {
    inputList = input.split(",")
    sum = 0

    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i][0] == " ") {
            guess = Number(inputList[i].slice(1))
        }

        else {
            guess = Number(inputList[i])
        }
        
        actual = rgb[i]

        sum += (100 - (100 * Math.abs((guess - actual)/255)))
    }
    
    return scoreMultiplier * (sum/3)
}

function calculateTotalScore() {
    return scoreMultiplier * calculateAvgAcc()
}

function validateInput(input) {
    const format = /([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/

    return format.test(input)
}

function getOppositeRgb(rgb) {
    newList = []
    if (Array.isArray(rgb)) {
        for (let i = 0; i < rgb.length; i++) {
            newList.push(255-rgb[i])
        }
    }
    else {
        rgbList = rgb.split(",")

        for (let i = 0; i < rgbList.length; i++) {
            if (rgbList[i][0] == " ") {
                color = Number(rgbList[i].slice(1))
            }

            else {
                color = Number(rgbList[i])
            }
        
            newList.push(255-color)
        }
    }

    return "rgb(" + newList[0] + ", "+ newList[1] + ", "+ newList[2] + ")"
}

function checkColor() {
    input = document.getElementById('inputBox').value

    if (!validateInput(input)) {
        return alert("Invalid input: Please enter in the following format\n255, 255, 255")
    }

    var oppositeReal = getOppositeRgb(rgb)
    var oppositeGuess = getOppositeRgb(input)

    document.getElementById('mainColorBox').style.color = oppositeReal
    document.getElementById('subColorBox').style.color = oppositeReal
    
    document.getElementById('mainColorBox').innerHTML = "<b>The correct color was:</b><br>" + newRgb
    document.getElementById('subColorBox').innerHTML = " \
    <b>Accuracy: </b>" + calculateAcc(input).toFixed(2) + "% \
    <br> \
    <b>Score: </b>+" + calculateScore(input).toFixed(0)

    document.getElementById('guessText').innerHTML = colorsChecked + "/" + maxColors
    document.getElementById('accText').innerHTML = calculateAvgAcc().toFixed(2) + "%"
    document.getElementById('scoreText').innerHTML = calculateTotalScore().toFixed(0)

    submit.style.backgroundColor = "rgb(" + input + ")"
    submit.style.color = oppositeGuess
    submit.style.border = "1px solid " + oppositeGuess

    if (colorsChecked == maxColors) {
        document.getElementById('message').innerHTML = 'Game over! See your color in the "NEXT" button.'
        submit.innerHTML = "RESTART"
        submit.onclick = function() { location.reload() }
    }

    else {
        document.getElementById('message').innerHTML = 'See your color in the "NEXT" button.'
        submit.innerHTML = "NEXT"
        submit.onclick = function() { next() }
    }
}

async function hint(color) {
    if (color == "red") {
        index = 0
        id = "hintR"
    }

    else if (color == "green") {
        index = 1
        id = "hintG"
    }

    else {
        index = 2
        id = "hintB"
    }

    button = document.getElementById(id)

    if (button.innerHTML.slice(0, 4) == "HINT") {
        if (hints == 3) {
            message = document.getElementById('message')

            i = 0

            while (i < 3) {
                message.innerHTML = ""
                await sleep(200)
                message.innerHTML = "You have run out of hints!"
                await sleep(200)
                i += 1
            }
        }

        else {
            button.innerHTML = id.slice(4) + " = " + rgb[index]
            hints += 1
            document.getElementById('hintText').innerHTML = hints + "/3"
        }
    }
}

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

function next() {
    submit.innerHTML = "SUBMIT"
    submit.style.backgroundColor = "rgb(191, 191, 191)"
    submit.style.border = "1px solid rgb(191, 191, 191)"
    submit.style.color = "#181818"
    submit.onclick = function() { checkColor() }
    document.getElementById('mainColorBox').innerHTML = ""
    document.getElementById('subColorBox').innerHTML = ""
    document.getElementById('inputBox').value = ""
    document.getElementById('message').innerHTML = "Guess the RGB value of the color at left."

    for (let i = 0; i < buttons.length; i++) {
        var button = document.getElementById(buttons[i])

        if (button.innerHTML.slice(0, 4) != "HINT") {
            button.innerHTML = "HINT"
        }
    }
    
    getNewRgb()
}
</script>