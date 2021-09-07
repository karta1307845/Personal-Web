var heights = [];
var imgNumber = 0;

function change(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo").innerHTML = xhttp.responseText;
            imgNumber = $("img[name='item']").length;
            $("img[name='item']").on("load", function () {
                this.style.verticalAlign = "middle";
                pushHeight(this.height);
            });
        }
    };
    xhttp.open("GET", page + ".txt", true);
    xhttp.send();
}

function pushHeight(height) {
    heights.push(height);
    if (heights.length == imgNumber) {
        adjustImg();
    }
}

function adjustImg() {
    var maxHeight = 0;
    for (var i = 0; i < imgNumber; i++) {
        if (heights[i] > maxHeight) {
            maxHeight = heights[i];
        }
    }
    maxHeight += 50;
    $(".carousel-item").css("width", "530px").css("height", maxHeight + "px").css("background-color", "black").css("text-align", "center");
    heights = [];
    imgNumber = 0;
}

function init() {
    document.getElementById("introduction").addEventListener("click", function (event) {
        event.preventDefault();
        change("introduction");
    })

    document.getElementById("joyce").addEventListener("click", function (event) {
        event.preventDefault();
        change("joyce");
    })

    document.getElementById("secret").addEventListener("click", function (event) {
        event.preventDefault();
        change("form");
    })

    var imgs = document.getElementsByName("item");
    imgNumber = imgs.length;
    for (var i = 0; i < imgNumber; i++) {
        imgs[i].style.verticalAlign = "middle";
        pushHeight(imgs[i].height);
    }
}

window.addEventListener("load", init, false);
