
//first page
$("#questionnaire").hide();
$("#results-page").hide();


//Variables
var counter = 30;
var intervalId;
var correctCount = 0;
var wrongCount = 0;
var unanswered = 0;


//functions

//for timer
function countdownTimer(){
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    counter--;
    $("#timer").html(" " + counter + " " + "Seconds");
    if (counter ===1){
        $("#timer").html(" " + counter + " " + "Second");
    }
    else if(counter ===0) {
        stop();
        hide();
        displaySummary();
    }
}
function stop() {
    clearInterval(intervalId);
}

//hide questions after time is up
function hide(){
    $("#questionnaire").hide();
}


//Results Page
function displaySummary(){
    $("#results-page").show();
    unanswered = (8-(correctCount+wrongCount));
    $("#correct-score").text(" " + correctCount); 
    $("#incorrect-score").text(" " + wrongCount); 
    $("#unanswered-score").text(" " + unanswered); 
}

//Radio button
$('input[type=radio]').change(function(){
    correctCount = $('input[value=correct]:checked').length;
    wrongCount = $('input[value=wrong]:checked').length;
    unanswered = (8-(correctCount+wrongCount));
});


//Start Button
$("#start-button").click(function (){
	$("#start-button").hide();
    $("#questionnaire").show();
    countdownTimer();
});

//Done Button	
$("#done-button").click(function (){
	$("#questionnaire").hide();
    $("#results-page").show();
    displaySummary();
});
