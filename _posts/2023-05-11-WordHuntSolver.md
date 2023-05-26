---
toc: false
layout: post
description: free
categories: [markdown, projects]
title: Word Hunt Solver
comments: true
---
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
    <link href="{{site.baseurl}}/assets/WordHuntSolver/styles.css" rel="stylesheet" type="text/css"/>
</head>

<div class="container">
    <div class="board">
        <div class="row">
            <div class="letter"><input id="(0, 0)"></div>
            <div class="letter"><input id="(0, 1)"></div>
            <div class="letter"><input id="(0, 2)"></div>
            <div class="letter"><input id="(0, 3)"></div>
        </div>
        <div class="row">
            <div class="letter"><input id="(1, 0)"></div>
            <div class="letter"><input id="(1, 1)"></div>
            <div class="letter"><input id="(1, 2)"></div>
            <div class="letter"><input id="(1, 3)"></div>
        </div>
        <div class="row">
            <div class="letter"><input id="(2, 0)"></div>
            <div class="letter"><input id="(2, 1)"></div>
            <div class="letter"><input id="(2, 2)"></div>
            <div class="letter"><input id="(2, 3)"></div>
        </div>
        <div class="row">
            <div class="letter"><input id="(3, 0)"></div>
            <div class="letter"><input id="(3, 1)"></div>
            <div class="letter"><input id="(3, 2)"></div>
            <div class="letter"><input id="(3, 3)"></div>
        </div>
    </div>
    <div class="answers">
        <div class="title">SOLUTIONS</div>
        <div class="solution" id="solution"></div>
        <div class="instructions">
            <b>INSTRUCTIONS</b>
            <br>
            <ol>
                <li class="list">Enter to solve</li>
                <li class="list">Right arrow to see next word</li>
                <li class="list">Left arrow to see previous word</li>
            </ol>
        </div>
    </div>
</div>

<script type="text/javascript" src="{{site.baseurl}}/assets/WordHuntSolver/script.js"></script>