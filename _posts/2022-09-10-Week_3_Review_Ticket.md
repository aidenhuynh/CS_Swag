---
toc: true
layout: post
description: hacks for week 3
categories: [markdown]
title: Week 3 - Creative Development
---
# Week 3 Review Ticket - Creative Development

<ul>
    <li><a href="https://aidenhuynh.github.io/CS_Swag/markdown/2022/09/10/Week_3_AppLab_Planning.html">AppLab Planning</a></li>
    <li>
        <details closed>
            <summary><a href="https://studio.code.org/projects/applab/yU8LG9QW2WGsZCOJyzN9Po7YpE_wjN2Whpd_ieSEiX8">AppLab Creation: The RNG Test</a>(click for code)</summary>
            <blockquote>
                <code>
            function Code() {
  hideElement("buttonContinue");
  hideElement("buttonRestart");
  hideElement("textTitle");
  var ans1 = "nothing";
  var ans2 = "nothing";
  var ans3 = "nothing";
  var ans4 = "nothing";
  var socialCredit = 0;
  var ans = 0;
  setText("textScore", "Score: 0");
  function Correctans() {
    Hidebuttons();
    setScreen("screenCorrect");
    showElement("buttonContinue");
    socialCredit += 15;
    Questions();
    setText("textScore", "Score: "+socialCredit);
  }
  function Incorrectans() {
    Hidebuttons();
    setScreen("screenIncorrect");
    showElement("buttonRestart");
    socialCredit = "-30,000,000";
    onEvent("buttonRestart", "click", function( ) {
       Code();
    });
  }
  function Questioncheck() {
    onEvent("buttonTL", "click", function( ) {
      if (ans1 === "correct") {
        Correctans();
      } else {
        Incorrectans();
      }
    });
    onEvent("buttonTR", "click", function( ) {
      if (ans2 === "correct") {
        Correctans();
      } else {
        Incorrectans();
      }
    });
    onEvent("buttonBL", "click", function( ) {
      if (ans3 === "correct") {
        Correctans();
      } else {
        Incorrectans();
      }
    });
    onEvent("buttonBR", "click", function( ) {
      if (ans4 === "correct") {
        Correctans();
      } else {
        Incorrectans();
      }
    });
  }
  function Randomans() {
    ans = randomNumber(0, 3);
    if (ans === 0) {
      ans1 = "correct";
      ans2 = "incorrect";
      ans3 = "incorrect";
      ans4 = "incorrect";
    } else if (ans === 1) {
      ans2 = "correct";
      ans1 = "incorrect";
      ans3 = "incorrect";
      ans4 = "incorrect";
    } else if (ans === 2) {
      ans3 = "correct";
      ans1 = "incorrect";
      ans2 = "incorrect";
      ans4 = "incorrect";
    } else {
      ans4 = "correct";
      ans1 = "incorrect";
      ans2 = "incorrect";
      ans3 = "incorrect";
    }
  }
  function Showbuttons() {
    setScreen("screenQuestions");
    showElement("buttonTL");
    showElement("buttonTR");
    showElement("buttonBL");
    showElement("buttonBR");
    showElement("boxQuestions");
    setPosition("buttonTL", 6, 275, 150, 70);
    setPosition("buttonTR", 164, 275, 150, 70);
    setPosition("buttonBL", 6, 353, 150, 70);
    setPosition("buttonBR", 164, 353, 150, 70);
    setPosition("boxQuestions", 30, 30, 260, 130);
  }
  function Showstart() {
    setScreen("screenStart");
    showElement("buttonStart");
    showElement("textTitle");
  }
  function Hidestart() {
    hideElement("buttonStart");
    hideElement("textTitle");
  }
  function Hidebuttons() {
    hideElement("buttonTL");
    hideElement("buttonTR");
    hideElement("buttonBL");
    hideElement("buttonBR");
    hideElement("boxQuestions");
  }
  function Questions() {
    if (socialCredit === 0) {
      setText("boxQuestions", "Heads or Tails?");
      setText("buttonTL", "Heads");
      setText("buttonTR", "Tails");
      setText("buttonBL", "Both");
      setText("buttonBR", "Neither");
      var x = randomNumber(0, 1);
      if (x === 0) {
        ans1 = "correct";
      } else if (x === 1) {
        ans2 = "correct";
      }
      Questioncheck();
    } else if (socialCredit === 15) {
      Randomans();
      onEvent("buttonContinue", "click", function() {
        hideElement("buttonContinue");
        Showbuttons();
        setText("boxQuestions", "Pick a number 1 - 4");
        setText("buttonTL", "1");
        setText("buttonTR", "2");
        setText("buttonBL", "3");
        setText("buttonBR", "4");
      });
    } else if (socialCredit === 30) {
      Randomans();
      onEvent("buttonContinue", "click", function() {
        hideElement("buttonContinue");
        Showbuttons();
        setText("boxQuestions", "Which is correct?");
        setText("buttonTL", "This one");
        setText("buttonTR", "This one");
        setText("buttonBL", "This one");
        setText("buttonBR", "This one");
      });
    } else {
      setScreen("screenVicroy");
    }
  }
  Showstart();
  Hidebuttons();
  onEvent("buttonStart", "click", function( ) {
    Showbuttons();
    Hidestart();
    Questions();
  });
}
Code();
                </code>
            </blockquote>
        </details>
    </li>
    <li><a href="https://aidenhuynh.github.io/CS_Swag/jupyter/markdown/2022/09/10/Create_Task_Planning.html">Performance Task Planning</a></li>
</ul>