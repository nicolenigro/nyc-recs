function nycMap() {
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    if (n.style.display !== "none"){
        n.style.display = "none";
    } else {
        n.style.display = "block";
        c.style.display = "none";
        m.style.display = "none";
    }
}

function californiaMap() {
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    if (c.style.display !== "none"){
        c.style.display = "none";
    } else {
        c.style.display = "block";
        n.style.display = "none";
        m.style.display = "none";
    }
}

function maineMap(){
    var n = document.getElementById("nyc");
    var c = document.getElementById("california");
    var m = document.getElementById("maine");
    if (m.style.display !== "none"){
        m.style.display = "none";
    } else {
        m.style.display = "block";
        n.style.display = "none";
        c.style.display = "none";
    }
}