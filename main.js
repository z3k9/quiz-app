const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'Javascript',
        correct: 'd'
    },{
        question: 'Who is the president of the United states of America?',
        a: 'Donald Trump',
        b: 'Barack Obama',
        c: 'Joe Biden',
        d: 'James Bond',
        correct: 'c'
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext markup language',
        b: 'Cascading style sheets',
        c: 'Application programming interface',
        d:  'Javascript object notation',
        correct: 'a'
    }, {
        question: 'What year was javascript launced?',
        a: '1997',
        b: '1994',
        c: '1996',
        d: '1995',
        correct: 'c'
    }
];

const quiz = document.querySelector('.quiz__container');
const question = document.querySelector('.quiz__question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('button');
const answerEls = document.querySelectorAll('[name="answer"]');
let answer;
let currentQuiz = 0;
let score = 0;


loadQuiz();
submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You've finished, you got ${score} / ${quizData.length} questions correctly</h2>`;
        }
        deselectAnswers();
    }
});
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked =false;
    })
}
function getSelected(){
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}


function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    question.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}



