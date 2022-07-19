var data = null;
var max = 999999999;
var min = 0;


fetch("./test.json")
    .then(response => {
        return response.json();
    })
    .then(function (value) {
        data = value;
    });

function isBigEnough(data) {
    return (data.Value >= min && data.Value <= max);
}

function myFunction() {
    min = document.getElementById('inicio').value;
    max = document.getElementById('fim').value;
}    