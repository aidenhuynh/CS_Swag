---
toc: true
layout: post
description: Funny game funny game
categories: [markdown]
title: Who's That Pokémon?
---
<html lang="en">
    <head>
        <style>
        .myDiv {
            border: 0px solid rgb(0, 0, 0);
            padding: 30px;
            background-color: #4d4d4dbe;    
            width: 100%;
            margin: auto;
            border-radius: 25px;
            height:100%;
            font-family:'Courier New', Courier, monospace
        }
        button.myButton {
            height: 100%;
            width: 100%;
            background-color:rgb(72, 71, 71);
            color:rgb(0, 154, 0); 
            border: 3px solid rgb(255, 0, 0);
            margin: auto;
            line-height: 300%;
        }
        .myTable {
            margin:auto;
            width: 90%;
            table-layout: fixed;
            color:rgb(0, 154, 0);
            background-color:rgb(72, 71, 71);
            outline: 10px solid red;
        }
        tr.pokeBox {
            background-image:url('https://i.ibb.co/rQFzcnD/d83htw0-ec490c3b-f7dd-4570-a698-8404a8a12f99.png');
            background-size: cover;
            color:white;
        }
        .buttonRowStyle {
            line-height: 500%;
        }
        .myIMG {
            height: 30%;
            width: 30%;
            display: block;
            margin: 0 auto;
        }
        .yello {
            color:yellow
        }
        </style>
    </head>
    <div class="myDiv">
        <h1 style="color:rgb(0, 149, 255); text-align:center">Who's That Pokémon?</h1>
        <br>
        <h3 style="color:rgb(0, 149, 255)">HOW TO PLAY</h3>
            <ol type="1"> 
                    <li><h3 class="yello">Press start</h3></li>
                    <li><h3 class="yello">Choose generation of Pokémon (Gen 8 not yet fully supported by PokéAPI)</h3></li>
                    <li><h3 class="yello">Submit Pokémon name</h3></li>
                    <li><h3 class="yello">Press Next</h3></li>
                    <li><h3 class="yello">Repeat until all Pokémon are correct or until 3 incorrect answers</h3></li>
                <!-- 
                They're headings because for some reason the theme overrides all non heading text? 
                Yeah idk what to do abt that lol
                -->
            </ol>
        <br>
        <table class="myTable" id="table">
            <tr class="pokeBox">
                <td colspan=8>
                    <br>
                    <br>
                    <br>
                    <span id="imageBox"><img class="myIMG" src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png"></span>
                    <br>
                    <br>
                    <br>
                    <span id="gameInfo"><br><br><br></span>
                </td>
            </tr>
            <tr>
                <td colspan=8 id="inputRow"><br></td>
            </tr>
            <tr>
                <td colspan=8 id="message"><br></td>
            </tr>
            <span class="buttonRowStyle">
                <tr id="rowButtons">  
                    <td colspan=8><button class="myButton" onclick="gameStart()">CLICK TO START</button></td>
                </tr>
            </span>
        </table>
    </div>
