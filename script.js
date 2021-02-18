var screenWidth = screen.width - 0;
var face1 = document.getElementById("face1");
var face2 = document.getElementById("face2");
var faces = document.getElementById("faces");

face1.style.width = screenWidth / 4;
face2.style.width = screenWidth / 4;

var introElement = document.getElementById("intro");
introElement.addEventListener("mousemove", changeFace, false);
var prevX = 0;
var maxWidth = screenWidth / 2;

function changeFace(e) {
    var xDirection = getMouseDirection(e);
    var face1Width = face1.offsetWidth;
    var face2Width = face2.offsetWidth;

    if (xDirection == "right") {
        moveRight(face1Width, face2Width);
    } else if (xDirection == "left") {
        moveLeft(face1Width, face2Width);
    }
    var percentage = getPercentage(face1Width, screenWidth / 4) / 100;
    document.getElementById("text1h").style.opacity = percentage > 0.2 ? percentage : 0;
    document.getElementById("text1p").style.opacity = percentage > 0.2 ? percentage : 0;

    var percentage = getPercentage(face2Width, screenWidth / 2) / 100;
    document.getElementById("text2h").style.opacity = percentage > 0.3 ? percentage : 0;
    document.getElementById("text2p").style.opacity = percentage > 0.3 ? percentage : 0;
}

function moveLeft(face1Width, face2Width) {
    if (face2Width < maxWidth + 110) {
        face2.style.width = face2Width + 10 + "px";
        face1.style.width = face1Width - 10 + "px";
    }
    var picPos = faces.offsetLeft;
    maxLeft = 100;
    if (picPos > maxLeft) {
        faces.style.left = picPos - 4 + "px";
    }
}

function moveRight(face1Width, face2Width) {
    if (face1Width < maxWidth) {
        face1.style.width = face1Width + 10 + "px";
        face2.style.width = face2Width - 10 + "px";
    }
    var picPos = faces.offsetLeft;
    var maxRight = screenWidth / 2;
    if (picPos < maxRight) {
        faces.style.left = picPos + 4 + "px";
    }
}

function getPercentage(width, total) {
    return (width * 100 / total);
}



function getMouseDirection(e) {
    var dir;
    currentX = e.pageX;
    prevX < currentX ? dir = "right" : dir = "left";
    prevX = currentX;
    return dir;
}