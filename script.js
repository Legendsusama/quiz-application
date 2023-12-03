

// Dummy Content 

const questions = [
    {
        question : "Which is the Largest Animal in the world",
        answers : [
            {text : "Shark", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Elephant", correct : false},
            {text : "Giraffe", correct : false},

        ]
    },

    {
        question : "Which is the Largest desert in the world",
        answers : [
            {text : "kalahari", correct : false},
            {text : "Gobi", correct : false},
            {text : "Sahara", correct : false},
            {text : "Antarctica", correct : true},

        ]
    },

    {
        question : "Which is the smallest continent in the world",
        answers : [
            {text : "Asia", correct : false},
            {text : "Australia", correct : true},
            {text : "Arctic", correct : false},
            {text : "Africa", correct : false},

        ]
    },

    {
        question : "Which is the Largest Animal in the world",
        answers : [
            {text : "Shark", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Elephant", correct : false},
            {text : "Giraffe", correct : false},

        ]
    }

]


const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + ".  " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const createBtn = document.createElement('button');
        createBtn.innerHTML = answer.text;
        createBtn.classList.add('btn');
        answerButtons.appendChild(createBtn);

        if(answer.correct){
            createBtn.dataset.correct = answer.correct;
        }

        createBtn.addEventListener('click', selectAnswer)

    })

    

}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;

    }else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }

        button.disabled = true;
    });

    nextBtn.style.display = 'Block';

}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();   
    }else{
        startQuiz();
    }
})


function handleNextBtn(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

    

}

function showScore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = 'Block';
}


startQuiz()


