var counter = 0;

function clicked() {
    counter++;
    document.getElementById("btn").innerHTML = counter;
}

function loaded() {
    document.getElementById("btn").innerHTML = counter;
}