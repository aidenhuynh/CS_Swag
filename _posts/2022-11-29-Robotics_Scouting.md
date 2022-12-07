---
toc: true
layout: post
description: AHHHHHHHHH
categories: [markdown]
title: Robotics Scouting??!?!?!?
---
<table>
	<tr><th>Enter team ID (be careful to enter a valid team id, code is not checking lmao)</th></tr>
	<tr><td><input id="input"></td></tr>
</table>

<table id="table">
	<tr>
		<th>Team Number</th>
		<th>Team Name</th>
		<th>School</th>
		<th>Location</th>
		<th>Sponsors</th>
		<th>Rookie</th>
		<th>Past Awards</th>
		<th>Regionals</th>
		<th>Past Rankings</th>
	</tr>
</table>

<script>
const options = {
	method: 'GET',
	headers: {
		'X-TBA-Auth-Key': 'bzvh8REI0jbLzoR22AY9z6Ag9CDfIhWapA0Qb1rTldEG1KxAjFUFVOHzgnMY4c8T',
	}
};

var newRow = ""
var events = ""

document.getElementById("input").addEventListener("keyup", function() {
        event.preventDefault

        if (event.key === "Enter") {
            var inp = document.getElementById("input").value
			
			getTeamData(inp)
        }
    })

function getTeamData(id) {
	newRow = "<tr><td>" + id + "</td>"
    fetch('https://thebluealliance.com/api/v3/team/frc' + id + '/events', options)
		.then(response => response.json().then(data => {
			for (let i = 0; i < data.length; i++) {
				events += (data[i]["name"] + "\n")
			}

            newRow += "<tr>" + events + "</tr>"
        }))
	

}
	document.getElementById('table').innerHTML += newRow
</script>