var isOn = 0;
$("#switchBtn").click(function() {
    if (isOn === 0) {
        isOn = 1;
        $("#switchBtn").css("left", "42px");
        gameReady();
    } else if (isOn === 1) {
        isOn = 0;
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