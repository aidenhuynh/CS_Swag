---
toc: true
layout: post
description: This is just like Del Norte High School on May 26, 2022!
categories: [markdown, projects]
title: Base64 Defusal
---
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
    <link href="{{site.baseurl}}/assets/Base64_Defusal/styles.css" rel="stylesheet" type="text/css"/>
</head>

<div id="bomb" class="container" style="display: none">
    <div class="container2">
        <div class="timerContainer">
            <div class="timer" id="timer">12:00</div>
        </div>
        <div class="codeContainer">
            <div class="defusal">
                <div class="screen">
                    DECODE THE FOLLOWING:
                    <br><br>
                    <span id="encodedBox"></span>
                </div>
                <div class="codeInput" id="codeInput">____</div>
            </div>
            <div class="keypad">
                <div class="row">
                    <div class="data" onclick="keypad('1')">1</div>
                    <div class="data" onclick="keypad('2')">2</div>
                    <div class="data" onclick="keypad('3')">3</div>
                </div>
                <div class="row">
                    <div class="data" onclick="keypad('4')">4</div>
                    <div class="data" onclick="keypad('5')">5</div>
                    <div class="data" onclick="keypad('6')">6</div>
                </div>
                <div class="row">
                    <div class="data" onclick="keypad('7')">7</div>
                    <div class="data" onclick="keypad('8')">8</div>
                    <div class="data" onclick="keypad('9')">9</div>
                </div>
                <div class="row">
                    <div class="data" onclick="keypad('back')">⌫</div>
                    <div class="data" onclick="keypad('0')">0</div>
                    <div class="data" onclick="keypad('enter')">↩</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container3">
        <div class="options1" onclick="modalOpen('base64')">BASE64</div>
        <div class="options2" onclick="modalOpen('ascii')">ASCII</div>
        <div class="options3" onclick="modalOpen('notepad')">NOTEPAD</div>
    </div>
</div>

<div class="container" id="startScreen">
    <div class="container2">
        <div class="timerContainer">
            <div class="startText">
                BASE64
                <br>
                DEFUSAL
            </div>
        </div>
        <div class="difficultyList">
            <div class="difficulty" onclick="difficultySelect(10)">EASY (10 MIN)</div>
            <div class="difficulty" onclick="difficultySelect(5)">MEDIUM (5 MIN)</div>
            <div class="difficulty" onclick="difficultySelect(1)">HARD (1 MIN)</div>
        </div>
    </div>
    <div class="container3">
        <div class="options1" onclick="modalOpen('tutorial')">TUTORIAL</div>
        <div class="options2" onclick="modalOpen('leaderboards')">RANKINGS</div>
        <div class="options3" onclick="window.open('https://www.base64decode.org/')">DECODER</div>
    </div>
</div>

<div class="container" style="display: none" id="winScreen">
    <div class="container2">
        <div class="timerContainer">
            <div class="startText">YOU WIN!</div>
        </div>
        <div class="codeContainer">
            <div class="defusal">
                <div class="screen">
                    TIME REMAINING:
                    <br><br>
                    <span id="winTime"></span>
                </div>
                <div class="codeInput" id="winCode"></div>
            </div>
            <div class="keypad">
                <div class="restart" onclick="restart('win')">RESTART</div>
            </div>
        </div>
    </div>
    <div class="container3">
        <div class="options1" onclick="modalOpen('tutorial')">TUTORIAL</div>
        <div class="options2" onclick="modalOpen('leaderboards')">RANKINGS</div>
        <div class="options3" onclick="window.open('https://www.base64decode.org/')">DECODER</div>
    </div>
</div>

<div class="container" style="display: none" id="lossScreen">
    <div class="container2">
        <div class="timerContainer">
            <div class="startText">YOU LOSE!</div>
        </div>
        <div class="codeContainer">
            <div class="defusal">
                <div class="screen">
                    <span id="lossText"></span>
                    <br>
                    <span id="lossTime"></span>
                </div>
                <div class="codeInput" id="lossCode"></div>
            </div>
            <div class="keypad">
                <div class="restart" onclick="restart('loss')">RESTART</div>
            </div>
        </div>
    </div>
    <div class="container3">
        <div class="options1" onclick="modalOpen('tutorial')">TUTORIAL</div>
        <div class="options2" onclick="modalOpen('leaderboards')">RANKINGS</div>
        <div class="options3" onclick="window.open('https://www.base64decode.org/')">DECODER</div>
    </div>
</div>

<div id="tutorial" class="modal">
    <span onclick="modalClose('tutorial')" class="close">&times;</span>
    <img class="modal-content" src="{{site.baseurl}}/images/Base64_Defusal/base64_guide.png">
</div>

<div id="base64" class="modal">
    <span onclick="modalClose('base64')" class="close">&times;</span>
    <img class="modal-content" src="{{site.baseurl}}/images/Base64_Defusal/base64_table.png">
</div>

<div id="ascii" class="modal">
    <span onclick="modalClose('ascii')" class="close">&times;</span>
    <img class="modal-content" src="{{site.baseurl}}/images/Base64_Defusal/ascii_table.png">
</div>

<div id="notepad" class="modal">
    <span onclick="modalClose('notepad')" class="close">&times;</span>
    <div class="modal-content"><textarea cols="100" rows="25"></textarea></div>
</div>


<script type="text/javascript" src="{{site.baseurl}}/assets/Base64_Defusal/script.js"></script>