---
title: Binary Math
layout: default
description: A Binary Math illustrative application using HTML, Liquid, and JavaScript.
permalink: /frontend/binary
categories: []
tags: [html, liquid, javascript]
---

<!-- Hack 1: add a character display to text when 8 bits, determine if printable or not printable -->
<!-- Hack 2: change to 24 bits and add a color code and display color when 24 bits, think about display on this one -->
<!-- Hack 3: do your own thing -->

<style>
    .coolertable {
        table-layout:auto;
        width:50%
    }
</style>
<div class="container bg-primary">
    <header class="pb-3 mb-4 border-bottom border-primary text-dark">
        <span class="fs-4">Binary Math with Conversions</span>
    </header>
    <table class="coolertable">
        <tr><th colspan="2">Enter bits below:</th></tr>
        <tr>
            <td><input type="text" id="inputBox" style="width:100%"></td>
            <td width="25%"><button onclick="setBits()" style="width:100%">Submit</button></td>
        </tr>
        <tr><td colspan="2"><i id="message"></i></td></tr>
    </table>
    <div class="col-8">
                <table class="table">
                <tr id="table">
                    <th>Plus/Minus</th>
                    <th>Binary</th>
                    <th>Octal</th>
                    <th>Hexadecimal</th>
                    <th>Decimal</th>
                </tr>
                <tr>
                    <td id="inputAdd2"><input type="text" id="inputAdd"></td>
                    <td id="binary">00000000</td>
                    <td id="octal">0</td>
                    <td id="hexadecimal">0</td>
                    <td id="decimal">0</td>
                </tr>
                <tr><td colspan="5"><i id="message2"></i></td></tr>
                </table>
            </div>
<span id="binarystuff"></span>
</div>

<script>
    var BITS = "";
    var MAX = "";
    const MSG_ON = "Turn on";
    const IMAGE_ON = "{{site.baseurl}}/images/bulb_on.gif";
    const MSG_OFF = "Turn off";
    const IMAGE_OFF = "{{site.baseurl}}/images/bulb_off.png"
    var valueAdd = ""
    var bitsSelected = false

    document.getElementById("inputAdd").addEventListener("keyup", function() {
        event.preventDefault

        if (event.key === "Enter") { // Mr. Mortensen if you read this code I am so sorry.
            valueAdd = parseInt(document.getElementById('inputAdd').value)
            if (bitsSelected == false) {
                document.getElementById('message2').innerHTML = "Please enter desired bits before trying to add values."
            }
            else if (valueAdd == "" | valueAdd == 0 | isNaN(valueAdd) == true) {
                document.getElementById('message2').innerHTML = "Please enter a valid number."
            }
            else {
                add(valueAdd)
            }
    }})

// return string with current value of each bit
function getBits() {
    let bits = "";
    for(let i = 0; i < BITS; i++) {
    bits = bits + document.getElementById('digit' + i).value;
    }
    return bits;
}
// setter for DOM values
function setConversions(binary) {
    document.getElementById('binary').innerHTML = binary;
    // Octal conversion
    document.getElementById('octal').innerHTML = parseInt(binary, 2).toString(8);
    // Hexadecimal conversion
    document.getElementById('hexadecimal').innerHTML = parseInt(binary, 2).toString(16);
    // Decimal conversion
    document.getElementById('decimal').innerHTML = parseInt(binary, 2).toString();
}
//
function decimal_2_base(decimal, base) {
    let conversion = "";
    // loop to convert to base
    do {
    let digit = decimal % base;
    conversion = "" + digit + conversion; // what does this do?
    decimal = ~~(decimal / base);         // what does this do?
    } while (decimal > 0);                  // why while at the end? what is ~~?
    // loop to pad with zeros
    if (base === 2) {                        // only pad for binary conversions
    for (let i = 0; conversion.length < BITS; i++) {
        conversion = "0" + conversion;
    }
    }
    return conversion;
}

// toggle selected bit and recalculate
function toggleBit(i) {
    //alert("Digit action: " + i );
    var dig = document.getElementById('digit' + i);
    var image = document.getElementById('bulb' + i);
    var butt = document.getElementById('butt' + i);
    // Change digit and visual
    if (image.src.match(IMAGE_ON)) {
    dig.value = 0;
    image.src = IMAGE_OFF;
    butt.innerHTML = MSG_ON;
    } else {
    dig.value = 1;
    image.src = IMAGE_ON;
    butt.innerHTML = MSG_OFF;
    }
    // Binary numbers
    var binary = getBits();
    setConversions(binary);
}
// add is positive integer, subtract is negative integer
function add(n) {
    let binary = getBits();
    // convert to decimal and do math
    let decimal = parseInt(binary, 2);
    if (n > 0) {  // PLUS
    decimal = MAX <= (decimal + n) ? 0 : decimal += n; // OVERFLOW or PLUS
    } else  {     // MINUS
    decimal = 0 >= (decimal + n) ? MAX : decimal += n; // OVERFLOW or MINUS
    }
    // convert the result back to binary
    binary = decimal_2_base(decimal, 2);
    // update conversions
    setConversions(binary);
    // update bits
    for (let i = 0; i < binary.length; i++) {
    let digit = binary.substr(i, 1);
    document.getElementById('digit' + i).value = digit;
    if (digit === "1") {
        document.getElementById('bulb' + i).src = IMAGE_ON;
        document.getElementById('butt' + i).innerHTML = MSG_OFF;
    } 
    else {
        document.getElementById('bulb' + i).src = IMAGE_OFF;
        document.getElementById('butt' + i).innerHTML = MSG_ON;
    }
    }
    }


function setBits() {
    input = document.getElementById('inputBox').value

    if (input == "" | input == 0 | isNaN(input) == true) {
        document.getElementById('message').innerHTML = "Please enter a valid number"
        }
    else {
        BITS = input
        MAX = 2 ** BITS - 1
        document.getElementById("binarystuff").innerHTML = ' \
        <div class="row justify-content-md-center"> \
            <div class="col-12"> \
                <table class="table"> \
                <tr id="bulbrow"> \
                </tr> \
                <tr id="bulbrow2"> \
                </tr> \
                <tr id="columnvalues"> \
                </tr> \
                </table> \
            </div> \
        </div> \
        </div>'

        i = 0
        while (i < BITS) {
        document.getElementById("bulbrow").innerHTML += '\
        <td><img class="img-responsive py-3" id="bulb' + i + '" src="../images/bulb_off.png" alt="" width="40" height="Auto">\
        <button type="button" id="butt' + i + '" onclick="javascript:toggleBit(' + i + ')">Turn on</button> \
        </td>'

        document.getElementById("bulbrow2").innerHTML += '\
        <td><input type="text" id="digit' + i + '" value="0" size="1" readonly></td>'

        document.getElementById("columnvalues").innerHTML += '\
        <td>' + (2**(BITS-1))/(2**i) + '</td>'
        i += 1
        }
    }
    bitsSelected = true
    }
</script>