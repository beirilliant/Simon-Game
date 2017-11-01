var isOn = false;
var count = 0;
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
}

$("#start").click(function() {
    if (isOn) {
        endGame();
        gameReady();
        startGame();
    }
});