window.onload = function() {
  $("#start").on("click", function() {
    $(this).hide();
    nextQuestion();
  });
  $("#start").on("click", stopwatch.start);
}

var showQuestion;
var questionNumber = 0;
var intervalId;
var clockRunning = false;
var count = 0;

/////////////////////////////////////////////////////////////////////////
//Stop watch object
var stopwatch = {

  time: 30,
  lap: 1,

  reset: function() {

    stopwatch.time = 5;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");
  },
  start: function() {

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

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
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
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

var questions = [
  {
    question: 'Who is third behind Hank Aaron and Babe Ruth in major league career home runs?',
    choices: ['Reggie Jackson', 'Harmon Killebrew', 'Willie Mays', 'Frank Robinson'],
    answer: 'Willie Mays'
  },
  {
    question: 'What did the "D" in "D-Day" stand for?',
    choices: ['doom', 'day', 'Dwight (Eisenhower)', 'Dunkirk'],
    answer: 'day'
  },
  {
    question: 'Edward Scissorhands was set in which time period?',
    choices: ['The 1960s', 'The 1970s', 'The 1950s', 'The 1980s'],
    answer: 'The 1950s'
  },
  {
    question: 'Kylie Minogue began her music career in the late 80s. Which one of the following has she not done a duet with?',
    choices: ['Jimmy Plant', 'Nick Cave', 'Coldplay', 'Shakira'],
    answer: 'Shakira'
  },
  {
    question: 'What does the Halloween color orange represent?',
    choices: ['The harvest', 'The twilight', 'The burning of spirits', 'The voice of spirits'],
    answer: 'The harvest'
  },
  {
    question: 'What was the trick originally in ‘trick or treat’?',
    choices: ['Knock on the door and then run away', 'Throw water at the person opening the door', 'Sing a song to the person giving you the candy', 'Recite a good luck protection spell'],
    answer: 'Sing a song to the person giving you the candy'
  },
  {
    question: 'What does ponophobia mean?',
    choices: ['The fear of overheating', 'The fear of oversleeping', 'The fear of overthinking', 'The fear of overworking'],
    answer: 'The fear of overworking'
  },
  {
    question: 'Indiana Jones’ dad was obsessed with finding what?',
    choices: ['The Holy Scriptures', 'The Holy Grail', 'The Holy Cross', 'The Holy Temple'],
    answer: 'The Holy Grail'
  },
  {
    question: 'Which one of these was the daughter of Cliff Huxtable (the dad from The Cosby Show)?',
    choices: ['Denise', 'Donna', 'Diane', 'Danielle'],
    answer: 'Denise'
  },
  {
    question: 'Which character was the second to be disqualified in ‘Charlie and the Chocolate Factory’?',
    choices: ['Augustus Gloop', 'Violet Beauregarde', 'Mike Teavee', 'Veruca Salt'],
    answer: 'Violet Beauregarde'
  }
]





// nextQuestion();
function nextQuestion() {
  // debugger;
  
  $('#choices').empty();
  var currentQuestion = questions[questionNumber];
  $('#question').text(currentQuestion.question);
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var button = $('<button>'); 
    button.addClass('btn btn-primary choice');
    button.text(choice);
    button.attr('data-choice', choice);
    $('#choices').append(button);
  }
}

if (stopwatch.time == 0) {
    debugger;
     $(".choices").html('Times Up!')
     nextQuestion();
     questionNumber++;
     stopwatch.reset;
  } 

$(document).on('click', '.choice', function() {
  debugger;
  var choice = $(this).attr('data-choice');
  if (choice == questions[questionNumber].answer) {
    questionNumber++;
    stopwatch.reset;
  } 
  else {
    $("#choices").html('Wrong!')
    console.log('Wrong!');
    stopwatch.reset;
    showQuestion = setInterval(nextQuestion, 1000);
    nextQuestion();
  }
})

