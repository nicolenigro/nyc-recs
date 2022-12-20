function nycMap() {
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    var s = document.getElementById("seattle");
    n.style.display = "block";
    c.style.display = "none";
    m.style.display = "none";
    s.style.display = "none";
}

function californiaMap() {
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    var s = document.getElementById("seattle");
    c.style.display = "block";
    n.style.display = "none";
    m.style.display = "none";
    s.style.display = "none";
}

function maineMap(){
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    var s = document.getElementById("seattle");
    m.style.display = "block";
    n.style.display = "none";
    c.style.display = "none";
    s.style.display = "none";
}

function seattleMap(){
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    var s = document.getElementById("seattle");
    s.style.display = "block";
    m.style.display = "none";
    n.style.display = "none";
    c.style.display = "none";
}