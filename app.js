var questionsArray = [{
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Tag Markup Language",
            "Hyper Texting Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinking Text Marking Language",
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Creative Styling Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Computing Style Sheet",
        ]
    },
    {
        question: "Use the ________ element to associate javascript with a web page.",
        answer: "Script",
        options: [
            "Email",
            "Poster",
            "Script",
            "Iframe",
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: [
            "<js>",
            "<scripting>",
            "<script>",
            "none of the above",
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()",
            "none of the above",
        ]
    },
];

// Display Total Count of Questions

var qCount = document.getElementById('questionCount');
qCount.innerHTML = questionsArray.length;


function showQuestion(e) {

    // Show Current Question No
    var cCount = document.getElementById('currentCount');
    var questionCount = questionsArray.indexOf(questionsArray[e])
    cCount.innerHTML = questionCount + 1;

    // Show Questions
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionsArray[e].question;

    // ShowOptions
    var optionsElement = document.getElementsByClassName("options");
    for (var i = 0; i < optionsElement.length; i++) {
        optionsElement[i].innerHTML = questionsArray[e].options[i];
    }
}


var qCount = 0;

function nextQuestion() {
    check(qCount);
    qCount++;

    if (qCount <= questionsArray.length - 1) {
        showQuestion(qCount);
    }
    deactivate();
    setResult();
}


function activate(e) {
    deactivate();
    e.classList.add("active");
}

function deactivate(e) {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}

var score = 0;
function check(e) {
    var active = document.getElementsByClassName("active");
    if (active[0].innerHTML == questionsArray[e].answer) {
        score += 10;
    }
}

function setResult() {
    if (qCount == questionsArray.length) {
        alert("Your Score = " + score);
        window.location.href = "index.html";
    }
}

function startQuiz() {
    window.location.href = "QuizSection.html"
}