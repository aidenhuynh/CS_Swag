---
toc: true
layout: post
description: Plans for Code.org thing
categories: [markdown]
title: Week 3 - AppLab Planning
---
# AppLab Planning - RNG Test

* Plans:
  - Russian roulette?
  - Coin flip?
  - A "quiz" that uses random functions to randomize the correct answer

* Progress:
  1. Tried to make a list for the questions but decided not to because I'm not that familiar with Java.
  2. Made basic title and question screens, and a "Start" button to switch from one to the other. Made a 50/50 question for heads or tails, with two other answers that are always wrong.
  3. Added questions and started to work on an answer randomization system that assigns a number from 0-3 to the variable "x", and the correct answer would correspond to one of the 4 possible values for x.
  4. Implemented the questions to the screen using setScreen commands and made a sort of recursive loop for setting the questions and verifying the answer. Also added victory and failure screens.
  5. Added a score tracker (social credit) at the bottom of the screen that increases by 15 for each correct answer. The questions use an "if" function to check the value of the score, and sets the text to the proper question based on it.