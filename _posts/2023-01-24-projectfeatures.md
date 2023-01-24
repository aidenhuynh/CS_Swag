---
toc: true
layout: post
description: Search Bar & Local storage "favoriting" system
categories: [markdown]
title: 1/24 Project Features
comments: true
---
{% include submenu.html %}

<style>
    td {
        background-color:#181818;
        vertical-align:baseline;
        color: #bbbbbb;
        font: 400 16px/1.5 -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", "Apple Color Emoji", Roboto, Helvetica, Arial, sans-serif
    }
    label {
        font-weight:normal
    }
</style>

# My Contributions

* A search bar to quickly find item names in the table
    - Algorithm/procedure that iterates through the API (list) of item names then selects ones that match the input of the search bar.
* A way to "favorite" items in the table and to only show favorited items in the table
    - Saved in localstorage so they remain favorited for the user
        - localStorage is an object (OOP!)

# CollegeBoard Requirements/Coding Plan

<table>
    <tr>
        <th>Row #</th>
        <th>Requirements</th>
        <th>Comments</th>
    </tr>
    <tr>
        <td rowspan="6">Row 1</td>
        <td><label><input type="checkbox" checked> input</label></td>
        <td>Text input in the search bar</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> output</label></td>
        <td>New table rows</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> functionality</label></td>
        <td>Change the table to match search</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> describes the overall purpose of the program.</label></td>
        <td>Provide an easy and quick way to find specific items</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> describes what functionality of the program is demonstrated in the video. </label></td>
        <td>Replaces table data with rows based on search</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> describes the input and output of the program demonstrated in the video.</label></td>
        <td>Text input and new rows</td>
    </tr>
    <tr>
        <td rowspan="4">Row 2</td>
        <td><input type="checkbox" checked><label> one that shows how data has been stored in this list (or other collection type).</label></td>
        <td>Create new list by indexing the API of items</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> one that shows the data in this same list being used as part of fulfilling the program’s purpose.</label></td>
        <td>Being in a list allows for an algorithm to easily iterate through and select needed data</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> identifies the name of the variable representing the list being used in this response. </label></td>
        <td>probably gonna be like itemList or something</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> describes what the data contained in this list is representing in the program. </label></td>
        <td>Data represents the name of the stored items</td>
    </tr>
    <tr>
        <td rowspan="2">Row 3</td>
        <td><label><input type="checkbox" checked> includes a program code segment that shows a list being used to manage complexity in the program.</label></td>
        <td>a for loop that checks each item in the list</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> explains how the named, selected list manages complexity in the program code by explaining why the program code could not be written, or how it would be written differently, without using this list. </label></td>
        <td>The list allows for an algorithm to index through each item with a for loop, which would be more complicated without this algorithm because you would have to individually input each string which would become horrible if the list contained a lot of items.</td>
    </tr>
    <tr>
        <td rowspan="3">Row 4</td>
        <td><label><input type="checkbox" checked> one showing a student-developed procedure with at least one parameter that has an effect on the functionality of the procedure.</label></td>
        <td>search(input) where input is the value of the text box</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> one showing where the student-developed procedure is being called. </label></td>
        <td>onKeyPress event</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> describes what the identified procedure does and how it contributes to the overall functionality of the program. </label></td>
        <td>I've described the algorithm like 3 times already you get the idea</td>
    </tr>
    <tr>
        <td rowspan="4">Row 5</td>
        <td><label><input type="checkbox" checked> sequencing</label></td>
        <td>Compares input to an item in the list then adds that item to a new list if it passes</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> iteration</label></td>
        <td>checks each item in the list</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> selection</label></td>
        <td>if the item matches the search (if the string of the item name includes the search value) then it gets added to a new list, if not then nothing happens to it</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> explains in detailed steps how the identified algorithm works in enough detail that someone else could recreate it.</label></td>
        <td>The algorithm starts by creating an empty list then uses a for loop that iterates through the list of item names. It first checks if the item name includes the value from the search, and if it returns true, then that item is appended to the new list then it repeats this check for the next item in the list. If this returns false, it immediately moves to the next item. After each item in the list had been indexed, it runs another procedure that changes the table data based on an array parameter, which here we use the new list so that it only uses data of items that matched the search.</td>
    </tr>
    <tr>
        <td rowspan="2">Row 6</td>
        <td><label><input type="checkbox" checked> describes the condition(s) being tested by each call to the procedure. </label></td>
        <td>search input "boxes"</td>
    </tr>
    <tr>
        <td><label><input type="checkbox" checked> identifies the result of each call. </label></td>
        <td>returns all rows of the table of boxes</td>
    </tr>
</table>