<script>
    // Pokemon variables
    var pokeMin = ""
    var pokeMax = ""
    var pokeName = ""
    var pokeIMG = ""
    var pokeFilteredName = ""
    const gen = ""

    // Game variables
    var randId = 0
    var correct = 0
    var incorrect = 0
    const strikes = 3 // how many user is allowed to get incorrect before losing
    var pokeChecked = ""

    const options = {
      method: 'GET',
    }
    
    var usedIds = []
    const genList = [
        {
            "generation":1,
            "min":1,
            "max":151
        },
        {
            "generation":2,
            "min":152,
            "max":251
        },
        {
            "generation":3,
            "min":252,
            "max":386
        },
        {
            "generation":4,
            "min":387,
            "max":493
        },
        {
            "generation":5,
            "min":494,
            "max":649
        },
        {
            "generation":6,
            "min":650,
            "max":721
        },
        {
            "generation":7,
            "min":722,
            "max":809
        },
        {
            "generation":8,
            "min":810,
            "max":905
        }
    ]

    const pokeUnfiltered = [
        "nidoran-f",
        "nidoran-m",
        "deoxsys-normal",
        "wormadam-plant",
        "porygon-z",
        "giratina-altered",
        "shaymin-land",
        "basculin-red-striped",
        "darmanitan-standard",
        "tornadus-incarnate",
        "thundurus-incarnate",
        "landorus-incarnate",
        "meloetta-aria",
        "meowstic-male",
        "aegislash-shield",
        "pumpkaboo-average",
        "gourgeist-average",
        "zygarde-50",
        "oricorio-baile",
        "lycanroc-midday",
        "wishiwashi-solo",
        "type-null",
        "minior-red-meteor",
        "mimikyu-disguised",
        "toxtricity-amped",
        "eiscue-ice",
        "indeedee-male",
        "morpeko-full-belly",
        "urshifu-single-strike",
        "mr-mime",
        "farfetchd"
    ]
    
    const pokeFiltered = [
        "nidoran",
        "nidoran",
        "deoxsys",
        "wormadam",
        "porygon-Z",
        "giratina",
        "shaymin",
        "basculin",
        "darmanitan",
        "tornadus",
        "thundurus",
        "landorus",
        "meloetta",
        "meowstic",
        "aegislash",
        "pumpkaboo",
        "gourgeist",
        "zygarde",
        "oricorio",
        "lycanroc",
        "wishiwashi",
        "type: Null",
        "minior",
        "mimikyu",
        "toxtricity",
        "eiscue",
        "indeedee",
        "morpeko",
        "urshifu",
        "mr. mime",
        "farfetch'd"
    ]

    function gameStart() {
        document.getElementById('rowButtons').innerHTML = ""
        document.getElementById('message').innerHTML = "Choose a generation"

        for (i in genList) {
            document.getElementById('rowButtons').innerHTML += '\
            <td><button type="button" class="myButton" onclick="genSelect(' + i + ')">Gen' + genList[i]["generation"] + '</button></td> \
            '
        }
    }

    function genSelect(gen) {
        if (gen == 7) {
            document.getElementById('message').innerHTML = "Generation 8 is not currently fully supported by PokéAPI. Please choose another generation"
        }
        else {
        pokeMin = genList[gen]["min"]
        pokeMax = genList[gen]["max"]
        genSelected()
        }
    }

    function enterEvent() {
        if (incorrect != 3) {
            if (pokeChecked == true) {
                nextPokemon()
            }
            else {
                pokeCheck()
            }
        }
        else {
            location.reload()
        }
    }

    function genSelected() {
        document.getElementById('rowButtons').innerHTML = ' \
        <td colspan=4><button type="button" class="myButton" onclick="location.reload()">Restart</button></td> \
        <td colspan=4><button type="button" class="myButton" onclick="enterEvent()" id="continueButton">Submit</button></td> \
        '

        document.getElementById('inputRow').innerHTML = '<input type="text" id="inputBox" style="width:100%">'

        var inputBox = document.getElementById('inputBox')

        inputBox.addEventListener("keypress", function() {
            if (event.key === "Enter") {
                event.preventDefault
                enterEvent()
            }
        })

        document.getElementById('message').innerHTML = "<br>"

        document.getElementById('gameInfo').innerHTML = '\
        <body> \
            Pokémon: <b id="displayedName">???</b>\
            <br> \
            Correct: <b id="displayedCorrect">0/' + (pokeMax - pokeMin + 1) + '</b>\
            <br>\
            Incorrect: <b id="displayedIncorrect">0/' + strikes + '</b> \
        </body> \
        '

        getPokemon(pokeMin, pokeMax)
    }

    function getRandId(min, max) {
        randId = Math.floor(Math.random() * (max - min) + min)

        while (usedIds.includes(randId) == true | randId == 0) {
            randId = Math.floor(Math.random() * (max - min) + min)
        }
        
        return randId
    }

    function getPokemon(pokeMin, pokeMax) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + getRandId(pokeMin, pokeMax), options)
        .then(response => response.json().then(data => {
        pokeName = data.name
        pokeID = data.id
        pokeIMG = data.sprites.front_default

        document.getElementById('imageBox').innerHTML = '<img class="myIMG" src="' + pokeIMG + '">'
        document.getElementById('displayedName').innerHTML = '???'

        if (pokeUnfiltered.includes(pokeName) == true) {
            pokeFilteredName = pokeFiltered[pokeUnfiltered.indexOf(pokeName)]
        }
        else {
            pokeFilteredName = pokeName
        }
        }))
    }

    function pokeCheck(pokeGuess) {
        var pokeGuess = document.getElementById("inputBox").value
        var input = pokeGuess.toLowerCase()

        if (pokeGuess == "") {
            document.getElementById('message').innerHTML = "Please guess something in the box above and press submit or enter"
        }
        else {
            while (pokeChecked == false) {
                if (input == pokeFilteredName) {
                    if (correct < (pokeMax - pokeMin)) {
                    correct += 1
                    document.getElementById('message').innerHTML = pokeGuess + " is correct!"
                    usedIds.push(randId)
                    document.getElementById('continueButton').innerHTML = "Next"
                }
                    else {
                    correct += 1
                    document.getElementById('message').innerHTML = pokeGuess + " is correct! You win!"
                    document.getElementById('rowButtons').innerHTML = ' \
                    <td colspan=8><button type="button" class="myButton" onclick="location.reload()">Restart</button></td> \
                    '                }
                }
                else {
                    if (incorrect < (strikes - 1)) {
                        incorrect += 1
                        document.getElementById('message').innerHTML = pokeGuess + " is incorrect!"
                        document.getElementById('continueButton').innerHTML = "Next"
                    }
                    else {
                        incorrect += 1
                        document.getElementById('message').innerHTML = pokeGuess + " is incorrect! You lose!"
                        document.getElementById('rowButtons').innerHTML = ' \
                        <td colspan=8><button type="button" class="myButton" onclick="location.reload()">Restart</button></td> \
                        '
                    }             
                }
                document.getElementById('displayedCorrect').innerHTML = correct + "/" + (pokeMax - pokeMin + 1)
                document.getElementById('displayedIncorrect').innerHTML = incorrect + "/" + strikes
                document.getElementById('displayedName').innerHTML = pokeFilteredName.charAt(0).toUpperCase() + pokeFilteredName.slice(1)

                pokeChecked = true
            }
        }
    }

    function nextPokemon() {
        if (pokeChecked == true) {
            getPokemon(pokeMin, pokeMax)
            document.getElementById('message').innerHTML = "<br>"
            document.getElementById('inputBox').value = ""
            document.getElementById('continueButton').innerHTML = "Submit"
            pokeChecked = false
        }
        else (
            document.getElementById('message').innerHTML = "Please guess something in the box above and press submit or enter"
        )
    }
</script>
