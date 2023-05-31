---
toc: true
layout: post
description: free
categories: [markdown, projects]
title: Word Hunt Solver Progress Log
comments: true
---

# November, 2022
- I want to win word hunt more
    * most reasonable conclusion: cheat!
    * Winning!

# May, 2023

## Version 0.1: 2D Array (3 hr)
- Made starter code stuff (1.5 hr)
    * fetch word list and convert to array (/r/n?)
    * convert input into array
    * check if string is a word (horrible time complexity, iterating through 30,000+ words lol -> most of the time comes from trying to find ways around this)
- Attempted to solve using 2D array
- No idea how to write algorithm (30 min experimenting)
- Try to sort first (1 hr)
    * awful time complexity

## Version 0.2: Node Trie (4 hr)
- Looked up how to make trie and made one (2 hr)
    * Took a while because I commented all code to try to further my own understanding of how it works
    * I still don't really get it
- Implemented depth-first search (2 hr)
    * Didn't work as intended
- Sorting still takes ages

## Version 0.3: Graphs (1 hr)
- Looked up a method to solve Boggle (basically the same game) that used a Graph structure
    * Also don't know how it works
    * Spent an hour trying to make it then realized there's no point if I can't figure out how it works

## Version 0.4.0: Better 2D Array (5 hr)
- After realizing there's no point trying different methods if I don't know how they work, I looked up more methods for solving, and found out that a 2D array is fastest
- Sorting took ages still, so I experimented with asynch functions (30min)
    * I found out that the javascript sort function did it basically instantly (wow!) (30 min)
- Adapt Geeks4Geeks code and comment everything so that I know that I actually understand how it works (4 hr)
    - Really cool recursive solve function
- It works with test array!

## Version 0.4.1: Adding a UI (4 hr)
- Made a input box and a function to get the letters put into the input box and convert that into a 2D array (30 min)
    * Didn't always work -> solution was to uppercase all inputs
- After making sure that it would work with any letter combination, I made real UI
- Flexbox of a 4x4 grid with input boxes with unique IDs (2 hr)
- Function to convert the inputs to 2D array (30 min)
- "Enter" event listener to solve and show words at the bottom of the screen (30 min)
    * Realized that it was showing words alphabetically -> Made a selection sort algorithm from scratch, complexity is probably not optimal lol (30 min)

## Version 0.4.2: Optimizing User Experience (4 hr)
- Inputting letter by letter is too slow, wasting time in the game to click on each box
    * Loop to add event listeners to move to next box on key up (1 hr)
        - Bugs:
            * Makes deleting letters hard
            * Multiple letters?
            * Non-letters?
        - Solution:
            * If statements and test functions! (2 hr)
- Scrolling through words is not convenient
    * Add another div to display words and instructions (30 min)
        - Left and right arrow event listeners to show next and previous words (30 min)

## Version 1.0.0 Released!
* Can be found [here](https://aidenhuynh.github.io/CS_Swag/markdown/projects/2023/05/11/WordHuntSolver.html)
* Total time: ~21 hours

## Version 1.0.1
* Onclick event to delete letters
* Document event listener for enter and arrow keys