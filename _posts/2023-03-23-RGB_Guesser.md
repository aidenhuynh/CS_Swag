---
toc: true
layout: post
description: This is easily the worst game I've made!
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
            <td class="colorBox" id="colorBox" rowspan="4" colspan="2">
                <span id="mainColorBox"></span>
                <br>
                <span id="subColorBox" style="font-size:.5em"></span>
            </td>
            <td id="textBox" class="textBox" colspan="2">
                <br>
                <b>Guess the RGB value of the color at left.</b>
                <br>
            </td>
        </tr>
        <tr>
            <td class="buttons" colspan="2">
                <button class="redBox">HINT #1</button>
                <br><br>
                <button class="greenBox">HINT #2</button>
                <br><br>
                <button class="blueBox">HINT #3</button>
                <br>
            </td>
        </tr>
        <tr style="height:3em">
            <td colspan="2">
                <input id="inputBox" placeholder="Enter R, G, B here.">
            </td>
        </tr>
        <tr style="height:7em">
            <td style="width:25%">
                <span style="position: absolute">
                    <b>Score: </b><span id="scoreText"></span>
                    <br>
                    <b>Guesses: </b><span id="guessesText"></span>
                    <br>
                    <b>Avg. Acc.: </b><span id="accText"></span>
                    <br>
                    <b>Time: </b><span id="timeText"></span>
                    <br>
                </span>
            </td> 
            <td style="width:25%; height: 0">
                <button class="submit" id="submitButton" onclick="checkColor()">SUBMIT</button>
                <!-- Comment -->
            </td>
            <!-- Buttons Row -->
        </tr>
    </table>
</div>

<script>
var colorsChecked = 0
var totalSum = 0
var rgb = [0, 0, 0]
const submit = document.getElementById('submitButton')

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newRGB() {
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * (256))
    }

    newRgb = "rgb(" + rgb[0] +", " + rgb[1] + ", " + rgb[2] + ")"
    colorStyle =  document.getElementById('colorBox').style
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
        colorsChecked += 1

        sum += (100 * Math.abs((guess - actual)/actual))
    }

    totalSum += sum

    return (sum / 3).toFixed(2)
}

function calculateAvgAcc() {
    return (totalSum / colorsChecked).toFixed(2)
}

function validateInput(input) {
    const format = /([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/

    return format.test(input)
}

function checkColor() {
    input = document.getElementById('inputBox').value

    if (!validateInput(input)) {
        return alert("Invalid input: Please enter in the following format\n255, 255, 255")
    }
    
    document.getElementById('mainColorBox').innerHTML = "<b>The correct color was:</b><br>" + newRgb
    document.getElementById('subColorBox').innerHTML = "<b>Accuracy: </b>" + calculateAcc(input) + "<br><b>Time taken: </b>"
    document.getElementById('accText').innerHTML = calculateAvgAcc()
    submit.innerHTML = "NEXT"
    submit.onclick = function() { next() }
}

function next() {
    submit.innerHTML = "SUBMIT"
    submit.onclick = function() { checkColor() }
    document.getElementById('mainColorBox').innerHTML = ""
    document.getElementById('subColorBox').innerHTML = ""
    document.getElementById('inputBox').value = ""
    
    newRGB()
}

newRGB()
</script>