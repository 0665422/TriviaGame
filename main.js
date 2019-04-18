var panel = $("#quiz-area");

var countStartNumber = 30;


// Question set
var questions = [
    {
        question: "What is the name of the first operation in R6S?",
        answer: ["Black Ice", "Chimera", "Blood Orchid", "White Noise"],
        correctAnswer: "Black Ice",
        image: "assets/black-ice.png"
    },

    {
        question: "Who is the Spetsnaz operator?",
        answer: ["Buck", "Fuze", "Finka", "Bandit"],
        correctAnswer: "Fuze",
        image: "assets/fuze.gif"
    },

    {
        question: "Which operator uses an Active Defense system to intercept grenades?",
        answer: ["Jager", "Kaid", "Kapkan", "Maestro"],
        correctAnswer: "Jager",
        image: "assets/jager.gif"
    },
    
];

// Variable to hold our setInterval
var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.correct --;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log('Time Up!');
            game.timeUp()
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.counter, 1000);
        panel.html("<h2>" + questions[this.currentQuestion] + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class+'answer-button' id='button' data-name=''" + 
            questions[this.currentQuestion].answer[i] + ">" + 
            questions[this.currentQuestion].answer[i] + "<button");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        
    }
}