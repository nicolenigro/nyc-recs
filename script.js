function nycMap() {
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    n.style.display = "block";
    c.style.display = "none";
    m.style.display = "none";
}

function californiaMap() {
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    c.style.display = "block";
    n.style.display = "none";
    m.style.display = "none";
}

function maineMap(){
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    m.style.display = "block";
    n.style.display = "none";
    c.style.display = "none";
}