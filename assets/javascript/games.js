
$(document).ready(function () {
var target_min = 19, target_max = 120, score_min = 1, score_max = 12;
var crystal1_value = 0, crystal2_value = 0, crystal3_value = 0, crystal4_value = 0;
var target_value = 0, score_value = 0, wins = 0, loses = 0;

function reset() {
    // reset crystal values
    crystal1_value = Math.floor(Math.random() * score_max) + score_min;
    crystal2_value = Math.floor(Math.random() * score_max) + score_min;
    crystal3_value = Math.floor(Math.random() * score_max) + score_min;
    crystal4_value = Math.floor(Math.random() * score_max) + score_min;

    // reset target vaue
    target_value = Math.floor(Math.random() * target_max) + target_min;
    score_value = 0;
    updateScores();
}

reset();
function updateScores() {
    $("#target_value").text(target_value);
    $("#score_value").text(score_value);
    $("#win_games").text(wins);
    $("#lose_games").text(loses);
}
function updateValues() {
    if (score_value === target_value) {
        wins += 1;
        reset();
    } else if (score_value > target_value) {
        loses += 1;
        reset();
    } else {
        updateScores();
    }
}
$("#crystal1").click(function () {
    score_value += crystal1_value;
    updateValues();
});
$("#crystal2").click(function () {
    score_value += crystal2_value;
    updateValues();
});
$("#crystal3").click(function () {
    score_value += crystal3_value;
    updateValues();
});
$("#crystal4").click(function () {
    score_value += crystal4_value;
    updateValues();
});
});
