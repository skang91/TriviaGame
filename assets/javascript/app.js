
//first page
$("#questionnaire").hide();
$("#results-page").hide();

//clicking Start Button
$("#start-button").click(function(){
	$("#start-button").hide();
	$("#questionnaire").show();
});


//Variables
var counter =50;
var intervalID;
var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;


//function

var countingDown = document.getElementById("timer")
var counter = 31;
var newElement = document.createElement("span");
newElement.innerHTML = "30";
var id;

countingDown.parentNode.replaceChild(newElement, countingDown);

id = setInterval(function() {
    counter--;
    if(counter === 0){
		setTimeout(function(){
			$("#questionnaire").hide();
			$("#results-page").show();
		}, 1000);
	}
    if(counter < 0) {
        newElement.parentNode.replaceChild(countingDown, newElement);
        clearInterval(id);
    } else {
        newElement.innerHTML = counter.toString();
    }
}, 1000);




var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;


$("#correct-score").text(correctScore);
$("#incorrect-score").text(incorrectScore);
$("#unanswered-score").text(unansweredScore);


var answer = $('.q').val();



if(answer === "wrong"){
	incorrectScore++;
} else if(answer === undefined){
	unansweredScore++;
} else{ 
    if(answer === "correct"){
    correctScore++;
    }
}

//clinking Done Button	
$("#done-button").click(function(){
	$("#questionnaire").hide();
	$("#results-page").show();
});