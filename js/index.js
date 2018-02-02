/*
* Your names
*/

var score = 0;
var questionCount = 0;
var questionArray = [];

var displayQuestion = function() {
  $('#questionbox').text(questionArray[questionCount].question);
  var answerValue = [];
  var correct = questionArray[questionCount].correct_answer;
  var incorrect = questionArray[questionCount].incorrect_answers;
  answerValue.push(correct);
  answerValue = answerValue.concat(incorrect);
  for (i = 0; i < answerValue.length; i++) {
  $('.question').append("<input type='radio' name='answer' id='option" + i + "' value='" + answerValue[i] + "' >" + "<span class='answers'>" + answerValue[i] + "</span>");
  };
};

var checkForEnd = function() {
  if (questionCount >= questionArray.length) {
    $('.container').toggleClass('hide');
    $('.scorebox').toggleClass('hide').text('Score: '+ score);
  }
};

var addScore = function() {
  var correct = questionArray[questionCount].correct_answer;
  var incorrect = questionArray[questionCount].incorrect_answers;

  for (i = 0; i < questionArray.length; i++) {
    if ($('#option' + i).val() === correct && $('#option' + i).is(':checked')) {
      score++;
    }
    };
    questionCount++;
    checkForEnd();
};

var nextQuestion = function () {
  addScore();
  $('input').remove();
  $('.answers').remove();
  displayQuestion();
};

var getQuestions = function () {

  $.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple').done(function(data) {
    questionArray = data.results;
    console.log(questionArray);
    displayQuestion();
    $('.nextbox').on('click', nextQuestion);

});
};

  $(document).ready(function() {
      getQuestions();

  });
