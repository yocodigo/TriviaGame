
//When button is pressed, start time function(stopwatch.start, stopwatch.count, then stopwatch.timeConverter) and game function(stopwatch.gameQAndA)

//When t = 0, run reset function (t = 30), run game function again IF for loop iteration is not done


//STOP WATCH
window.onload = function() {
 $("#start").on("click", stopwatch.startClock);
 $("#start").on("click", stopwatch.startTriviaGame);

};
var intervalId;
var clockRunning = false;

// Our stopwatch object
var stopwatch = {
  time: 30,

  reset: function() {

    stopwatch.time = 30;
    // stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");	

  startClock: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    $("#display").text(converted);
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
  //figure out how to make this work
    if (seconds === 0 && minutes === 0) {
    	stopwatch.reset;

    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

var questions = {
    Q : ["question1?", "question2?", "question3?", "question4?"],
    A : [answers1[answer1placeholder, answer2placeholder, answer3placeholder, answer4placeholder], 
        answers2[answer1placeholder, answer2placeholder, answer3placeholder, answer4placeholder],
        answers3[answer1placeholder, answer2placeholder, answer3placeholder, answer4placeholder],
        answers4[answer1placeholder, answer2placeholder, answer3placeholder, answer4placeholder]]
}  

var count2 = 0;

function displayQAndA() {
  //for loop that takes the question based on the count(index)
  for (var index = 0; index <= questions.Q.length; index++) { 
    $("#question-holder").html(questions.Q[index]);
    $("#answer1-holder").html(questions.A[index]answers[0]);
    $("#answer2-holder").html(questions.A[index]answers[1]);
    $("#answer3-holder").html(questions.A[index]answers[2]);
    $("#answer4-holder").html(questions.A[index]answers[3]);
  }
}

function nextQuestion() {
  //  TODO: Increment the count by 1.
  count2++;

  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");
  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayQAndA, 1000);


  // TODO: If the count is the same as the length of the question array, reset the count to 0.
  if (count2 === stopwatch.length) {
    count2 = 0;
  }
}

function startTriviaGame() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showQuestion = setInterval(nextQuestion, stopwatch.time);

}

function stopTriviaGame() {

  // TODO: Put our clearInterval here:
  clearInterval(showQuestion);

}

// This will run the display image function as soon as the page loads.
displayQAndA();

