/*
* Your names
*/

var score = 0;
var questionCount = 0;
var questionArray = [];


// get results.question results.answers results.incorrect_answer results.incorrect_answer[]
// build
//add one to count
// record if correct or not for score
// get next question
var displayQuestion = function() {
  $('#questionbox').text(questionArray[questionCount].question);
  var answerValue = [];
  var correct = questionArray[questionCount].correct_answer;
  var incorrect = questionArray[questionCount].incorrect_answers;
  answerValue.push(correct);
  answerValue = answerValue.concat(incorrect);
  for (i = 0; i < answerValue.length; i++) {
  $('.question').append("<input type='radio' name='answer' id='option'" + i + "' value='" + answerValue[i] + "' >" + "<p class='answers'>" + answerValue[i] + "</p>");
  };
  questionCount++;
};

var addScore = function() {
  var correct = questionArray[questionCount].correct_answer;
  var incorrect = questionArray[questionCount].incorrect_answers;

  if ($('#option1').val() === correct && $('#option1').attr('checked') === true) {
    score++;
  }
  console.log($('#option1'));



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


      // displayQuestion(questionObject);
  });
