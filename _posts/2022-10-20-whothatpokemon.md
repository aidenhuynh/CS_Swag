---
toc: true
layout: post
description: Funny game funny game
categories: [markdown]
title: Who's That Pokémon?
---
<html>
    <head>
        <style>
        .myDiv {
            border: 0px solid rgb(0, 0, 0);
            padding: 30px;
            background-color: #4d4d4dbe;    
            width: 100%;
            margin: auto;
            border-radius: 25px;
        }
        .myButton {
            height: 300%;
            width: 100%;
            background-color:rgb(72, 71, 71);
            color:rgb(0, 154, 0); 
            border: 1px solid rgb(125, 0, 0)
        }
        .myTable {
            width: 100%;
            background-size: contain;
            background-color: red;
            color: white;
            table-layout: fixed;
        }
        tr.pokeBox {
            background-image:url('https://i.ibb.co/rQFzcnD/d83htw0-ec490c3b-f7dd-4570-a698-8404a8a12f99.png');
            background-size: cover;
        }
        .myIMG {
            height: 30%;
            width: 30%;
            margin: auto;
        }
        </style>
    </head>
    <div class="myDiv">
        <h1 text-align="center">Who's That Pokémon?</h1>
        <body>HOW TO PLAY <br> 1. Press start <br> 2. Enter guess into box <br> 3. Press submit <br> 4. Press next <br></body>
        <br>
        <table class="myTable" id="table">
            <tr class="pokeBox">
                <td colspan=3>
                    <span id="imageBox"><img class="myIMG" src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png"></span>
                    <br>
                    <body>
                        Pokémon: <b id="displayedName">???</b>
                        <br> 
                        Score: <b id="displayedScore">0</b>
                    </body>
                </td>
            </tr>
            <tr><td colspan=3 id="inputRow"></td></tr>
            <tr><td colspan=3 id="message"></td></tr>
            <tr id="rowButtons">
                <td colspan=3><button class="myButton" onclick="gameStart()">CLICK TO START</button></td>
            </tr>
        </table>
    </div>
<script>
    // Pokemon variables
    var pokeCount = 151 // This is the current number of total pokemon
    var pokeName = ""
    var pokeIMG = ""
    var pokeFilteredName = ""

    // Game variables
    var score = 0
    var pokeChecked = ""

    const options = {
      method: 'GET',
    }
    
    const pokeFilter = [
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
        "mr-mime"
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
        "mr. mime"
    ]

    function gameStart() {
        document.getElementById('rowButtons').innerHTML = ' \
        <td><button type="button" id="buttonSubmit" class="myButton" onclick="pokeCheck()">Submit</button></td> \
        <td><button type="button" id="buttonReset" class="myButton" onclick="location.reload()">Reset</button></td> \
        <td><button type="button" id="buttonNext" class="myButton" onclick="nextPokemon()">Next</button></td> \
        '

        document.getElementById('inputRow').innerHTML = '<input type="text" id="inputBox" style="width:100%">'

        getPokemon(pokeCount)
    }

    function getPokemon(ID) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * ID), options)
        .then(response => response.json().then(data => {
        pokeName = data.name
        pokeID = data.id
        pokeIMG = data.sprites.front_default

        document.getElementById('imageBox').innerHTML = '<img class="myIMG" src="' + pokeIMG + '">'
        document.getElementById('displayedName').innerHTML = '???'

        if (pokeFilter.includes(pokeName) == true) {
            pokeFilteredName = pokeFiltered[pokeFilter.indexOf(pokeName)]
        }
        else {
            pokeFilteredName = pokeName
        }
        }))
    }

    function pokeCheck(pokeGuess) {
        var pokeGuess = document.getElementById("inputBox").value
        var input = pokeGuess.toLowerCase()

        if (input == pokeFilteredName) {
            score += 1
            document.getElementById('message').innerHTML = pokeGuess + " is correct!"
        }
        else {
            score -= 1
            document.getElementById('message').innerHTML = pokeGuess + " is incorrect!"
        }
        document.getElementById('displayedScore').innerHTML = score
        document.getElementById('displayedName').innerHTML = pokeFilteredName.charAt(0).toUpperCase() + pokeFilteredName.slice(1)

        pokeChecked = true
    }

    function nextPokemon() {
        if (pokeChecked == true) {
            getPokemon(pokeCount)
            document.getElementById('message').innerHTML = ""
            document.getElementById('inputBox').value = ""
            pokeChecked = false
        }
        else (
            document.getElementById('message').innerHTML = "Please guess something in the box above or press submit"
        )
    }

    // Still to do:
    // Gen select
    // make more user friendly: combine next and submit, allow "enter" key as input
</script>
</html>
