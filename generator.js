/*
doodling javascript
*/

function addLastName () {

    var lastNames = ['Van Halen', 'Huhtasaari', 'Niinistö']
    var userFirstName = document.getElementById("firstName").value;
    document.getElementById('answer').innerHTML = ('Your name is ', userFirstName + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]);
}