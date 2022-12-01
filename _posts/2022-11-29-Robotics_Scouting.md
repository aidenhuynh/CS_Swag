<script>
const options = {
	method: 'GET',
	headers: {
		'X-TBA-Auth-Key': 'bzvh8REI0jbLzoR22AY9z6Ag9CDfIhWapA0Qb1rTldEG1KxAjFUFVOHzgnMY4c8T',
	}
};

function getTeamEvents(id) {
    fetch('https://thebluealliance.com/api/v3' + id + 'events', options)
        .then(response => response.json().then(data => {
            
        }))
}

</script>