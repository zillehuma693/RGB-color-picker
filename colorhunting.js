var length = 6;
var body = document.body;
var box = document.getElementsByClassName("box");
var mycolor;
var message = document.getElementById("message");
var color;
init("");
function init(p) {
    var length = setupMode(p);
    console.log(p + length)
    color = RandomColors(length);
    mycolor = mycolora();
    colorassign(length);
    if (p === "hard") {
        refreshPage();
    }

    if (length === 3) {
        for (i = 3; i <= 5; i++) {

            box[i].style.display = "none";
        }

    }


}
function colorassign(length) {
    console.log(length,)
    for (i = 0; i < length; i++) {
        box[i].style.backgroundColor = color[i];

    }

    for (var i = 0; i < length; i++) {
        box[i].style.background = color[i];
        box[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            if (clickedColor === mycolor) {
                message.textContent = "Correct!";
                body.style.background = clickedColor;
                body.style.pointerEvents = "none"
                const myTimeout = setTimeout(myGreeting, 2000);


            } else {
                this.style.background = "none";
                message.textContent = "Not correct, please try Again";

            }
        });
    }
}
function setupMode(p) {
    if (p === "easy") {
        length = 3;
        return length;

    }
    else {
        length = 6;
    }
    return length;
}
function refreshPage() {
    window.location.reload();
}
function myGreeting() {

    refreshPage();
}
function RandomColors(l) {
    var arr = [];
    for (i = 0; i < l; i++) {
        arr[i] = random();
    }
    return arr;
}
function random() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function mycolora() {
    console.log(length);
    var mypickcolor = color[Math.floor(Math.random() * length)];
    document.getElementById("color").innerHTML = mypickcolor
    return mypickcolor
}

