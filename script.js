var isOn = false;
var count = 0;
var sound = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
};
$("#switchBtn").click(function() {
    if (isOn === false) {
        isOn = true;
        $("#switchBtn").css("left", "42px");
        gameReady();
    } else if (isOn) {
        isOn = false;
        $("#switchBtn").css("left", "4px");
        endGame();
    }
});

function gameReady() {
    $("#count").html("--");

}

function endGame() {
    $("#count").html("");
}

function startGame() {
    alert("game starts!");
    $(sound.green).trigger('play');
}

$("#start").click(function() {
    if (isOn) {
        endGame();
        gameReady();
        startGame();
    }
});